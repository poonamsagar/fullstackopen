import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  const hook = () => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);
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
