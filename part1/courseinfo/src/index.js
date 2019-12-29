import React from "react";
import ReactDOM from "react-dom";
import Hello from "./myLearning/personalStudy";
import PageRender from "./myLearning/pageRerendering";
import ComplexState from "./myLearning/ComplexState";
import EventHandle from "./myLearning/EventHandling";
import Notes from "./myLearning/Notes";

const Header = props => {
  return <h1>{props.course}</h1>;
};
const Part = props => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};
const Content = props => {
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};
const Total = props => {
  console.log(props);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}{" "}
    </p>
  );
};

const data = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  },
  {
    id: 4,
    content: "HTML is easy 4",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 5,
    content: "I am new 5",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  }
];

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Hello name="Poonam" age="28" gender="female" />
      <PageRender></PageRender>
      <ComplexState></ComplexState>
      <EventHandle></EventHandle>
      <Notes></Notes>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
//setInterval takes two argument, 1. callback method, 2. Time delay
