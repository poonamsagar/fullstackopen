import React, { useState, useEffect } from "react";
import axios from "axios";

const Note = ({ note }) => <li>{note.content} </li>;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const rows = () =>
    notesToShow.map(item => <Note key={item.id} note={item} />);
  notes.map((note, index) => {
    return note.content + index;
  });

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      id: notes.length + 1,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };
  const handleChangeEvent = event => {
    setNewNote(event.target.value);
  };
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then(response => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);
  console.log("render", notes.length, "notes");
  return (
    <>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChangeEvent} />

        <button type="submit">save</button>
      </form>
    </>
  );
};

export default Notes;
