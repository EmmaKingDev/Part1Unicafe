import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const wasGood = () => setGood(good + 1)
  const wasNeutral = () => setNeutral(neutral + 1)
  const wasBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button 
        handleClick={wasGood}
        text='good'
        />
        <Button 
        handleClick={wasNeutral}
        text='neutral'
        />
        <Button 
        handleClick={wasBad}
        text='bad'
        />
        <h2>Statistics</h2>
        <div className="stats">
        <p> good </p>
        <p> neutral </p>
        <p> bad </p>
        </div>
        <div className="stats-numbers">
        <DisplayG good={good} />
        <DisplayN neutral={neutral} />
        <DisplayB bad={bad} />
        </div>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}

const DisplayG = (props) => {
  return (
    <div>{props.good}</div>
  )
}

const DisplayN = (props) => {
  return (
    <div>{props.neutral}</div>
  )
}

const DisplayB = (props) => {
  return (
    <div>{props.bad}</div>
  )
}

export default App