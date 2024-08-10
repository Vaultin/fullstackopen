import { useState } from 'react'

const Header = ({text}) => <><h1>{text}</h1></>

const StatisticsLine = ({text, stat}) => {
  return (<tr><td>{text}</td><td>{stat}</td></tr>)
}

const Statistics = ({stats}) => {
  let total = stats[0] + stats[1] + stats[2]

  if (stats[0] == 0 && stats[1] == 0 && stats[2] == 0) {
    return ( <p>No feedback given.</p> )
  } else {
    return (
      <table>
        <StatisticsLine text='Good' stat={stats[0]} />
        <StatisticsLine text='Neutral' stat={stats[1]} />
        <StatisticsLine text='Bad' stat={stats[2]} />
        <StatisticsLine text='All' stat={total} />
        <StatisticsLine text='Average' stat={(stats[0] - stats[2]) / total} />
        <StatisticsLine text='Percentage' stat={stats[0] / total} />
      </table>
    )
  }
}

const Button = ({eventHandler, text}) => (
  <button onClick={eventHandler}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text='Give feedback' />
      <Button eventHandler={handleGood} text={'Good'} />
      <Button eventHandler={handleNeutral} text={'Neutral'} />
      <Button eventHandler={handleBad} text={'Bad'} />

      <Header text='Statistics' />
      <Statistics stats={[good, neutral, bad]} />
    </div>
  )
}

export default App