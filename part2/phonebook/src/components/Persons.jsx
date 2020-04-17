import React from 'react';
import Person from './Person';

const Persons = ({ personList, deletePerson }) =>
  personList.map((person) => (
    <Person
      key={person.name}
      name={person.name}
      number={person.number}
      deletePerson={() => deletePerson(person.id)}
    />
  ));
export default Persons;
