import React, { useState } from "react";
import { FaWifi, FaVolumeUp,  } from "react-icons/fa";

import { IoBatteryFull, IoBatteryCharging } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { toolbarModalsOpenAtom } from "../atoms/ToolbarAtoms";


export default function ControlCenter() {
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(toolbarModalsOpenAtom)
  
  return (
    <div className="relative rounded-sm hover:bg-lightBlack">
      <div
        className="px-1.5  flex items-center h-full cursor-pointer"
        onClick={() => setToolbarModalsOpen({controlCenter: !toolbarModalsOpen.controlCenter, calendar: false, weather: false})}
      >
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
    </div>
  );
}
