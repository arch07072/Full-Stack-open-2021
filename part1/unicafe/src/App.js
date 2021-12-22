import React, { useState } from 'react'
import Statistics from "./Statistics";
import Button from "./Button";


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
 
  
  const handleGood = () => {
    setAll(allClicks+1)
    setGood(good + 1)
  }

  const handleBad = () => {
    setAll(allClicks+1)
    setBad(bad + 1)
  }

  
  const handleNeutral = () => {
    setAll(allClicks+1)
    setNeutral(neutral + 1)
  }



  return (
    <div>
        <h1>Give Feedback</h1>
        <div >  
        <Button  value={"good"} clickHandler={handleGood}/>
        <Button  value={"neutral"} clickHandler={handleNeutral}/>
        <Button  value={"bad"} clickHandler={handleBad}/>
        </div>
      
        
        {
            allClicks !== 0 ?
                <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks}  /> :
                <div>
                    <h2>Statistics : </h2>
                    <p>No feedback </p>
                </div>
        }

    </div>
);
}

export default App