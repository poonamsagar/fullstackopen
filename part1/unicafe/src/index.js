import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick }) => <button onClick={onClick} >{text}</button>
const Heading = ({ text }) => <h1>{text}</h1>

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);

    return (
        <div>
            <Heading text="give feedback" />
            <Button text="good" onClick={handleGoodClick} />
            <Button text="neutral" onClick={handleNeutralClick} />
            <Button text="bad" onClick={handleBadClick} />
            <Heading text="statistics" />
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)