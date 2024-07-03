import React from "react";
import FileExplorerTaskbar from "../components/FileExplorerTaskbar";
import { useRecoilState } from "recoil";
import { showFileExplorerFolderAtom } from "../atoms/FileExplorerAtom";
import { showModalsAtom } from "../atoms/ModalAtoms";

export default function FileExplorerRoot() {
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(
    showFileExplorerFolderAtom
  );
  const [showModals, setShowModals] = useRecoilState(showModalsAtom);

  const handleAppClick = (id) => {
    if (id === "socials" || id === "root" || id === "projects") {
      handleFolderClick(id);
      return;
    }
    
      setShowModals((prev) => ({ ...prev, [id]: true }));
  
  };

  const handleFolderClick = (id) => {

    if (id === "socials") {
      openSocials();
    } else if (id === "projects") {
      openProjects();
    } else if (id === "root") {
      openFileExplorer();
    }
  };

  const openSocials = () => {
    setShowFileExplorerFolder({
      showRoot: false,
      showSocials: true,
      showProjects: false,
    });
    setShowModals((prev) => ({ ...prev, fileExplorer: true }));
  };
  const openProjects = () => {
    setShowFileExplorerFolder({
      showRoot: false,
      showSocials: false,
      showProjects: true,
    });
    setShowModals((prev) => ({ ...prev, fileExplorer: true }));
  };

  const openFileExplorer = () => {
    setShowFileExplorerFolder({
      showRoot: true,
      showSocials: false,
      showProjects: false,
    });
    setShowModals((prev) => ({ ...prev, fileExplorer: true }));
  };

  const paths = [
    {
      name: "Projects",
      img: "./blue.png",
      id: "projects",
      onClick: handleAppClick,
    },
    {
      name: "Socials",
      img: "./green.png",
      id: "socials",
      onClick: handleAppClick,
    },
    {
      name: "Contact",
      img: "./Email-icon.png",
      id: "contact",
      onClick: handleAppClick,
    },
    {
      name: "About",
      img: "./user-folder.png",
      id: "about",
      onClick: handleAppClick,
    },
    {
      name: "BGs",
      img: "./photos.png",
      id: "backgrounds",
      onClick: handleAppClick,
    },
    {
      name: "Notepad",
      img: "./notepad.png",
      id: "notes",
      onClick: handleAppClick,
    },
    {
      name: "Snake",
      img: "./snake.png",
      id: "snake",
      onClick: handleAppClick,
    },
    {
      name: "My Skills",
      img: "./gear.png",
      id: "skills",
      onClick: handleAppClick,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap pl-[1px]">
        {paths.map((path) => (
          <Path path={path} key={path.name} />
        ))}
      </div>
    </>
  );
}

function Path({ path }) {
  return (
    <div
      className="h-20 flex flex-col items-center justify-center cursor-pointer border border-transparent hover:lightBlack hover:border-sky-200 hover:bg-lightBlack min-w-[79px] transition-all"
      key={path.name}
      onClick={() => path.onClick(path.id)}
    >
      <img src={path.img} alt="" className="max-w-[40px]" />
      <p className="text-xs">{path.name}</p>
    </div>
  );
}
