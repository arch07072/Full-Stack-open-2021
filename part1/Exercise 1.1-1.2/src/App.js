import Header from './Header'
import Content from './Content'
import Total from './Total'

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
};


  

let total = course.parts.reduce(function(prev, current) {
  return prev += current.exercises
}, 0);



const App = () => {
  
  return (
    <div>
     <Header course ={course} />
     <Content  parts={course.parts}/> 
      <Total total = {total}/>   
    
    </div>
  )
}

export default App