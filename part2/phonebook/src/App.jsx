import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import { create, getAll, remove, update } from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
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
              setMessage(`Updated ${returnedPerson.name}'s number`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
              setPersons(
                persons.map((person) =>
                  person.id !== updatePerson.id ? person : returnedPerson
                )
              );
              setNewName('');
              setNewNumber('');
            })

            .catch((error) => {
              setMessage(
                `Information of ${updatePerson.name} has already been removed from server`
              );
              setMessageType('error');
              setTimeout(() => {
                setMessage(null);
                setMessageType(null);
              }, 5000);
              console.log(error);
            });
        }
      } else {
        create(newPerson)
          .then((returnedPerson) => {
            setMessage(`Added ${returnedPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
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
      <Notification message={message} type={messageType} />
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
