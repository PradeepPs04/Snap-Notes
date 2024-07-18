import React, { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";

import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

function App() {
  // getting notes from local storage if available
  const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);
  const [notes, setNotes] = useState(allNotes);

  const addNote = (color) => {
    const tempNotes = [];
    const tempAllNotes = []

    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 78), // generating random id
      text: "",
      time: Date.now(),
      color,
    };
    
    tempAllNotes.push(newNote);
    tempAllNotes.push(...allNotes);
    setAllNotes(tempAllNotes);

    tempNotes.push(newNote);
    tempNotes.push(...notes);
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const allTempNotes = allNotes.filter((note) => {
      return note.id !== id;
    });
    setAllNotes(allTempNotes);

    const tempNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  // storing notes in local storage
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(allNotes));
  }, [notes]);

  
  const [inputData, setInputData] = useState('');

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  }

  const handleClearInput = () => {
    setInputData('');
  }

  useEffect( () => {
    const newNotes = allNotes.filter((note) => {
      return note.text.toLowerCase().includes(inputData.toLowerCase().trim());
    });
    setNotes(newNotes);
  }, [inputData]);

  return (
    <div className="App">
      
      <div className="searchbox">
        <input type="text" placeholder="Search notes" value={inputData} onChange={handleInputChange}></input>
        <div className="clear-btn" onClick={handleClearInput}>
        <MdClear />
        </div>
      </div>

      <div className="notes-container">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      ></NoteContainer>
      </div>

    </div>
  );
}

export default App;
