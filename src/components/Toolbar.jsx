import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa6";
import Clock from "../ToolbarComponents/Clock";
import Weather from "../ToolbarComponents/Weather";
import ControlCenter from "../ToolbarComponents/ControlCenter";
import ToolbarApps from "../ToolbarComponents/ToolbarApps";
import { showLockScreenAtom } from "../atoms/LockScreenAtom";
import { useRecoilState } from "recoil";
import { toolbarModalsOpenAtom } from "../atoms/ToolbarAtoms";

export default function Toolbar() {


  const [showLockScreen, setShowLockScreen] = useRecoilState(showLockScreenAtom);
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(toolbarModalsOpenAtom)

  return (
    <div className="absolute backdrop-blur-3xl bottom-0 z-50 w-full h-[44px] bg-black 800 text-white bg-opacity-80 flex items-center justify-between pr-1">
      <div className="flex h-full items-center">
       <div className="py-1 h-full">
       <span className="px-2.5  hover:bg-lightBlack rounded-sm h-full flex items-center cursor-pointer border-r border-lightBlack " onClick={() => setShowLockScreen(true)}>
          <FaFortAwesome />
        </span>
       </div>
        <ToolbarApps/>
      </div>
      <div className="flex  h-full py-1">
        <Weather/>
        <ControlCenter/>
        <div className="text-xs w-[88px] hover:bg-lightBlack flex flex-col justify-center items-center cursor-pointer relative rounded-sm text-center" 
        onClick={() => setToolbarModalsOpen({controlCenter: false, calendar: !toolbarModalsOpen.calendar, weather: false})}>
          <Clock />
        </div>
      </div>
    </div>
  );
}
