import React, { useState } from 'react'
import { PiBatteryChargingFill } from "react-icons/pi";
import { IoIosAirplane, IoIosContrast } from "react-icons/io";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaBluetoothB, FaMoon, FaWifi} from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { screenFiltersAtom, toolbarModalsOpenAtom } from '../atoms/ControlCenterAtoms';
import { BsBrightnessHigh } from "react-icons/bs";

export default function ControlCenterModal() {

  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(toolbarModalsOpenAtom)
  const [screenFilters, setScreenFilters] = useRecoilState(screenFiltersAtom)


  const changeBrightness = (val) => {
    const change = 1 - ((50 - val) / 100)
    setScreenFilters((prev) => ({...prev, brightness: change}))
  }


  return (
    <div
    className={`absolute bottom-14 right-3 w-[390px] bg-[#242424] rounded-md border border-[#424242] overflow-hidden transition-all ${
      toolbarModalsOpen.controlCenter ? " z-50" : " opacity-0 translate-y-20 z-0"
    }`}
  >
    <div className="w-full flex justify-between flex-wrap  p-5 ">
      <div className="mb-6">
        <span className="h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm">
          <FaWifi />
        </span>
        <p className="text-center text-xs mt-3">Wifi</p>
      </div>
      <div className="mb-6">
        <span className="h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm">
          <FaBluetoothB />
        </span>
        <p className="text-center text-xs mt-3">Bluetooth</p>
      </div>
      <div className="mb-6">
        <span className="h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm">
          <IoIosAirplane />
        </span>
        <p className="text-center text-xs mt-3">Airplane Mode</p>
      </div>
      <div className="mb-4">
        <span className="h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm">
          <MdEnergySavingsLeaf />
        </span>
        <p className="text-center text-xs mt-3">Energy Saver</p>
      </div>
      <div className="mb-4">
        <span className="h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm">
          <IoIosContrast />
        </span>
        <p className="text-center text-xs mt-3">High Contrast</p>
      </div>
      <div className="mb-4">
        <span className="h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm">
          <FaMoon />
        </span>
        <p className="text-center text-xs mt-3">Night Light</p>
      </div>
    </div>
    <div className="px-6 mb-8">
      <div className="flex mb-10">
        <span className="mr-2">
          <BsBrightnessHigh/>
        </span>
        <input type="range" id="vol" name="vol" min="0" max="50" className="w-full" onChange={(e) => changeBrightness(e.target.value)}/>
      </div>
      <div className="flex">
        <span className="mr-2">
          <FaMoon />
        </span>
        <input type="range" id="vol" name="vol" min="0" max="50" className="w-full"/>
      </div>
    </div>
    <div className="w-full bg-[#1c1c1c] h-12 flex items-center">
      <div className="px-5 flex items-center">
        <span className="text-lg mr-2.5">
          <PiBatteryChargingFill />
        </span>
        <span className=" text-sm">100%</span>
      </div>
    </div>
  </div>
  )
}
