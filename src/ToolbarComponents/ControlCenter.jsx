import React, { useState } from "react";
import { FaWifi, FaVolumeUp,  } from "react-icons/fa";

import { IoBatteryFull, IoBatteryCharging } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { isControlCenterOpenAtom } from "../atoms/ControlCenterAtoms";


export default function ControlCenter() {
  const [isControlCenterOpen, setControlCenterOpen] = useRecoilState(isControlCenterOpenAtom)
  
  return (
    <div className="relative">
      <div
        className="px-1.5 hover:bg-slate-600 flex items-center h-full cursor-pointer"
        onClick={() => setControlCenterOpen(!isControlCenterOpen)}
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
