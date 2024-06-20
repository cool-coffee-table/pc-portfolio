import React, { useState, useEffect } from 'react';

export default function Notepad() {
  const [notes, setNotes] = useState("");

  // Function to save notes to local storage
  const saveNotesToLocalStorage = (newNotes) => {
    localStorage.setItem("notepad-notes", newNotes);
  };

  // Function to load notes from local storage
  const loadNotesFromLocalStorage = () => {
    const savedNotes = localStorage.getItem("notepad-notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  };

  // Use effect to load notes on mount
  useEffect(() => {
    loadNotesFromLocalStorage();
  }, []);

  // Update local storage whenever notes change
  useEffect(() => {
    saveNotesToLocalStorage(notes);
  }, [notes]);

  return (
    <div className="p-3 h-full overflow-y-scroll">
      <p className='text-lg'>Notepad! Your notes will be saved in the browser.</p>
      <textarea
        className='h-full w-full mt-3 bg-[#3a3a3a] outline-none p-2 text-white rounded-sm'
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}
