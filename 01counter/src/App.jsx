import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcounter] =useState(15)
  const addvalue =()=>{
    counter=counter+1
    if(counter>20) {
      return console.log("counter can't be greater than 20")}
    setcounter(counter)
  }
  const removevalue=()=>{
    counter=counter-1
    if(counter<0) {
      return console.log("counter can't be negative")}
    setcounter(counter)
  }
  return (
    <>
      <h1>react hook</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br/>
      <button onClick={removevalue}>Remove value {counter}</button>
      <p>footr {counter}</p>
      


    </>
  )
}

export default App
