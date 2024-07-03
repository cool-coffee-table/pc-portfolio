import React from "react";
import { FcSettings } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { isModalMinimizedAtom, showModalsAtom } from "../atoms/ModalAtoms";
import {
  fileExplorerPathAtom,
  showFileExplorerFolderAtom,
} from "../atoms/FileExplorerAtom";

export default function IconGrid() {
  const [showModals, setShowModals] = useRecoilState(showModalsAtom);
  const [fileExplorerPath, setFileExplorerPath] =
    useRecoilState(fileExplorerPathAtom);
  const [isModalMinimized, setIsModalMinimized] =
    useRecoilState(isModalMinimizedAtom);
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(
    showFileExplorerFolderAtom
  );

  const handleAppClick = (id) => {
    if (id === "socials" || id === "root" || id === "projects") {
      handleFolderClick(id);
      return;
    }
    if (isModalMinimized[id]) {
      setIsModalMinimized((prev) => ({ ...prev, [id]: false }));
    } else if (!showModals[id]) {
      setShowModals((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleFolderClick = (id) => {
    if (showModals.fileExplorer && isModalMinimized.fileExplorer) {
      setIsModalMinimized((prev) => ({ ...prev, fileExplorer: false }));
      return;
    }

    setShowModals((prev) => ({ ...prev, fileExplorer: true }));

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
  const items = [
    {
      img: <img src={"./blue.png"} alt="" className="max-w-[45px] mx-auto" />,
      name: "Projects",
      id: "projects",
    },
    {
      img: (
        <img src={"./Email-icon.png"} alt="" className="max-w-[45px] mx-auto" />
      ),
      name: "Contact",
      id: "contact",
    },
    {
      img: (
        <img
          src={"./user-folder.png"}
          alt=""
          className="max-w-[45px] mx-auto"
        />
      ),
      name: "About",
      id: "about",
    },
  ];

  const icons2 = [
    {
      img: (
        <img src={"./green.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Socials",
      id: "socials",
    },
    {
      img: (
        <img
          src={"./file-explorer.png"}
          className="max-w-[45px] mx-auto scale-110"
        />
      ),
      name: "Files",
      id: "root",
    },
    {
      img: (
        <img src={"./notepad.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Notepad",
      id: "notes",
    },
  ];

  const icons3 = [
    {
      img: (
        <img src={"./photos.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Backgrounds",
      id: "backgrounds",
    },
    {
      img: (
        <img src={"./snake.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Snake",
      id: "snake",
    },
    {
      img: (
        <img src={"./gear.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "My Skills",
      id: "skills",
    },
  ];

  return (
    <div className="flex h-full relative  text-white">
      <div className="flex flex-col">
        {items.map((icon) => (
          <Icon
            img={icon.img}
            name={icon.name}
            key={icon.name}
            onClick={() => handleAppClick(icon.id)}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {icons2.map((icon) => (
          <Icon
            img={icon.img}
            name={icon.name}
            key={icon.name}
            onClick={() => handleAppClick(icon.id)}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {icons3.map((icon) => (
          <Icon
            img={icon.img}
            name={icon.name}
            key={icon.name}
            onClick={() => handleAppClick(icon.id)}
          />
        ))}
      </div>
    </div>
  );
}

function Icon({ img, name, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-around hover:bg-white border border-transparent hover:bg-opacity-20 hover:border-sky-200 h-20 w-20 transition-all cursor-pointer active:border-sky-200"
      onDoubleClick={onClick}
    >
      <figure className="w-full pt-0.5 ">{img}</figure>
      <p className="text-xs  subtle-shadow icon-shadow">{name}</p>
    </div>
  );
}
