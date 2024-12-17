import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(3_000_0000).fill(0).map((_,i)=>{ // it makes an array of 3_000_000 element and fill it with 0 and map through it
  return{
    index: i,
    isMagical: i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) // expencive computation
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])  // last array is an dependensi array 

  return (
    <>
      <div>
        <span>magical munber = {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
