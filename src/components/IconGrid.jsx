import React from "react";
import { FcSettings } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { showModalsAtom } from "../atoms/ModalAtoms";
import {
  fileExplorerPathAtom,
  showFileExplorerFolderAtom,
} from "../atoms/FileExplorerAtom";

export default function IconGrid() {
  const [showModals, setShowModals] = useRecoilState(showModalsAtom);
  const [fileExplorerPath, setFileExplorerPath] =
    useRecoilState(fileExplorerPathAtom);
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(
    showFileExplorerFolderAtom
  );

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
  const items = [
    {
      img: <img src={"./blue.png"} alt="" className="max-w-[45px] mx-auto" />,
      name: "Projects",
      onClick: openProjects,
    },
    {
      img: (
        <img src={"./Email-icon.png"} alt="" className="max-w-[45px] mx-auto" />
      ),
      name: "Contact",
      onClick: () => setShowModals((prev) => ({ ...prev, contact: true })),
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
      onClick: () => setShowModals((prev) => ({ ...prev, about: true })),
    },
  ];

  const icons2 = [
    {
      img: (
        <img src={"./green.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Socials",
      onClick: openSocials,
    },
    {
      img: (
        <img
          src={"./file-explorer.png"}
          className="max-w-[45px] mx-auto scale-110"
        />
      ),
      name: "File Explorer",
      onClick: () => setShowModals((prev) => ({ ...prev, fileExplorer: true })),
    },
    {
      img: (
        <img src={"./notepad.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Notepad",
      onClick: () => setShowModals((prev) => ({ ...prev, notes: true })),
    },
  ];

  const icons3 = [
    {
      img: (
        <img src={"./photos.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "Backgrounds",
      onClick: () => setShowModals((prev) => ({ ...prev, backgrounds: true })),
    },
    {
      img: (
        <img
          src={"./snake.png"}
          className="max-w-[45px] mx-auto scale-110"
        />
      ),
      name: "Snake",
      onClick: () => setShowModals((prev) => ({ ...prev, snake: true })),
    },
    {
      img: (
        <img src={"./gear.png"} className="max-w-[45px] mx-auto scale-110" />
      ),
      name: "My Skills",
      onClick: () => setShowModals((prev) => ({ ...prev, skills: true })),
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
            onClick={icon.onClick}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {icons2.map((icon) => (
          <Icon
            img={icon.img}
            name={icon.name}
            key={icon.name}
            onClick={icon.onClick}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {icons3.map((icon) => (
          <Icon
            img={icon.img}
            name={icon.name}
            key={icon.name}
            onClick={icon.onClick}
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
