import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

export default function GithubContributions() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true)
  const token = import.meta.env.VITE_GITHUB_API_KEY;
  const username = "colemmorgan";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allEvents = [];
        let page = 1;
        while (true) {
          const response = await axios.get(
            `https://api.github.com/users/${username}/events?page=${page}`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          const events = response.data;
          if (events.length === 0) break; // No more events to fetch
          allEvents = [...allEvents, ...events];
          page++;
        }

        // Process all events to aggregate commits
        const contributionData = aggregateCommitsByDay(allEvents);
        setContributions(contributionData);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
    
  }, [username, token]);

  const aggregateCommitsByDay = (events) => {
    // Initialize an object to hold counts for each day
    const dateCounts = {};

    // Aggregate commits by day using UTC dates
    events.forEach((event) => {
      const eventDateUTC = new Date(event.created_at);
      const dateString = eventDateUTC.toISOString().split("T")[0]; 

      if (dateCounts[dateString]) {
        dateCounts[dateString] += getCommitCount(event);
      } else {
        dateCounts[dateString] = getCommitCount(event);
      }
    });

    const last30DaysData = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setUTCDate(date.getUTCDate() - i);
      const dateString = date.toISOString().split("T")[0];
      dateCounts["2024-06-04"] = 1;
      let count = dateCounts[dateString] || 0;
      last30DaysData.unshift({ date: dateString, count: count });
    }

    return last30DaysData;
  };

  const getCommitCount = (event) => {
    if (event.type === "PushEvent") {
      return event.payload.commits.length;
    }
    return 1;
  };

  return (
    <div className="backdrop-blur-sm bg-white bg-opacity-5 py-3 px-4 rounded-sm max-w-[222px]">
        <h3 className="text-sm">Github Contributions (30 days)</h3>
      {loading ? (
        <div className="h-[152px] w-[189px] flex items-center justify-center">
            <FaSpinner className="animate-spin"/>
        </div>
      ) : (
        <div className=" p-4 pb-2 grid grid-cols-6 gap-[2px]  mx-auto">
          {contributions.map((date) => (
            <Contribution date={date} key={date.date} />
          ))}
        </div>
      )}
    </div>
  );
}

function Contribution({ date }) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    if (date.count === 1) {
      setBgColor("rgb(24,197,94)");
    } else if (date.count > 1) {
      setBgColor("rgb(21,168,61)");
    }
  }, [date]);
  return (
    <a
      href="https://github.com/colemmorgan"
      target="_blank"
      className={`text-white h-6 w-6 flex items-center justify-center bg-gray-700 pointer-cursor rounded-sm ${
        date.count === 0 ? "bg-opacity-70" : ""
      }`}
      style={{ backgroundColor: bgColor }}
    ></a>
  );
}
