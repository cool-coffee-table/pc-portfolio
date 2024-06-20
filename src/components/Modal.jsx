import React, { useState } from "react";
import Taskbar from "../ModalComponents/Taskbar";
import useDragger from "../hooks/useDragger";
import ModalBody from "../ModalComponents/ModalBody";
import { useRecoilState } from "recoil";
import { showModalsAtom } from "../atoms/ModalAtoms";

export default function Modal({ id, childId, body, close }) {
  const [isMaximized, setIsMaximized] = useState(false);
 
  useDragger(id, childId, isMaximized);

  const toggleMaximized = () => {
    setIsMaximized((prevMaximized) => !prevMaximized);
  };

  return (
    <div
      id={id}
      className="absolute bg-[#242424] text-white min-w-[400px] bs transition-drag"
      style={{
        top: isMaximized ? "0" : "50%",
        zIndex: isMaximized ? "50" : "20",
        left: isMaximized ? "0" : "50%",
        transform: isMaximized ? "" : "translateY(-50%) translateX(-50%)",
        bottom: isMaximized ? "40px" : "",
        right: isMaximized ? "0" : "",
      }}
    >
      <div className="relative h-full">
      <Taskbar id={childId} toggleMaximized={toggleMaximized} close={close}/>
      <ModalBody body={body} isMaximized={isMaximized}/>
      <div className="left-0 right-0 bg-[#242424] h-4 bottom-0 absolute border-t border-[#3a3a3a]"></div>
      </div>
      
    </div>
  );
}
