import { useState } from 'react'
import './App.css'

function App() {

  const [num, setnum] = useState(0)

  return (
    <>
      <div>{num}</div>
     <button onClick={()=>{
      setnum(num+1)
      console.log("hello")
     }}>ok</button>
    </>
  )
}

export default App
