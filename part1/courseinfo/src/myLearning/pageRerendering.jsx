import React, { useState } from 'react';
//const poonam={counter:1,fakeValue:4,height:'blaah'}
//const myValue=props.fakeValue;
//const myCounter=props.myCounter;
//const height=props.height;
//destructuring
//const {counter,fakeValue}=props;

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)
const Display = ({ counter }) => <div>{counter}</div>

const PageRender = () => {
    const [counter, setCounter] = useState(0)
    //const increaseByOne = () => setCounter(counter + 1)
    ///const setToZero = () => setCounter(0)
    const setToValue = value => () => setCounter(value);
    //const myFunction=function(){
    //return  function anotherFunction(){}
    //}
    return (
        <>

            <Display counter={counter} />
            <Button onClick={setToValue(counter + 1)} text="plus" />
            <Button onClick={setToValue(counter - 1)} text="minus" />
            <Button onClick={setToValue(0)} text="zero" />
        </>
    )
}
export default PageRender;