import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isModalMinimizedAtom, showModalsAtom } from "../atoms/ModalAtoms";
import { showFileExplorerFolderAtom } from "../atoms/FileExplorerAtom";

export default function ToolbarApps() {
  const [isModalMinimized, setIsModalMinimized] =
    useRecoilState(isModalMinimizedAtom);
  const [showModals, setShowModals] = useRecoilState(showModalsAtom);
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(showFileExplorerFolderAtom)

  const handleAppClick = (prop) => {
    if(prop === "fileExplorer") {
      setShowFileExplorerFolder({showRoot:true, showSocials: false, showProjects:false})
    }
    if (showModals[prop] && !isModalMinimized[prop]) {
      setIsModalMinimized((prev) => ({ ...prev, [prop]: true }));
    } else if (showModals[prop] && isModalMinimized[prop]) {
      setIsModalMinimized((prev) => ({ ...prev, [prop]: false }));
    } else {
      setShowModals((prev) => ({ ...prev, [prop]: true }));
    }
  };

  const apps = [
    { src: "./Email-icon.png", name: "contact" },
    { src: "./file-explorer.png", name: "fileExplorer" },
    { src: "./notepad.png", name: "notes" },
    { src: "./user-folder.png", name: "about" },
    { src: "./photos.png", name: "backgrounds" },
    { src: "./gear.png", name: "skills" },
  ];

  return (
    <div className="h-full hidden md:flex">
      {apps.map((app) => (
        <ToolbarApp
          app={app}
          key={app.name}
          handleAppClick={handleAppClick}
          isModalMinimized={isModalMinimized}
          isModalOpen={showModals}
        />
      ))}
    </div>
  );
}

function ToolbarApp({ app, handleAppClick, isModalMinimized, isModalOpen }) {
  return (
    <span
      className={`px-2.5 cursor-pointer hover:brightness-110 h-full flex items-center border-[3px] border-transparent transition-all
        ${
          isModalMinimized[app.name] || isModalOpen[app.name]
            ? "border-b-sky-400"
            : ""
        }
        ${
          isModalOpen[app.name] && !isModalMinimized[app.name]
            ? "bg-slate-600"
            : "hover:bg-lightBlack"
        }`}
      onClick={() => handleAppClick(app.name)}
    >
      <img src={app.src} alt="" className="max-w-6" />
    </span>
  );
}
