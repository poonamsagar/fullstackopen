import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ text, onClick }) => <button onClick={onClick} >{text}</button>
const Heading = ({ text }) => <h1>{text}</h1>

const Statistic = ({ text, value }) => {
    return (<div>{text} {value}</div>)
}
const Statistics = ({ good, neutral, bad }) => {

    const totalFeedback = good + neutral + bad;
    const averageFeedback = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
    const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

    if (totalFeedback === 0) {
        return <h5>No feedback given</h5>;
    }
    else {
        return (
            <>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={totalFeedback} />
                <Statistic text="average" value={averageFeedback} />
                <Statistic text="positive" value={positivePercentage + " %"} />
            </>
        )
    }
}

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
            <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)