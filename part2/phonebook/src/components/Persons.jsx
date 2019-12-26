import React from "react";
import Person from "./Person";

const Persons = ({ personList }) =>
  personList.map(person => (
    <Person key={person.name} name={person.name} number={person.number} />
  ));
export default Persons;
