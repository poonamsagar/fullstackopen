import React from "react";

const Note = ({ note }) => <li>{note.content} </li>;
const Notes = ({ notes }) => {
  const rows = () => notes.map(item => <Note key={item.id} note={item} />);
  const result = notes.map((note, index) => {
    return note.content + index;
  });
  console.log(result);

  return (
    <>
      <h1>Notes</h1>
      <ul>{rows()}</ul>
    </>
  );
};

export default Notes;
