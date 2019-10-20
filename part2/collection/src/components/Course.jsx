import React from "react";
const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Total = ({ parts }) => {
  const reducer = (acc, cur) => acc + cur.exercises;
  const sumOfExercises = parts.reduce(reducer, 0);
  return <h3>total of {sumOfExercises} exercises</h3>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  const names = parts.map(item => {
    return (
      <Part key={item.id} name={item.name} exercises={item.exercises}></Part>
    );
  });
  return names;
};

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts} />
    </>
  );
};
export default Course;
