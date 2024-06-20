import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { weatherAtom, weatherLocationAtom } from "../atoms/WeatherAtom";

export default function Weather() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [weather, setWeather] = useRecoilState(weatherAtom)
  const [weatherLocation, setWeatherLocation] = useRecoilState(weatherLocationAtom)



  

  return (
    <div className="px-3  flex items-center justify-center hover:bg-slate-600 cursor-pointer">
      {weather ? (
        <>
          <span>{Math.floor(((weather.main.temp - 273.15) * 9) / 5 + 32)}°F</span>
          <span className="pl-1.5">{weather.weather[0].description}</span>   
        </>
      ):  <>
      <span>77°F</span>
         <span className="pl-1.5">Clouds</span>
        
       </>}
    </div>
  );
}
