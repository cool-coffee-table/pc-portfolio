import React from "react";
import { LuRocket } from "react-icons/lu";

export default function Projects() {
  return (
    <div className="relative h-full overflow-y-scroll p-2 ">
      <ul className="mt-2">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </ul>
    </div>
  );
}

function Project() {
  return (
    <li className="flex flex-col justify-center items-center w-full pl-3 mb-7">
          <h5 className="text-center semibold">Sample Project Title</h5> 
          <figure className="max-h-28 max-w-64 flex mt-3 rounded-sm overflow-hidden relative">
            <img src="./placeholder.png" alt="" className="" />
            <div className="absolute flex w-full justify-between text-xs">
            <a href="" className="py-1 px-2 bg-blue-500 rounded-sm">Live Demo</a>
            <a href="" className="py-1 px-2 bg-purple-600 rounded-sm">Github Repo</a>
            </div>
          </figure>
          <div className="text-xs flex justify-center items-center flex-wrap mt-2">
            <span className="mr-3">Next.JS</span>
            <span className="mr-3">TypeScript</span>
            <span className="">Tailwind</span>
          </div>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            nisi, odit quaerat nemo dolore earum sit modi dicta nihil repellat
            harum sapiente unde, similique, tenetur eos enim ratione praesentium
            tempora.
          </p>
        </li>
  )
}
