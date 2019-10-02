import React, { useState } from "react";
import ReactDOM from "react-dom";

const Heading = props => {
  return <h1>{props.text}</h1>;
};
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(6).fill(0));
  const generateAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setSelected(randomNumber);
  };
  const voteClick = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };
  const getMaxValue = arr => Math.max(...arr);
  const getMaxValueIndex = arr => {
    const maxValue = getMaxValue(arr);
    return arr.indexOf(maxValue);
  };
  return (
    <>
      <Heading text="Anecdote of the day" />
      {props.anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <div>
        <Button onClick={voteClick} text="vote" />
        <Button onClick={generateAnecdotes} text="next anecdotes" />
      </div>
      <Heading text="Anecdote with most votes" />
      {props.anecdotes[getMaxValueIndex(votes)]}
      <div>has {getMaxValue(votes)} votes</div>
    </>
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
