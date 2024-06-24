import React from "react";
import { useRecoilState } from "recoil";
import { weatherAtom } from "../atoms/WeatherAtom";
import { FaSpinner } from "react-icons/fa";

export default function LockscreenWeather() {
  const [weather] = useRecoilState(weatherAtom);

  const kelvinToF = (val) => {
    return Math.floor(((val - 273.15) * 9) / 5 + 32);
  };

  const formatWeather = (str) => {
    let formattedStr = "";
    let strArray = str.split(" "); // Corrected splitting by space
    for (let word of strArray) {
      formattedStr += word.charAt(0).toUpperCase() + word.slice(1) + " "; // Appending to formattedStr
    }
    return formattedStr.trim(); // Trim to remove trailing space
  };

  return (
    <div className="absolute bottom-60 right-12 bg-white bg-opacity-5 py-4 px-4">
      <p className="text-center text-sm">Current Weather:</p>
      <p className="text-center">Gainesville Florida</p>
      {weather ? (
        <div className="flex mt-4 items-center">
          <div className="text-4xl semibold mr-5">
            <span>{kelvinToF(weather.main.temp)}°F</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm">{formatWeather(weather.weather[0].description)}</span>
            <span className="text-sm mt-1">Feels Like: {kelvinToF(weather.main.feels_like)}°F</span>
          </div>
        </div>
      ) : (
        <div className="h-11 flex items-center justify-center w-[182px] mt-4">
            <span ><FaSpinner className="animate-spin"/></span>
        </div>
      )}
    </div>
  );
}
