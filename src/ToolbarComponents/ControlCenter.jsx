import React, { useState } from "react";
import { FaWifi, FaVolumeUp } from "react-icons/fa";

import { IoBatteryFull } from "react-icons/io5";

export default function ControlCenter() {
  const [showControlCenter, setShowControlCenter] = useState(false)
  return (
    <div className="relative">
      <div className="px-1.5 hover:bg-slate-600 flex items-center h-full cursor-pointer" onClick={() => setShowControlCenter(!showControlCenter)}>
        <span className="mx-1.5 text-sm">
          <FaWifi />
        </span>
        <span className="mx-1.5 text-sm">
          <FaVolumeUp />
        </span>
        <span className="mx-1.5 text-sm">
          <IoBatteryFull />
        </span>
      </div>
      <div className={`absolute -top-96 bottom-[125%] z-20 -left-60 -right-20  bg-[#242424] rounded-md transition-all ${showControlCenter ? "-top-96 " : "top-12 opacity-0"}`}></div>
    </div>
  );
}
