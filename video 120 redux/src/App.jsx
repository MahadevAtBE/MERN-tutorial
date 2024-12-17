import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import { useSelector, useDispatch } from 'react-redux'   // importing redux
import { decrement, increment,multiply } from './redux/counter/counterSlice' // import decrement, increment  to use them



function App() {
  const count = useSelector((state) => state.counter.value)  // getting the count from redux stpore
  const dispatch = useDispatch()

  return (
    <>
        <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        count ={count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
