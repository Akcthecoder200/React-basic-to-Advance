import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setjokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setjokes(response.data)}).catch((error)=>{
        console.log(error)
      })

    },[])
  


  return (
    <>
     <h1>connecting backend with frontend </h1>
     {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <p>{joke.title}</p>
            <p>{joke.content}</p>
          </div>
        ))
     }
    </>
  )
}

export default App
