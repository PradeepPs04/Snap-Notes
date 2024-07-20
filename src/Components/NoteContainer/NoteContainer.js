import React from "react";

import Note from "../Note/Note";
import NoNotes from '../NoNotes/NoNotes';

import "./NoteContainer.css";

function NoteContainer(props) {

  const notes = props.notes;

  return (
    <div className="note-container">
      <h2>SnapNotes</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div className="noNotes-container">
            <NoNotes/>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
