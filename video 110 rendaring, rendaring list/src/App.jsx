import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)  // useState  for showbtn
  // mking a useState to hold our todo json
  const [todos, settodos] = useState([
    {
      title: "todo 1",
      desc: "this is todo 1"
    },
    {
      title: "todo 2",
      desc: "this is todo 2"
    },
    {
      title: "todo 3",
      desc: "this is todo 3"
    },
  ])

  // making a component here
  // const Todo = ({todo})=>{
  // return(<>  
  // <div>
  //   <div className='todo'>{todo.title}</div>
  //   <div>{todo.desc}</div>
  //   </div> 
  // </>)}

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


      {/* rendaring  btnn */}
      {/* {showbtn?<button>showbtn is true</button>:"not true"}     using ternary operater */}
    {showbtn && <button>showbtn is true</button>}     {/* another way  to  render but wwhen its only true  */}
 

      {/* using map mathod to traveres through all valuse and render them */}
      {todos.map(todo=>{
        // return <Todo key={todo.title} todo={todo}/>  // we must give a key and that have to be unique
        // or we can render like total component
        return <div key={todo.title}> 
        {/* return and component  must be  in a same line  other wise make a  () arround div */}
        <div className='todo'>{todo.title}</div>
        <div>{todo.desc}</div>
        </div> 
      })}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}> {/* // rendarinh on togle */}
          Togle showbtn {count}
        </button>
      </div>
    </>
  )
}

export default App
