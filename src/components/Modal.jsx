import React, { useEffect, useState } from "react";
import Taskbar from "../ModalComponents/Taskbar";
import useDragger from "../hooks/useDragger";
import ModalBody from "../ModalComponents/ModalBody";
import { useRecoilState } from "recoil";
import { isModalMinimizedAtom, modalZIndexAtom, showModalsAtom } from "../atoms/ModalAtoms";

export default function Modal({ id, childId, body, close }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isModalMinimized, setIsModalMinimized] =
    useRecoilState(isModalMinimizedAtom);
  const [zIndexList, setZIndexList] = useRecoilState(modalZIndexAtom);
  useDragger(id, childId, isMaximized);

  const highestZIndex = zIndexList.length ? zIndexList.length : 1;

  const zIndex =
    zIndexList.indexOf(id) !== -1
      ? zIndexList.indexOf(id) + 1
      : highestZIndex + 1;

  const bringToFront = () => {
    setZIndexList((currentZIndexes) => {
      const filtered = currentZIndexes.filter((modalId) => modalId !== id);
      return [...filtered, id];
    });
  };

  const toggleMaximized = () => {
    setIsMaximized((prevMaximized) => !prevMaximized);
  };

  const toggleMinimized = () => {
    setIsModalMinimized((prev) => ({...prev, [id]: !prev[id]}))
  }


  useEffect(() => {
    bringToFront()
  },[])

 

  return (
    <div
      id={id}
      className="absolute bg-black text-white min-w-[400px] bs transition-drag"
      style={{
        display: isModalMinimized[id] ? "none": "",
        zIndex: zIndex,
        top: isMaximized ? "0" : "50%",
        left: isMaximized ? "0" : "50%",
        transform: isMaximized ? "" : "translateY(-50%) translateX(-50%)",
        bottom: isMaximized ? "40px" : "",
        right: isMaximized ? "0" : "",
      }}
      onMouseDown={bringToFront}
    >
      <div className="relative h-full">
        <Taskbar id={childId} toggleMaximized={toggleMaximized} toggleMinimized={toggleMinimized} close={close} />
        <ModalBody body={body} isMaximized={isMaximized} />
        <div className="left-0 right-0 bg-black h-4 bottom-0 absolute border-t border-lightBlack"></div>
      </div>
    </div>
  );
}
