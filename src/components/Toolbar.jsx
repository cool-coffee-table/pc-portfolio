import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa6";
import Clock from "../ToolbarComponents/Clock";
import Weather from "../ToolbarComponents/Weather";
import ControlCenter from "../ToolbarComponents/ControlCenter";
import ToolbarApps from "../ToolbarComponents/ToolbarApps";
import { showLockScreenAtom } from "../atoms/LockScreenAtom";
import { useRecoilState } from "recoil";

export default function Toolbar() {
  const [showLockScreen, setShowLockScreen] = useRecoilState(showLockScreenAtom);
  return (
    <div className="absolute backdrop-blur-xl bottom-0 z-50 w-full h-[44px] bg-black text-white bg-opacity-60 flex items-center justify-between">
      <div className="flex h-full items-center">
        <span className="px-2.5 hover:bg-slate-600 h-full flex items-center cursor-pointer" onClick={() => setShowLockScreen(true)}>
          <FaFortAwesome />
        </span>
        <ToolbarApps/>
      </div>
      <div className="flex  h-full">
        <Weather/>
        <ControlCenter/>
        <div className="text-xs w-[88px] hover:bg-slate-600 flex flex-col justify-center items-center cursor-pointer relative">
        <div className="absolute left-0 right-0 bottom-[100%] -top-96 bg-black"></div>
          <Clock />
        </div>
      </div>
    </div>
  );
}
