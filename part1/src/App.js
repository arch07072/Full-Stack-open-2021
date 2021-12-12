import React from 'react'

import Header from './Header'
import Content from './Content'
import Total from './Total'

const data = [
  {part:"Fundamentals of React",exercise:10},
  {part:"Using props to pass data",exercise:7},
  {part:"State of a component",exercise:14},
];

let total = data.reduce(function(prev, current) {
  return prev += current.exercise
}, 0);

const App = () => {
  
  return (
    <div>
      <Header course ={'Half Stack application development'} />
       <Content  data={data}/> 
       <Total total = {total}/> 
    
    </div>
  )
}

export default App