import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 

  const btnRef = useRef()  // make a ref

  useEffect(() => { // only first time rendaring useEffect
    console.log(`first rendaring`) 
    btnRef.current.style.backgroundColor="red"  // dom menupulating at the bbutton useng ref
  },[])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>  
          {/* marking this btn as the btnRef */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnRef.current.style.display="none"}}>change me</button> 
      {/* changing btnRef dom from this btn */}
    </>
  )
}

export default App