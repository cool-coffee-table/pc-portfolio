import React from "react";
import { useRecoilState } from "recoil";
import { backgroundAtom } from "../atoms/BackgroundAtom";

export default function BackgroundSelector() {
  const [backgrounds, setBackgrounds] = useRecoilState(backgroundAtom);

  const images = [
    "./bg-1.jpg",
    "./bg-2.jpg",
    "./bg-3.jpg",
    "./bg-4.jpg",
    "./bg-5.avif",
    "./bg-6.avif",
    "./bg-7.jpg",
    "./bg-8.jpg",
  ];

  const setBg = (img) => {
    document.body.style.backgroundImage = `url(${img})`
  };
  return (
    <div className="px-2.5 py-3 overflow-y-auto max-h-full">
      <h2 className="text-center text-xl semibold mb-2">
        Click To Select Background
      </h2>
      <div className="flex justify-between">
        <ul className="flex flex-col flex-wrap justify-between mb-4">
          {images.slice(0, 4).map((img) => (
          <Background key={img} img={img} setBg={() => setBg(img)}/>
          ))}
        </ul>
        <ul className="flex flex-col flex-wrap justify-between mb-4">
          {images.slice(4).map((img) => (
            <Background key={img} img={img} setBg={() => setBg(img)}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

// onClick={setBg={() => setBg(img)}}

function Background({ img, setBg }) {
  return (
    <figure className="cursor-pointer mt-2" onClick={setBg}>
      <img
        src={img}
        alt="bg"
        key={img}
        className="w-full max-w-[180px] rounded-md"
      />
    </figure>
  );
}
