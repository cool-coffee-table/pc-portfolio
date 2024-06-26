import React, { useEffect, useState } from "react";
import Taskbar from "../ModalComponents/Taskbar";
import useDragger from "../hooks/useDragger";
import ModalBody from "../ModalComponents/ModalBody";
import { useRecoilState } from "recoil";
import { showModalsAtom } from "../atoms/ModalAtoms";
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
  useDragger("file-explorer", "Explore", isMaximized);
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

  return (
    <div
      id={"file-explorer"}
      className="absolute bg-black text-white min-w-[400px] bs transition-drag"
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
      <Taskbar id={"Explore"} toggleMaximized={toggleMaximized} close={handleFileExplorerClose}/>
      <FileExplorerTaskbar path={fileExplorerPath}/>
      <FileExplorerBody body={body} isMaximized={isMaximized}/>
      <div className="left-0 right-0 bg-black h-4 -bottom-[1px] absolute border-t border-lightBlack"></div>
      </div>
      
    </div>
  );
}
