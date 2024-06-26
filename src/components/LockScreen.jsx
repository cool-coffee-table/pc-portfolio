import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { showLockScreenAtom } from "../atoms/LockScreenAtom";
import GithubContributions from "../lock-screen-widgets/GithubContributions";
import CollegeFootballSchedule from "../lock-screen-widgets/CollegeFootballSchedule";
import LockscreenWeather from "../lock-screen-widgets/LockscreenWeather";
import LockscreenClock from "../lock-screen-widgets/LockscreenClock";

export default function LockScreen() {
  const [showLockScreen, setShowLockScreen] =
    useRecoilState(showLockScreenAtom);

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
      <div className="flex flex-col justify-between h-full pt-8 pb-12">
        <div className="relative h-full w-full overflow-hidden flex flex-col items-center px-2">
          <p className=" text-center text-4xl font-bold">Welcome Back Cole</p>
          <p className="text-center mt-2 sm:text-lg text-dull]">
            Press any key or click below to unlock your computer.
          </p>
          <span
            className="mt-3 px-20 text-sm py-1.5 bg-slate-700 cursor-pointer rounded-sm semibold hover:bg-opacity-80 transition-all"
            onClick={() => setShowLockScreen(false)}
          >
            Sign In
          </span>
          <span className="text-center mt-12 sm:hidden"><LockscreenClock /></span>
        </div>
        <div className=" w-full md:flex md:justify-between md:items-end px-6 md:px-8 xl:px-12">
          <div className="mb-2 sm:hidden"><GithubContributions /></div>
          <div className="hidden md:block"><LockscreenClock /></div>
          <div className="flex flex-col md:items-end">
            <div className="flex items-center">
            <LockscreenWeather />
            <div className="ml-8 hidden sm:block md:hidden"><LockscreenClock /></div>
            </div>
            <div className="flex md:flex-col-reverse md:items-end lg:flex-row">
              <CollegeFootballSchedule />
              <span className="hidden sm:block"><GithubContributions /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
