import React from "react";

export default function About() {
  return (
    <div className="p-4">
      <div className="flex items-center">
        <figure className="flex w-28 rounded-full overflow-hidden grayscale mr-3">
          <img src="me.jpg" alt="" className="img-scale" />
        </figure>
        <div className="">
          <p className="mb-[1px] text-lg">Cole Morgan</p>
          <p className="mb-[1px]">Student at the University of Florida</p>
          <p className="text-sm">He/Him</p>
        </div>
      </div>
      <div className="mt-3 text-sm leading-relaxed">
        <p className="mb-2">Hello I'm Cole Morgan! I am a fullstack developer with a passion for the
        frontend. I enjoy building interactive and unique user experiences.</p>
        <p className="mb-2">I spend my free time supporting the Jacksonville Jaguars, playing video games, and creating random side projects.</p>
        <p className="mb-2">If you would like to see more about me, click one of the app icons or use the links below.</p>
        <div className="flex">
          <span className="underline mr-3 cursor-pointer">Projects</span>
          <span className="underline mr-3 cursor-pointer">Skills</span>
          <span className="underline mr-3 cursor-pointer">Socials</span>
          <span className="underline mr-3 cursor-pointer">Contact</span>
        </div>
      </div>
    </div>
  );
}
