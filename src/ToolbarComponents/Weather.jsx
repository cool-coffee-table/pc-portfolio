import React from "react";
import { useRecoilState } from "recoil";
import { weatherAtom, weatherLocationAtom } from "../atoms/WeatherAtom";
import { toolbarModalsOpenAtom } from "../atoms/ToolbarAtoms";

export default function Weather() {

  const [weather, setWeather] = useRecoilState(weatherAtom)
  const [weatherLocation, setWeatherLocation] = useRecoilState(weatherLocationAtom)
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(toolbarModalsOpenAtom)

  const formatWeather = (str) => {
    let formattedStr = "";
    let strArray = str.split(" ");
    for (let word of strArray) {
      formattedStr += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
    return formattedStr.trim();
  };

  

  return (
    <div className="px-3 rounded-sm flex items-center justify-center hover:bg-slate-600 cursor-pointer" 
    onClick={() => setToolbarModalsOpen({calendar: false, weather: !toolbarModalsOpen.weather, controlCenter: false})}>
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
