import React, { useState } from "react";
import { PiBatteryChargingFill } from "react-icons/pi";
import { IoIosAirplane, IoIosContrast } from "react-icons/io";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaBluetoothB, FaMoon, FaWifi } from "react-icons/fa";
import { IoColorFilter } from "react-icons/io5";
import { useRecoilState } from "recoil";
import {
  screenFiltersAtom,
  toolbarModalsOpenAtom,
} from "../atoms/ToolbarAtoms";
import { BsBrightnessHigh } from "react-icons/bs";

export default function ControlCenterModal() {
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(
    toolbarModalsOpenAtom
  );
  const [screenFilters, setScreenFilters] = useRecoilState(screenFiltersAtom);
  const [isActive, setIsActive] = useState({
    wifi: true,
    bluetooth: true,
    airplaneMode: false,
    energySaver: false,
    highContrast: false,
    nightLight: false,
  });

  const changeBrightness = (val) => {
    const change = 1 - (0.5 - val);
    setScreenFilters((prev) => ({ ...prev, brightness: change }));
  };

  const handleEnergySaverClick = () => {
    isActive.energySaver ? changeBrightness(0.5) : changeBrightness(0.38)
    setIsActive((prev) => ({ ...prev, energySaver: !prev.energySaver }));
  };

  const handleNightLightClick = () => {
    isActive.nightLight ? setScreenFilters((prev) => ({...prev, saturation: 1})) : setScreenFilters((prev) => ({...prev, saturation: 1.15}))
    setIsActive((prev) => ({ ...prev, nightLight: !prev.nightLight }));
  };

  const handleHighContrastClick = () => {
    isActive.highContrast ? setScreenFilters((prev) => ({...prev, contrast: 1})) : setScreenFilters((prev) => ({...prev, contrast: 1.05}))
    setIsActive((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const buttons = [
    {
      icon: <FaWifi />,
      name: "Wifi",
      isActive: isActive.wifi,
      onClick: () => setIsActive((prev) => ({ ...prev, wifi: !prev.wifi })),
    },
    {
      icon: <FaBluetoothB />,
      name: "Bluetooth",
      isActive: isActive.bluetooth,
      onClick: () =>
        setIsActive((prev) => ({ ...prev, bluetooth: !prev.bluetooth })),
    },
    {
      icon: <IoIosAirplane />,
      name: "Airplane Mode",
      isActive: isActive.airplaneMode,
      onClick: () =>
        setIsActive((prev) => ({ ...prev, airplaneMode: !prev.airplaneMode })),
    },
    {
      icon: <MdEnergySavingsLeaf />,
      name: "Energy Saver",
      isActive: isActive.energySaver,
      onClick: handleEnergySaverClick,
    },
    {
      icon: <IoIosContrast />,
      name: "High Contrast",
      isActive: isActive.highContrast,
      onClick: handleHighContrastClick
    },
    {
      icon: <FaMoon />,
      name: "Night Light",
      isActive: isActive.nightLight,
      onClick: handleNightLightClick
    },
  ];

  return (
    <div
      className={`absolute bottom-14 right-2 sm:right-3 w-[380px] sm:w-[390px] bg-[#242424] rounded-md border border-[#424242] overflow-hidden transition-all ${
        toolbarModalsOpen.controlCenter
          ? " z-50"
          : " opacity-0 translate-y-80 z-0"
      }`}
    >
      <div className="w-full flex justify-between flex-wrap  p-5 ">
        {buttons.map((button) => (
          <ControlCenterButton button={button} key={button.name} />
        ))}
      </div>
      <div className="px-6 mb-8 -mt-2">
        <div className="flex mb-10">
          <span className="mr-2">
            <BsBrightnessHigh />
          </span>
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="0.5"
            className="w-full"
            step="0.01"
            value={screenFilters.brightness - 0.5}
            onChange={(e) => changeBrightness(e.target.value)}
          />
        </div>
        <div className="flex">
          <span className="mr-2">
            <IoColorFilter/>
          </span>
          <input
            type="range"
            id="vol"
            name="vol"
            step="0.01"
            min="0"
            max="1"
            value={screenFilters.grayscale}
            onChange={(e) => setScreenFilters((prev) => ({...prev, grayscale: e.target.value}))}
            className="w-full"
          />
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
  );
}

function ControlCenterButton({ button }) {
  return (
    <div className="mb-6">
      <span
        className={`h-[50px] flex items-center px-10 bg-[#1c1c1c] rounded-sm transition-all ${
          button.isActive ? "bg-blue-600" : ""
        }`}
        onClick={button.onClick}
      >
        {button.icon}
      </span>
      <p className="text-center text-xs mt-3">{button.name}</p>
    </div>
  );
}
