import React, { useState, useEffect } from 'react';
import { getAll, create, update } from '../services/notes';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important';
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from the server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };
  const rows = () =>
    notesToShow.map((note) => (
      <Note
        key={note.id}
        note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}
      />
    ));
  notes.map((note, index) => {
    return note.content + index;
  });

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };
    create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };
  const handleChangeEvent = (event) => {
    setNewNote(event.target.value);
  };
  const hook = () => {
    getAll().then((initialNotes) => {
      console.log('promise fulfilled ');
      setNotes(initialNotes);
    });
  };

  useEffect(hook, []);
  console.log('render', notes.length, 'notes');
  return (
    <>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChangeEvent} />

        <button type='submit'>save</button>
      </form>
    </>
  );
};

export default Notes;
