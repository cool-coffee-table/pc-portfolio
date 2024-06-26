import React from "react";
import {
  VscChromeMinimize,
  VscChromeClose,
  VscChromeMaximize,
} from "react-icons/vsc";

export default function Taskbar({ id, toggleMaximized, close, toggleMinimized}) {
  return (
    <div className="pl-2 flex items-center select-none border-b  border-[#505050]">
      <div className="flex items-center w-full" id={`${id}`}>
        <figure className="py-1.5 mr-2 pointer-events-none">
          <img src="./user.png" alt="" className="h-5" />
        </figure>
        <span className="text-xs semibold">{id}</span>
      </div>
      <div className="flex h-8 items-center justify-center">
        <span className="hover-highlight-dark flex items-center h-full px-2 cursor-pointer" onClick={toggleMinimized}>
          <VscChromeMinimize />
        </span>
        <span className="hover-highlight-dark flex items-center h-full px-2 cursor-pointer" onClick={toggleMaximized}>
          <VscChromeMaximize />
        </span>
        <span className="hover:bg-red-400 transition-all flex items-center h-full px-2 cursor-pointer" onClick={close}>
          <VscChromeClose />
        </span>
      </div>
    </div>
  );
}
