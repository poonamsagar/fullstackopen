import React, { useState } from "react";

const Person = ({ name }) => <div>{name}</div>;

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const row = () =>
    persons.map(person => <Person key={person.name} name={person.name} />);

  const addPerson = event => {
    event.preventDefault();
    const newPerson = { name: newName };
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };
  const changeHandler = event => {
    setNewName(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={changeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {row()}
    </>
  );
};

export default App;
