import React, { useEffect, useState } from "react";
import Taskbar from "../ModalComponents/Taskbar";
import useDragger from "../hooks/useDragger";
import ModalBody from "../ModalComponents/ModalBody";
import { useRecoilState } from "recoil";
import { isModalMinimizedAtom, modalZIndexAtom, showModalsAtom } from "../atoms/ModalAtoms";
import Socials from "../file-explorer-bodies/Socials"
import FileExplorerRoot from "../file-explorer-bodies/FileExplorerRoot";
import { fileExplorerPathAtom, showFileExplorerFolderAtom } from "../atoms/FileExplorerAtom";
import FileExplorerTaskbar from "./FileExplorerTaskbar";
import Projects from "../file-explorer-bodies/Projects";
import FileExplorerBody from "../file-explorer-components/FileExplorerBody"

export default function FileExplorer() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [fileExplorerPath, setFileExplorerPath] = useRecoilState(fileExplorerPathAtom)
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(showFileExplorerFolderAtom)
  const [showModals, setShowModals] = useRecoilState(showModalsAtom)
  useDragger("fileExplorer", "Explore", isMaximized);
  const [body , setBody] = useState(<></>)

  useEffect(() => {
    if(showFileExplorerFolder.showRoot) {
      setFileExplorerPath("C:Users/ColeMorgan/Desktop")
      setBody(<FileExplorerRoot/>)
    }
    else if (showFileExplorerFolder.showSocials) {
      setFileExplorerPath("C:Users/ColeMorgan/Desktop/socials")
      setBody(<Socials/>)
    }
    else if (showFileExplorerFolder.showProjects) {
      setFileExplorerPath("C:Users/ColeMorgan/Desktop/socials")
      setBody(<Projects/>)
    }
    else {
      console.log("yes")
      setBody(<></>)
    }
  },[showFileExplorerFolder])
 
  const handleFileExplorerClose = () => {
    setShowFileExplorerFolder({showRoot:false, showSocials: false, showProjects:false})
    setShowModals((prev) => ({...prev, fileExplorer:false}))
    
  }

  const toggleMaximized = () => {
    setIsMaximized((prevMaximized) => !prevMaximized);
  };


  const [isModalMinimized, setIsModalMinimized] =
    useRecoilState(isModalMinimizedAtom);
  const [zIndexList, setZIndexList] = useRecoilState(modalZIndexAtom);

  const highestZIndex = zIndexList.length ? zIndexList.length : 1;

  const zIndex =
    zIndexList.indexOf("fileExplorer") !== -1
      ? zIndexList.indexOf("fileExplorer") + 1
      : highestZIndex + 1;

  const bringToFront = () => {
    setZIndexList((currentZIndexes) => {
      const filtered = currentZIndexes.filter((modalId) => modalId !== "fileExplorer");
      return [...filtered, "fileExplorer"];
    });
  };

  const toggleMinimized = () => {
    console.log(isModalMinimized["fileExplorer"])
    setIsModalMinimized((prev) => ({...prev, ["fileExplorer"]: !prev["fileExplorer"]}))
  }


  useEffect(() => {
    bringToFront()
  },[])

  return (
    <div
      id={"fileExplorer"}
      className="absolute bg-black text-white min-w-[400px] bs transition-drag"
      style={{
        display: isModalMinimized.fileExplorer ? "none" : "",
        zIndex: zIndex,
        top: isMaximized ? "0" : "50%",
        left: isMaximized ? "0" : "50%",
        transform: isMaximized ? "" : "translateY(-50%) translateX(-50%)",
        bottom: isMaximized ? "40px" : "",
        right: isMaximized ? "0" : "",
      }}
    >
      <div className="relative h-full">
      <Taskbar id={"Explore"} toggleMaximized={toggleMaximized} toggleMinimized={toggleMinimized} close={handleFileExplorerClose}/>
      <FileExplorerTaskbar path={fileExplorerPath}/>
      <FileExplorerBody body={body} isMaximized={isMaximized}/>
      <div className="left-0 right-0 bg-black h-4 -bottom-[1px] absolute border-t border-lightBlack"></div>
      </div>
      
    </div>
  );
}
