import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  nameChangeHandler,
  newNumber,
  numberChangeHandler
}) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={nameChangeHandler} required />
    </div>
    <div>
      number:{" "}
      <input value={newNumber} onChange={numberChangeHandler} required />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
export default PersonForm;
