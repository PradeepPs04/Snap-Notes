import React from "react";

import deleteIcon from "../../assets/delete.svg";

import "./Note.css";

function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    // array for months 
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours(); // returns in 24 hours format
    hrs += 4; // something is wrong that's why adding 4 to make it correct fix it later
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12"; // show 12 when hour is 0
    hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;
    // hrs = hrs < 10 ? "0" + hrs : hrs; // to show single digit like '2' as '02' 

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    // date.getMonth() returns the index of month
    let month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const updateText = (text, id) => {
    props.updateText(text, id);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
