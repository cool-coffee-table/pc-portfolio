import React from "react";
import { LuRocket } from "react-icons/lu";

export default function Projects() {
  const socials = [
    {
      name: "Project-1",
      icon: <LuRocket/>,
      size: "24 kb",
    },
    {
      name: "Project-2",
      icon: <LuRocket/>,
      size: "12 kb",
    },
    {
      name: "Project-3",
      icon: <LuRocket/>,
      size: "79 kb",
    },
    {
      name: "Project-4",
      icon: <LuRocket/>,
      size: "143 kb",
    },
  ];

  return (
    <div className="relative h-full">
      <ul className="">
        {socials.map((social) => (
          <Social social={social}  key={social.name}/>
        ))}
      </ul>
      </div>
  )
}


function Social({ social, onClick }) {
    return (
      <li
        className="flex justify-between items-center px-4 text-sm py-1.5 hover:bg-gray-700 transition-all cursor-pointer"
        onClick={onClick}
      >
        <p className="flex items-center">
          <span className="mr-2">{social.icon}</span> {social.name}.exe
        </p>
        <span className="text-xs">{social.size}</span>
      </li>
    );
  }
