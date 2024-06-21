import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

export default function FileExplorerTaskbar({path}) {
  return (
    <div className="h-[44px] bg-[#171717] flex items-center px-2 text-sm">
        <div className="flex text-[#dddddd]">
            <span className='mx-1'><FaArrowLeft/></span>
            <span className='mx-1'><FaArrowRight/></span>
        </div>
        <span className='ml-1.5 text-[#dddddd]'><FaArrowUp/></span>
        <span className='ml-3 py-1.5 px-4 rounded-md bg-[#242424]'>{path}</span>
    </div>
  )
}
