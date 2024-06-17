import { useState ,useCallback ,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")
  //useref
  const passwordRef = useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*-_+=[]{}~`"
    for (let i = 0; i < length; i++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },[length, numberallowed, charallowed, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  

  useEffect( () => { passwordgenerator() },[length,setpassword,charallowed,numberallowed,passwordgenerator])

  return (
    <>
   <div className='w-full px-4 py-4 my-8 bg-gray-600 txt text-orange-400'>
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className='flex mb-4 overflow-hidden shadow rounded-lg'>
      <input type="text" value={password} className='w-full py-1 px-3' placeholder='Password'  readOnly ref={passwordRef} />
      <button className='px-1 py-1 bg-blue-500 text-white font-bold  ' onClick={copyPasswordToClipboard}>copy</button>
    </div>
    <div className='flex'>
      <div className='flex'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer ' onChange={(e)=> setlength(e.target.value)} />
      <label >Length:{length}</label>
      </div>
      <div className='flex px-3'>
        <input type="checkbox" defaultChecked={numberallowed}   id="numberInput" onChange={()=>{
          setnumberallowed((prev)=> !prev)
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex px-3'>
        <input type="checkbox" defaultChecked={charallowed} id="characterInput" onChange={()=>{
          setcharallowed((prev)=> !prev)
        }} />
        <label htmlFor="characterInput">characters</label>
      </div>
    </div>
   </div>
      
    </>
  )
}

export default App
