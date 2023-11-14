import { useState } from 'react'                                   //returns an array of all the puppies
import { puppyList } from './data.js'                              //imports the array into the App.jsx component
import './App.css'
import React from 'react'
import './index.css'                                                   //link CSS file to your React component 


function App() {
  const [puppies, setPuppies] = useState(puppyList)               //"[Value that you are storing, Function used to reset the value]" - You can deconstruct both of those values from the array
  const [featPupId, setFeatPupId] = useState(null)                // preparing to make Clicking a puppy from the list generates a detailed view of that puppy elsewhere in the application
    
  
  return (
      <div className ="App">
        
        
        <p>{featPupId}</p>
        { puppies.map((puppy) => {
          const featuredPup = puppies.find((pup)=> pup.id === featPupId)            //method to find the puppy with a matching ID
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )} 
          return <p onClick={ () => {                               
              setFeatPupId(puppy.id)
            }} 
              key ={puppy.id}>{puppy.name}</p>
          })  
        }
      </div>
)

    
}

export default App
