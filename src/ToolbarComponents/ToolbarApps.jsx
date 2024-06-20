import React from "react";

export default function ToolbarApps() {
  return (
    <>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-l border-gray-600">
        <img src="./Email-icon.png" alt="" className="max-w-6" />
      </span>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-gray-600">
        <img src="./file-explorer.png" alt="" className="max-w-6" />
      </span>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-gray-600">
        <img src="./Weather-icon.png" alt="" className="max-w-6" />
      </span>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-gray-600">
        <img src="./notepad.png" alt="" className="max-w-6" />
      </span>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-gray-600">
        <img src="./user-folder.png" alt="" className="max-w-6" />
      </span>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-gray-600">
        <img src="./photos.png" alt="" className="max-w-6" />
      </span>
      <span className="px-3 cursor-pointer hover:bg-slate-600 h-full flex items-center border-gray-600">
        <img src="./blue.png" alt="" className="max-w-6" />
      </span>
    </>
  );
}
