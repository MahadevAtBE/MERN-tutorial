import { useState } from 'react'  // installing usestate
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  // making a usestate vriable and its controlling function

  return (
    <>
        <div className='ok'>The count is {count}</div>
        <button onClick={()=>{setCount(count+2)}}>Update count</button>
    </>                                                                                 
  )
}

export default App
