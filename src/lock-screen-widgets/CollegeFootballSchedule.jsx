import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

export default function CollegeFootballSchedule() {
  const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    try {
      const response = await axios.get(
        "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=134928"
      );
      setGames(response.data.results);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.error(`HTTP error! Status: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error in setting up the request:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    console.log(games);
  }, [games]);
  return (
    <div className="realtive right-[272px] backdrop-blur-sm bg-white bg-opacity-5 p-3  rounded-sm min-h-[196px] mr-2 md:mt-2 md:mr-0 lg:mr-2 lg:mt-0">
      <p className="text-sm text-center mb-2">Recent Home Games:</p>
      <ul className="px-4">
        {" "}
        {loading ? (
          <div className="h-[140px] w-[253px] flex items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          games
            .slice(0, 4)
            .map((game) => <Game key={game.idEvent} game={game} />)
        )}
      </ul>
    </div>
  );
}

function Game({ game }) {
  return (
    <div className="flex mb-1 items-center">
      <div className="flex items-center">
        <span className="text-sm mr-2">
          {game.strHomeTeam.split(" ").slice(1)}
        </span>
        <img
          src={`${game.strHomeTeamBadge}/tiny`}
          alt=""
          className="max-w-7 mb-1"
        />
      </div>
      <div className="mx-3 min-w-[57px] flex justify-center">
        <span className="mr-2">{game.intHomeScore}</span>
        <span>-</span>
        <span className="ml-2">{game.intAwayScore}</span>
      </div>

      <div className="flex items-center">
        <img
          src={`${game.strAwayTeamBadge}/tiny`}
          alt=""
          className="max-w-7 mb-1"
        />
        <span className="text-sm ml-2">
          {game.strAwayTeam.split(" ").slice(1)}
        </span>
      </div>
    </div>
  );
}
