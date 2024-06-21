import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { showLockScreenAtom } from "../atoms/LockScreenAtom";

export default function LockScreen() {
  const [showLockScreen, setShowLockScreen] = useRecoilState(showLockScreenAtom);

  useEffect(() => {
    const handleKeyPress = () => {
      setShowLockScreen(false);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousedown", handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div
      id="lock-screen"
      className={`inset-0 roboto overflow-hidden transition-all ${
        showLockScreen ? "" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <p className="mt-8 text-center text-4xl font-semibold">
          Welcome Back Cole
        </p>
        <p className="text-center mt-2 text-lg">
          Press any key to unlock your computer.
        </p>
        <Clock />
      </div>
    </div>
  );
}

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  const formatDayOfWeek = (date) => {
    return date.toLocaleDateString([], { weekday: "long" });
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString([], { month: "long" });
  };

  const formatDay = (date) => {
    return date.getDate();
  };

  return (
    <div className="absolute bottom-20 left-12">
      <p className="text-[112px] max-h-36 font-semibold lock-shadow">
        {formatTime(date)}
      </p>
      <p className="text-5xl font-semibold lock-shadow pl-2">{`${formatDayOfWeek(
        date
      )}, ${formatMonth(date)} ${formatDay(date)}`}</p>
    </div>
  );
};
