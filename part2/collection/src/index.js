import React from "react";
import ReactDOM from "react-dom";

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

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  };

  return <Course course={course} />;
};
ReactDOM.render(<App />, document.getElementById("root"));
