import React, {useEffect} from "react";
import Toolbar from "./Toolbar";
import IconGrid from "./IconGrid";
import Modal from "./Modal";
import Welcome from "../modal-bodies/Welcome";
import WeatherApp from "../modal-bodies/WeatherApp";
import { useRecoilState } from "recoil";
import { weatherAtom, weatherLocationAtom } from "../atoms/WeatherAtom";
import axios from "axios";
import BackgroundSelector from "../modal-bodies/BackgroundSelector";
import { showModalsAtom } from "../atoms/ModalAtoms";
import Notepad from "../modal-bodies/Notepad";

import FileExplorer from "./FileExplorer";
import Contact from "../modal-bodies/Contact";


export default function Home() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [weather, setWeather] = useRecoilState(weatherAtom);
  const [weatherLocation, setWeatherLocation] =
    useRecoilState(weatherLocationAtom);
  const [showModals, setShowModals] = useRecoilState(showModalsAtom);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apiKey}`;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const closeModals = {
    closeWelcome: () => setShowModals((prev) => ({ ...prev, welcome: false })),
    closeBackgrounds: () =>
      setShowModals((prev) => ({ ...prev, backgrounds: false })),
    closeNotes: () => setShowModals((prev) => ({ ...prev, notes: false })),
    closeWeather: () => setShowModals((prev) => ({ ...prev, weather: false })),
    closeFileExplorer: () =>
      setShowModals((prev) => ({ ...prev, fileExplorer: false })),
    closeContact: () =>
      setShowModals((prev) => ({ ...prev, contact: false })),
  };
  return (
    <div className="max-h-screen h-screen  w-screen relative flex flex-col select-none overflow-hidden">
      {showModals.welcome && (
        <Modal
          id={"welcomeModal"}
          childId={"Welcome"}
          body={<Welcome />}
          close={closeModals.closeWelcome}
        />
      )}
      {showModals.weather && (
        <Modal
          id={"weatherApp"}
          childId={"Weather"}
          body={<WeatherApp />}
          close={closeModals.closeWeather}
        />
      )}
      {showModals.backgrounds && (
        <Modal
          id={"backgroundSelector"}
          childId={"Backgrounds"}
          body={<BackgroundSelector />}
          close={closeModals.closeBackgrounds}
        />
      )}
      {showModals.notes && (
        <Modal
          id={"notepadApp"}
          childId={"Notepad"}
          body={<Notepad />}
          close={closeModals.closeNotes}
        />
      )}
      {showModals.fileExplorer && <FileExplorer />}
      {showModals.contact && <Modal id={"contactModal"} childId={"Contact"} body={<Contact/>} close={closeModals.closeContact}/>}
      <IconGrid />
      <Toolbar />
    </div>
  );
}
