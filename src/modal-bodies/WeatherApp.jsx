import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { weatherAtom, weatherLocationAtom } from "../atoms/WeatherAtom";

export default function WeatherApp() {
  const [weather, setWeather] = useRecoilState(weatherAtom);
  const [weatherLocation, setWeatherLocation] =
    useRecoilState(weatherLocationAtom);

  const kelvinToF = (val) => {
    return Math.floor(((val - 273.15) * 9) / 5 + 32);
  };

  function convertUnixTo12HourFormat(unixTimestamp) {
    // Create a Date object from the Unix timestamp
    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds

    // Extract hours and minutes
    let hours = date.getHours(); // Use getHours() for local time
    const minutes = date.getMinutes();

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format minutes with leading zero
    const formattedMinutes = String(minutes).padStart(2, "0");

    // Return formatted time as hh:mm AM/PM
    return `${hours}:${formattedMinutes} ${ampm}`;
  }

  useEffect(() => {
    console.log(weather);
  }, [weather]);
  return (
    <div className="p-4 w-full h-full" id="weather">
      <div className="max-w-[400px] mx-auto">
        {" "}
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-2xl underline mb-2">Current Weather</p>
          <input
            type="text"
            className="bg-transparent mt-1 text-lg max-w-[210px] outline-none py-0.5 px-2 rounded-md text-center"
            value={weatherLocation}
            onChange={(e) => setWeatherLocation(e.target.value)}
          />
        </div>
        {weather && (
          <div className="mt-4">
            <p className="text-center text-6xl">
              {kelvinToF(weather.main.temp)}°F
            </p>
            <p className="text-center text-xl mt-1">
              {weather.weather[0].description}
            </p>
            <div className="flex mt-6 flex-wrap justify-between">
              <p className="mb-2">Humidity: {weather.main.humidity}%</p>
              <p className="mb-2">
                Feels Like: {kelvinToF(weather.main.feels_like)}°F
              </p>
              <p className="mb-2">Wind: {weather.wind.speed} MPH</p>
              {/* <p className="mb-2">Gust: {weather.wind.gust} MPH</p>
            <p className="mb-2">Sunrise: {convertUnixTo12HourFormat(weather.sys.sunrise)}</p>
            <p className="mb-2">Sunset: {convertUnixTo12HourFormat(weather.sys.sunset)}</p>
            <p className="mb-2">Visibility: {weather.visibility / 1000} KM</p>
            <p className="mb-2">Longitude: {weather.coord.lon.toFixed(2)}</p>
            <p className="mb-2">Latitude: {weather.coord.lat.toFixed(2)}</p> */}
            </div>
            {/* <p className="text-center mt-2 font-bold">Last Updated: {convertUnixTo12HourFormat(weather.dt)}</p> */}
          </div>
        )}
      </div>
    </div>
  );
}
