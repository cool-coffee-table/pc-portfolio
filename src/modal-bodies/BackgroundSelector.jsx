import React from "react";
import { useRecoilState } from "recoil";
import { backgroundAtom } from "../atoms/BackgroundAtom";

export default function BackgroundSelector() {

  const [ backgrounds, setBackgrounds] = useRecoilState(backgroundAtom)

  const setClouds = () => {
    setBackgrounds({clouds: true, cells:false, fog:false, globe:false})
  }

  const setCells = () => {
    setBackgrounds({clouds: false, cells:true, fog:false, globe:false})
  }


  const setFog = () => {
    setBackgrounds({clouds: false, cells:false, fog:true, globe:false})
  }
  const setGlobe= () => {
    setBackgrounds({clouds: false, cells:false, fog:false, globe:true})
  }
  return (
    <div className="p-4 overflow-y-scroll max-h-full">
      <h2 className="text-center text-2xl font-s">Click To Select Background</h2>
      <ul className="flex flex-col justify-center items-center mb-4">
        <div className="mt-4">
        <figure className="cursor-pointer" onClick={setClouds}>
          <img src="./clouds-bg.png" alt="" className="w-full max-w-[600px] rounded-md"/>
        </figure>
        </div>
        <div className="mt-4">
        <figure className="cursor-pointer" onClick={setCells}>
          <img src="./cells-bg.png" alt="" className="w-full max-w-[600px] rounded-md"/>
        </figure>
        </div>
        <div className="mt-4">
        <figure className="cursor-pointer" onClick={setFog}>
          <img src="./fog-bg.png" alt="" className="w-full max-w-[600px] rounded-md"/>
        </figure>
        
        </div>
        <div className="mt-4">
        <figure className="cursor-pointer" onClick={setGlobe}>
          <img src="./globe-bg.png" alt="" className="w-full max-w-[600px] rounded-md"/>
        </figure>
        
        </div>
      </ul>
    </div>
  );
}
