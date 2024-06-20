import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa6";
import Clock from "../ToolbarComponents/Clock";
import Weather from "../ToolbarComponents/Weather";
import ControlCenter from "../ToolbarComponents/ControlCenter";
import ToolbarApps from "../ToolbarComponents/ToolbarApps";

export default function Toolbar() {
  return (
    <div className="relative z-50 w-full h-[44px] bg-black text-white bg-opacity-85 flex items-center justify-between">
      <div className="flex h-full items-center">
        <span className="px-2.5 hover:bg-slate-600 h-full flex items-center cursor-pointer">
          <FaFortAwesome />
        </span>
        <ToolbarApps/>
      </div>
      <div className="flex  h-full">
        <Weather/>
        <ControlCenter/>
        <div className="text-xs w-[88px] hover:bg-slate-600 flex flex-col justify-center items-center cursor-pointer">
          <Clock />
        </div>
      </div>
    </div>
  );
}
