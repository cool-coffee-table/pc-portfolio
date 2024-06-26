import React, {useState, useEffect} from "react";
const LockscreenClock = () => {
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
      <div className="pb-8  xl:pl-8">
        <p className="text-6xl md:text-8xl xl:text-[112px]  max-h-36 semibold sm:font-bold lock-shadow">{formatTime(date)}</p>
        <p className="text-3xl md:text-4xl xl:text-5xl semibold sm:font-bold lock-shadow pl-2">{`${formatDayOfWeek(date)}, ${formatMonth(date)} ${formatDay(date)}`}</p>
      </div>
    );
  };
  
  export default LockscreenClock;