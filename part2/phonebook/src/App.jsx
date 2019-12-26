import React, { useState } from "react";

const Person = ({ name, number }) => (
  <div>
    {name} {number}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filterResult = !searchTerm
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  const row = () =>
    filterResult.map(person => (
      <Person key={person.name} name={person.name} number={person.number} />
    ));

  const addPerson = event => {
    event.preventDefault();
    if (newName.length) {
      const newPerson = { name: newName, number: newNumber };
      if (persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to the phonebook`);
      } else {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      }
    }
  };
  const nameChangeHandler = event => {
    setNewName(event.target.value);
  };
  const numberChangeHandler = event => {
    setNewNumber(event.target.value);
  };
  const filterChangeHandler = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <h2>Phonebook</h2>
      <div>
        Filter shown with{" "}
        <input value={searchTerm} onChange={filterChangeHandler} />
      </div>
      <h2>Add a new</h2>
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
      <h2>Numbers</h2>
      {row()}
    </>
  );
};

export default App;
