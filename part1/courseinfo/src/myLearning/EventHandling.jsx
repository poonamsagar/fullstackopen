import React, { useState } from 'react';


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const EventHandle = () => {
    const [value, setValue] = useState(10)
    //const handleClick = () => {
    //  setValue(0)
    //console.log('I am clicked');
    //}

    //const hello = who => () => console.log('hello', who)

    const setToValue = newValue => () => setValue(newValue)






    return (
        <div>
            {value}
            {/* <button onClick={setToValue(0)}>reset</button>
            <button onClick={setToValue(3)}>three </button>
            <button onClick={setToValue(8)}>eight</button>
            <button onClick={setToValue(value + 1)}>increment</button> */}

            < Button handleClick={setToValue(0)} text='reset' />
            < Button handleClick={setToValue(6)} text='six' />
            < Button handleClick={setToValue(22)} text='twenty two' />
            < Button handleClick={setToValue(value + 1)} text='increment' />




        </div>
    )
}
export default EventHandle;
