import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import { create, getAll, remove, update } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const filterResult = !searchTerm
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const addPerson = (event) => {
    event.preventDefault();
    if (newName.length) {
      const newPerson = { name: newName, number: newNumber };
      const person = persons.find((person) => person.name === newName);
      if (person) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const updatePerson = { ...person, number: newNumber };
          update(updatePerson)
            .then((returnedPerson) => {
              setPersons(
                persons.map((person) =>
                  person.id !== updatePerson.id ? person : returnedPerson
                )
              );
              setNewName('');
              setNewNumber('');
            })

            .catch((error) => console.log('An error occured', error));
        }
      } else {
        create(newPerson)
          .then((returnedPerson) => {
            setPersons(persons.concat(returnedPerson));
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => console.log('An error occured', error));
      }
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => console.log('An error occured', error));
    }
  };
  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };
  const filterChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const hook = () => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
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
      <Persons personList={filterResult} deletePerson={deletePerson} />
    </>
  );
};

export default App;
