import React from "react";
import { FaWifi, FaVolumeUp } from "react-icons/fa";

import { IoBatteryFull } from "react-icons/io5";

export default function ControlCenter() {
  return (
    <div className="px-1.5 hover:bg-slate-600 flex items-center h-full cursor-pointer">
      <span className="mx-1.5 text-sm"><FaWifi/></span>
      <span className="mx-1.5 text-sm"><FaVolumeUp/></span>
      <span className="mx-1.5 text-sm"><IoBatteryFull/></span>
    </div>
  );
}
