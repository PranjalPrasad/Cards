import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
// let myobj={
//   name:'Pranjal',
//   age:24,
//   address:
//   {
//     city:'Pune',
//     state:MH ,
//     Country:India
//   }

// }


// let newArr=[1,2,3,4,5,6,7,8,9]
  return (
    <>
     <h1 className='text-3xl bg-green-400 p-3 rounded'>My Staff Card using Props</h1>
     <Card username="Pranjal" post="Full Stack Developer"/>
     <Card username='Jenny' post="Software Engineer"/>
     <Card username='Lara' post="Staff Engineer"/>
     {/* <Card username ="Harry" post="Software Engineer" myArr={newArr}/> */}
    </>
  )
}

export default App
