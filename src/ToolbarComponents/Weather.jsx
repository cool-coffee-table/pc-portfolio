import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { weatherAtom, weatherLocationAtom } from "../atoms/WeatherAtom";
import { showModalsAtom } from "../atoms/ModalAtoms";

export default function Weather() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [weather, setWeather] = useRecoilState(weatherAtom)
  const [weatherLocation, setWeatherLocation] = useRecoilState(weatherLocationAtom)
  const [showModals, setShowModals] = useRecoilState(showModalsAtom);

  const formatWeather = (str) => {
    let formattedStr = "";
    let strArray = str.split(" "); // Corrected splitting by space
    for (let word of strArray) {
      formattedStr += word.charAt(0).toUpperCase() + word.slice(1) + " "; // Appending to formattedStr
    }
    return formattedStr.trim(); // Trim to remove trailing space
  };

  

  return (
    <div className="px-3 rounded-sm flex items-center justify-center hover:bg-slate-600 cursor-pointer" onClick={() => setShowModals((prev) => ({...prev, weather: !prev.weather}))}>
      {weather ? (
        <>
          <span>{Math.floor(((weather.main.temp - 273.15) * 9) / 5 + 32)}°F</span>
          <span className="pl-1.5">{formatWeather(weather.weather[0].description)}</span>   
        </>
      ):  <>
      <span>77°F</span>
         <span className="pl-1.5">Clouds</span>
        
       </>}
    </div>
  );
}
