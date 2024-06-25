import React from "react";
import { toolbarModalsOpenAtom } from "../atoms/ToolbarAtoms";
import { useRecoilState } from "recoil";
import { weatherAtom } from "../atoms/WeatherAtom";

export default function WeatherModal() {
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(
    toolbarModalsOpenAtom
  );
  const [weather, setWeather] = useRecoilState(weatherAtom);

  const formatWeather = (str) => {
    let formattedStr = "";
    let strArray = str.split(" ");
    for (let word of strArray) {
      formattedStr += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
    return formattedStr.trim();
  };

  const kelvinToF = (val) => {
    return Math.floor(((val - 273.15) * 9) / 5 + 32);
  };

  function convertUnixTo12HourFormat(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${hours}:${formattedMinutes} ${ampm}`;
  }

  return (
    <div
      className={`absolute bottom-14 right-3 w-[380px] h-32 bg-[#242424] px-5 py-3 rounded-md transition-all border border-[#424242]
                    ${
                      toolbarModalsOpen.weather
                        ? ""
                        : "translate-x-12 translate-y-12 opacity-0"
                    }`}
    >
      {weather && (
        <>
          <div className="flex justify-between">
            <p className="text-4xl">{kelvinToF(weather.main.temp)}°F</p>
            <div className="text-sm leading-snug mt-1">
              <p>Conditions:</p>
              <p>{formatWeather(weather.weather[0].description)}</p>
            </div>
            <div className="text-sm leading-snug pt-1">
              <p>Location:</p>
              <p>Gainesville Florida</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap  text-sm justify-between">
            <p>Feels Like: {kelvinToF(weather.main.feels_like)}°F</p>
            <p className="mb-1.5">Humidity: {weather.main.humidity}%</p>
            <p className="">Wind: {weather.wind.speed} MPH</p>
            <p className="">
              Sunset: {convertUnixTo12HourFormat(weather.sys.sunset)}
            </p>
            <p className="">
              Sunrise: {convertUnixTo12HourFormat(weather.sys.sunrise)}
            </p>
            <p className="">Visibility: {weather.visibility / 1000} KM</p>
          </div>
        </>
      )}
    </div>
  );
}
