import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Function to get current time and format it
    function getCurrentTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // Convert to 12-hour format
      const formattedHours = hours.toString(); // Convert hours to string without padding
      const formattedTime = `${formattedHours}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
      return formattedTime;
    }

    // Function to get current date and format it
    function getCurrentDate() {
      const now = new Date();
      const month = (now.getMonth() + 1).toString(); // Convert month to string without padding
      const day = now.getDate().toString().padStart(2, "0");
      const year = now.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;
      return formattedDate;
    }

    // Initial call to set the time and date immediately
    setTime(getCurrentTime());
    setDate(getCurrentDate());

    // Set up interval to update time every second
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <p>{time}</p>
      <p className="mt-[1px]">{date}</p>
    </div>
  );
}

export default Clock;
