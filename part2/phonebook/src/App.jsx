import React, { useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

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
      <Filter
        searchTerm={searchTerm}
        filterChangeHandler={filterChangeHandler}
      />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newNumber={newNumber}
        numberChangeHandler={numberChangeHandler}
      />
      <h3>Numbers</h3>
      <Persons personList={filterResult} />
    </>
  );
};

export default App;
