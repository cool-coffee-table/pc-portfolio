import React from "react";
import FileExplorerTaskbar from "../components/FileExplorerTaskbar";
import { useRecoilState } from "recoil";
import { showFileExplorerFolderAtom } from "../atoms/FileExplorerAtom";

export default function FileExplorerRoot() {
  const [showFileExplorerFolder, setShowFileExplorerFolder] = useRecoilState(showFileExplorerFolderAtom)
  const paths = [
    { name: "Projects", img: "./blue.png", onClick: () => setShowFileExplorerFolder({showRoot: false, showSocials: false, showProjects: true}) },
    { name: "Socials", img: "./green.png", onClick: () => setShowFileExplorerFolder({showRoot: false, showSocials: true, showProjects: false}) },
    { name: "Contact", img: "./Email-icon.png" },
    { name: "About", img: "./user-folder.png" },
    { name: "BGs", img: "./photos.png" },
    { name: "Notepad", img: "./notepad.png" },
    { name: "Welcome", img: "./welcome.png" },
    { name: "Weather", img: "./Weather-icon.png" },
    { name: "My Skills", img: "./gear.png" },
    { name: "Control Center", img: "./control.png" },
  ];

  return (
    <>
      <div className="flex flex-wrap pl-[1px]">
        {paths.map((path) => (
          <Path path={path} key={path.name}/>
        ))}
      </div>
    </>
  );
}

function Path({ path}) {
  return (
    <div
      className="h-20 flex flex-col items-center justify-center cursor-pointer border border-transparent hover:lightBlack hover:border-sky-200 min-w-[79px] transition-all"
      key={path.name}
      onClick={path.onClick}
    >
      <img src={path.img} alt="" className="max-w-[40px]" />
      <p className="text-xs">{path.name}</p>
    </div>
  );
}
