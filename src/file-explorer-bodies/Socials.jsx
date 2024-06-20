import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FileExplorerTaskbar from "../components/FileExplorerTaskbar";

export default function Socials() {
  const socials = [
    { name: "Github", icon: <FaGithub />, link: "https://github.com/", size: "24 kb" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://github.com/" , size: "12 kb" },
    { name: "Discord", icon: <FaDiscord/>, link: "https://github.com/" , size: "79 kb" },
    { name: "Email", icon: <MdEmail/>, link: "https://github.com/" , size: "143 kb" },
  ];

  const [link, setLink] = useState("")

  return (
    <>
      <ul>
        {socials.map((social) => (
            <Social social={social}/>
        ))}
      </ul>
    </>
  );
}

function Social({ social}) {
  return (
    <li className="">
      <a
        href={social.link}
        target="_blank"
        className="flex justify-between items-center px-4 text-sm py-1.5 hover:bg-gray-700 transition-all cursor-pointer"
      >
        <p className="flex items-center">
          <span className="mr-2">{social.icon}</span> {social.name}.exe
        </p>
        <span className="text-xs">{social.size}</span>
      </a>
    </li>
  );
}
