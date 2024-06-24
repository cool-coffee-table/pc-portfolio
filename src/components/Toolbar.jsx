import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa6";
import Clock from "../ToolbarComponents/Clock";
import Weather from "../ToolbarComponents/Weather";
import ControlCenter from "../ToolbarComponents/ControlCenter";
import ToolbarApps from "../ToolbarComponents/ToolbarApps";
import { showLockScreenAtom } from "../atoms/LockScreenAtom";
import { useRecoilState } from "recoil";
import { toolbarModalsOpenAtom } from "../atoms/ControlCenterAtoms";

export default function Toolbar() {
  const [showLockScreen, setShowLockScreen] = useRecoilState(showLockScreenAtom);
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(toolbarModalsOpenAtom)

  return (
    <div className="absolute backdrop-blur-3xl bottom-0 z-50 w-full h-[44px] bg-[#242424] 800 text-white bg-opacity-80 flex items-center justify-between py-1 pr-1">
      <div className="flex h-full items-center">
        <span className="px-2.5 hover:bg-slate-600 h-full flex items-center cursor-pointer" onClick={() => setShowLockScreen(true)}>
          <FaFortAwesome />
        </span>
        <ToolbarApps/>
      </div>
      <div className="flex  h-full">
        <Weather/>
        <ControlCenter/>
        <div className="text-xs w-[88px] hover:bg-slate-600 flex flex-col justify-center items-center cursor-pointer relative rounded-sm text-center" 
        onClick={() => setToolbarModalsOpen({controlCenter: false, calendar: !toolbarModalsOpen.calendar})}>
          <Clock />
        </div>
      </div>
    </div>
  );
}
