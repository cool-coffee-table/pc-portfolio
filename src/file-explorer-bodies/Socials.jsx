import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FileExplorerTaskbar from "../components/FileExplorerTaskbar";

export default function Socials() {
  const socials = [
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/colemmorgan",
      size: "24 kb",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/cole-morgan-/",
      size: "12 kb",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      link: "https://github.com/",
      size: "79 kb",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      link: "https://github.com/",
      size: "143 kb",
    },
  ];

  const [link, setLink] = useState("");
  const [showLink, setShowLink] = useState(false);

  const handleSocialClick = (link) => {
    setLink(link);
    setShowLink(true);
  };

  return (
    <div className="relative h-full">
      <ul className="">
        {socials.map((social) => (
          <Social social={social} onClick={() => handleSocialClick(social.link)} key={social.name}/>
        ))}
      </ul>
      {showLink && (
        <div className="absolute inset-0 bg-[#242424] bg-opacity-20 backdrop-blur-md flex items-center justify-center">
          <div className="h-40 px-3 bg-[#1c1c1c] border border-[#323232] py-3 rounded-md">
            <p className="text-lg">This Link will open in a new page.</p>
            <p className="text-center mt-2">Do you wish to continue?</p>
            <div className="mt-4 flex justify-center">
              <span
                className="px-5 py-1 mr-3 bg-red-500 rounded-md cursor-pointer"
                onClick={() => setShowLink(false)}
              >
                No
              </span>
              <a
                href={link}
                target="_blank"
                className="px-5 py-1 bg-green-500 rounded-md cursor-pointer"
                onClick={() => setShowLink(false)}
              >
                Yes
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
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
