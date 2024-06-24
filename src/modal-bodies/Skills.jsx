import React from 'react'
import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaGit, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql, BiLogoFirebase } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiFastapi, SiExpress, SiCplusplus, SiSelenium } from "react-icons/si";

export default function Skills() {

  const frontend = [
    {
      element: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      element: <FaReact />,
      name: "React"
    },
    {
      element: <RiTailwindCssFill />,
      name: "Tailwind CSS"
    },
    {
      element: <BiLogoTypescript />,
      name: "TypeScript"
    },
    {
      element: <IoLogoJavascript />,
      name: "JavaScript"
    }
  ];

  const backend = [
    {
      element: <BiLogoPostgresql />,
      name: "PostgreSQL"
    },
    {
      element: <BiLogoFirebase />,
      name: "Firebase"
    },
    {
      element: <SiFastapi />,
      name: "FastAPI"
    },
    {
      element: <SiExpress />,
      name: "Express.js"
    }
  ];

  const other = [
    {
      element: <FaGit />,
      name: "Git"
    },
    {
      element: <FaPython />,
      name: "Python"
    },
    {
      element: <SiCplusplus />,
      name: "C++"
    },
    {
      element: <SiSelenium />,
      name: "Selenium"
    }
  ];

  return (
    <div className="py-4 px-3 h-full">
      <div className="h-full overflow-y-scroll">
      <h5 className='semibold mb-2'>Frontend:</h5>
      <ul className='flex flex-wrap mb-2'>
        {frontend.map((skill) => (
          <div key={skill.name} className="flex items-center mr-2 px-4 py-1 border rounded-sm border-[#555555] mb-2 transition-all hover:bg-[#1c1c1c] group">
            <span className='mr-2 group-hover:text-red-400 transition-all'>{skill.element}</span>
            <p className='text-sm'>{skill.name}</p>
          </div>
        ))}
      </ul>
      <h5 className='semibold mb-2'>Backend/DB:</h5>
      <ul className='flex flex-wrap mb-2'>
        {backend.map((skill) => (
          <div key={skill.name} className="flex items-center mr-2 px-4 py-1 border rounded-sm border-[#555555] mb-2 transition-all hover:bg-[#1c1c1c] group">
            <span className='mr-2 group-hover:text-red-400 transition-all'>{skill.element}</span>
            <p className='text-sm'>{skill.name}</p>
          </div>
        ))}
      </ul>
      <h5 className='semibold mb-2'>Other:</h5>
      <ul className='flex flex-wrap mb-2'>
        {other.map((skill) => (
          <div key={skill.name} className="flex items-center mr-2 px-4 py-1 border rounded-sm border-[#555555] mb-2 transition-all hover:bg-[#1c1c1c] group">
            <span className='mr-2 group-hover:text-red-400 transition-all'>{skill.element}</span>
            <p className='text-sm'>{skill.name}</p>
          </div>
        ))}
      </ul>
      </div>
    </div>
  )
}
