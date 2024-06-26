// src/components/Calendar.jsx
import React, { useState, useEffect } from 'react';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { toolbarModalsOpenAtom } from '../atoms/ToolbarAtoms';
import { useRecoilState } from 'recoil';


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [toolbarModalsOpen, setToolbarModalsOpen] = useRecoilState(toolbarModalsOpenAtom)

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the first day of the month
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  // Get the number of days in the month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // Generate an array of the days of the month
  const days = [...Array(daysInMonth).keys()].map(i => i + 1);

  // Helper function to change the month
  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className={`absolute bottom-14 right-3 overflow-hidden max-w-[350px] mx-auto bg-black border border-lightBlack rounded-md text-sm min-h-[336px] transition-all
     ${toolbarModalsOpen.calendar ? "z-50" : "opacity-0 translate-x-32"}`}>
      <div className="flex items-center justify-between py-2 px-6 bg-darkBlack">
        <div className='min-w-[100px]'>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
        <div className="ml-4 flex text-2xl">
        <span onClick={() => changeMonth(-1)} className='px-1.5 py-1 hover:lightBlack rounded-md cursor-pointer'><GoTriangleDown/></span>
        <span onClick={() => changeMonth(1)} className='px-1.5 py-1 hoverlightBlack rounded-md cursor-pointer'><GoTriangleUp/></span>
        </div>
      </div>
      <div className="calendar-body px-1">
        {daysOfWeek.map(day => (
          <div key={day} className="flex items-center justify-center py-2.5 px-3 rounded-md">{day}</div>
        ))}
        {Array(startDay).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="flex items-center justify-center py-2.5 px-3 rounded-md transition-all cursor-pointer hover:bg-darkBlack"></div>
        ))}
        {days.map(day => (
          <div key={day} className="flex items-center justify-center py-2.5 px-3 rounded-md transition-all cursor-pointer hover:bg-darkBlack">{day}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
