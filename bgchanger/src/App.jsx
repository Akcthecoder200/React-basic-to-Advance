import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color,setcolor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py2 rounded-3xl '>
          <button onClick={()=>setcolor("red")} className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setcolor("blue")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setcolor("yellow")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setcolor("orange")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setcolor("green")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setcolor("pink")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>setcolor("purple")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setcolor("Black")}  className='px-4 py-1 mt-1 mb-1 outline-none rounded-full text-wrap text-white
        ' style={{backgroundColor:"Black"}}>black</button>
        </div>

      </div>
    </>
  )
}

export default App
