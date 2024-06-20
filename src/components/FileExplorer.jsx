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

export default function FileExplorer({close}) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [fileExplorerPath, setFileExplorerPath] = useRecoilState(fileExplorerPathAtom)
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(showFileExplorerFolderAtom)


  const [body , setBody] = useState(<FileExplorerRoot/>)

  useEffect(() => {
    if(!showFileExplorerFolder) return
    if(showFileExplorerFolder.showRoot) {
      setFileExplorerPath("C:Users/ColeMorgan/Desktop")
      setBody(<FileExplorerRoot/>)
    }
    else if (showFileExplorerFolder.showSocials) {
      setFileExplorerPath("C:Users/ColeMorgan/Desktop/socials")
      setBody(<Socials/>)
    }
    // else if (showFileExplorerFolder.showProjects) {
    //   setShowFileExplorerFolder(<Socials/>)
    // }
  },[showFileExplorerFolder])
 
  useDragger("file-explorer", "Explore", isMaximized);

  const toggleMaximized = () => {
    setIsMaximized((prevMaximized) => !prevMaximized);
  };

  return (
    <div
      id={"file-explorer"}
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
      <Taskbar id={"Explore"} toggleMaximized={toggleMaximized} close={close}/>
      <FileExplorerTaskbar path={fileExplorerPath}/>
      <ModalBody body={body} isMaximized={isMaximized} className="h-80"/>
      <div className="left-0 right-0 bg-[#242424] h-4 bottom-0 absolute border-t border-[#3a3a3a]"></div>
      </div>
      
    </div>
  );
}
