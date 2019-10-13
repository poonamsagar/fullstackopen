import React from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      {name} {exercises}
    </div>
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
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
