import React from "react";
import Statistics from "./Statistics";
import Button from "./Button";

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            allClicks: 0,
        };
    }

    handleGood = () => {
        this.setState({ good: this.state.good + 1, allClicks: this.state.allClicks + 1 });
    }

    handleNeutral = () => {
        this.setState({ neutral: this.state.neutral + 1, allClicks: this.state.allClicks + 1 });
    }

    handleBad = () => {
        this.setState({ bad: this.state.bad + 1, allClicks: this.state.allClicks + 1 });
    }

 

    render() {
        console.log("app render")
        const { good, bad, neutral, allClicks } = this.state;
        

        return (
            <div>
                <h1>Give Feedback</h1>
                <div>  
                <Button  value={"good"} clickHandler={this.handleGood}/>
                <Button  value={"neutral"} clickHandler={this.handleNeutral}/>
                <Button  value={"bad"} clickHandler={this.handleBad}/>
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
}

export default App1;
