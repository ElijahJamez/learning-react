import { useState } from 'react'                                   //returns an array of all the puppies
import { puppyList } from './data.js'                              //imports the array into the App.jsx component
import './App.css'
import React from 'react'



function App() {
  const [puppies, setPuppies] = useState(puppyList)               //"[Value that you are storing, Function used to reset the value]" - You can deconstruct both of those values from the array
  console.log(puppies)  
    return (
      <div className ="App">
        { 
         puppies.map((puppy) => {
          return <p key ={puppy.id}>{puppy.name}</p>
          })  
        }
      </div>

    )
}

export default App
