import React, { useEffect } from "react";
import Toolbar from "./Toolbar";
import IconGrid from "./IconGrid";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { weatherAtom, weatherLocationAtom } from "../atoms/WeatherAtom";
import axios from "axios";
import BackgroundSelector from "../modal-bodies/BackgroundSelector";
import { showModalsAtom } from "../atoms/ModalAtoms";
import Notepad from "../modal-bodies/Notepad";
import FileExplorer from "./FileExplorer";
import Contact from "../modal-bodies/Contact";
import About from "../modal-bodies/About";
import Skills from "../modal-bodies/Skills";
import ControlCenterModal from "./ControlCenterModal";
import { screenFiltersAtom } from "../atoms/ToolbarAtoms";
import Calendar from "./Calendar";
import SnakeGame from "../modal-bodies/SnakeGame/SnakeGameWindow";
import WeatherModal from "./WeatherModal";

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
    closeSnake: () => setShowModals((prev) => ({ ...prev, snake: false })),
    closeBackgrounds: () =>
      setShowModals((prev) => ({ ...prev, backgrounds: false })),
    closeNotes: () => setShowModals((prev) => ({ ...prev, notes: false })),
    closeSkills: () => setShowModals((prev) => ({ ...prev, skills: false })),
    closeFileExplorer: () =>
      setShowModals((prev) => ({ ...prev, fileExplorer: false })),
    closeContact: () => setShowModals((prev) => ({ ...prev, contact: false })),
    closeAbout: () => setShowModals((prev) => ({ ...prev, about: false })),
  };

  const [screenFilters, setScreenFilters] = useRecoilState(screenFiltersAtom);

  useEffect(() => {
    document.body.style.filter = `brightness(${screenFilters.brightness}) grayscale(${screenFilters.grayscale}) contrast(${screenFilters.contrast}) saturate(${screenFilters.saturation})`;
    document.body.style.backdropFilter = `brightness(${screenFilters.brightness}) grayscale(${screenFilters.grayscale}) contrast(${screenFilters.contrast}) saturate(${screenFilters.saturation})`;
  }, [screenFilters]);

  return (
    <div className="max-h-screen h-screen  w-screen relative flex flex-col select-none overflow-hidden">
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
      {showModals.contact && (
        <Modal
          id={"contactModal"}
          childId={"Contact"}
          body={<Contact />}
          close={closeModals.closeContact}
        />
      )}
      {showModals.about && (
        <Modal
          id={"aboutModal"}
          childId={"About"}
          body={<About />}
          close={closeModals.closeAbout}
        />
      )}
      {showModals.skills && <Modal id={"skillsModal"} childId={"Skills"} body={<Skills />} close={closeModals.closeSkills} />}
      {showModals.snake && <Modal id={"snakeGame"} childId={"Snake"} body={<SnakeGame/>} close={closeModals.closeSnake}/>}
      <Calendar/>
      <IconGrid />
      <Toolbar />
      <ControlCenterModal />
      <WeatherModal/>

    </div>
  );
}
