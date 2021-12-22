import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad, allClicks}) => {
    console.log('stat  render')
    return (
        <div>
        <h1>Stats: </h1>
        <table>
        <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="All" value={allClicks}/>
        <StatisticLine text="Average" value={(good + bad * -1) / allClicks}/>
        <StatisticLine text="Percentage" value={good * 100 / (good + bad + neutral) + '%'} /> 
        </tbody>
        </table>
        </div>
    )
}

export default Statistics;