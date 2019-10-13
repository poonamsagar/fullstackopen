import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const History = props => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};
const ComplexState = () => {
  const [left, setLeft] = useState(0); // returns [state //=0,setState]
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  //const [clicks, setClicks] = useState({ left: 0, right: 0 }) //returns an array [state//defaultValue is { left: 0, right: 0 } ,setState]
  const handleLeftClick = () => {
    //setClicks({ ...clicks, left: clicks.left + 1 })
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  //debugger;
  const handleRightClick = () => {
    //setClicks({ ...clicks, right: clicks.right + 1 })
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      <div>
        {left}
        {/* <button onClick={handleLeftClick}>
                    left
          </button>h
                <button onClick={andleRightClick}>
                    right
          </button> */}
        <Button text="left" onClick={handleLeftClick}></Button>
        {right}
        <Button text="right" onClick={handleRightClick}></Button>
        <History allClicks={allClicks}></History>
      </div>
    </div>
  );
};
export default ComplexState;
