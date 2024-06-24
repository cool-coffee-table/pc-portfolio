import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { showLockScreenAtom } from "../atoms/LockScreenAtom";
import GithubContributions from "../lock-screen-widgets/GithubContributions";
import CollegeFootballSchedule from "../lock-screen-widgets/CollegeFootballSchedule";
import LockscreenWeather from "../lock-screen-widgets/LockscreenWeather";

const LockScreen = () => {
  const [showLockScreen, setShowLockScreen] = useRecoilState(showLockScreenAtom);
 

  useEffect(() => {
    const handleKeyPress = () => {
      setShowLockScreen(false);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowLockScreen]);

  return (
    <div
      id="lock-screen"
      className={`inset-0 overflow-hidden transition-all ${
        showLockScreen ? "" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="relative h-full w-full overflow-hidden flex flex-col items-center">
        <p className="mt-8 text-center text-4xl font-bold">Welcome Back Cole</p>
        <p className="text-center mt-2 text-lg text-[#dddddd]">
          Press any key or click below to unlock your computer.
        </p>
        <span
          className="mt-3 px-20 text-sm py-1.5 bg-slate-700 cursor-pointer rounded-sm semibold hover:bg-opacity-80 transition-all"
          onClick={() => setShowLockScreen(false)}
        >
          Sign In
        </span>
        <LockscreenWeather/>
        <GithubContributions/>
        <CollegeFootballSchedule/>
        <Clock />
      </div>
    </div>
  );
};

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const formatTime = date => {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  const formatDayOfWeek = date => {
    return date.toLocaleDateString([], { weekday: "long" });
  };

  const formatMonth = date => {
    return date.toLocaleDateString([], { month: "long" });
  };

  const formatDay = date => {
    return date.getDate();
  };

  return (
    <div className="absolute bottom-20 left-12">
      <p className="text-[112px] max-h-36 font-bold lock-shadow">{formatTime(date)}</p>
      <p className="text-5xl font-bold lock-shadow pl-2">{`${formatDayOfWeek(date)}, ${formatMonth(date)} ${formatDay(date)}`}</p>
    </div>
  );
};

export default LockScreen;
