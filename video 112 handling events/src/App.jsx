import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [name, setname] = useState("sekhar") // this state is used to capture value from input,
// initialization value is "sekhar" but most of thet tima we us empty ""

// const [form, setform] = useState({email:"",phone:""}) // this is custom made variable if dont match by inp name through error
const [form, setform] = useState({})

  const handleClick=()=>{ // this function for btn
    alert("btn clicked")
  }

  const handleMouseOver=()=>{// this function for mouse hover
    alert("mouse hovered")
  }
  
  const handleChange=(e)=>{  // this one capture the changes in input
    // setname(e.target.value)
    setform({...form,[e.target.name]:e.target.value}) // populating form. seting e.target.name -> inp(email,phone) same as variables of form to e.target.value
    // the usestae variable name and the input name have to be same
    console.log(form.email)
    console.log(form.phone)
    console.log(form)
  }

  return (
    <>
    <div className="buttton">
      <button onClick={handleClick}>Click me</button>
    </div>

    <div className="red" onMouseOver={handleMouseOver}>
      this is a red div
    </div>

    {/* <input type="text" name="email" id="" value={form.email} onChange={handleChange}/>
    <input type="text" name="phone" id="" value={form.phone} onChange={handleChange}/> */}
    {/* this will find a key in form usestate same as the name as input and set the value */}

    {/* <input type="text" name="email" id="" value={form.email?form.email:""} onChange={handleChange}/>
    <input type="text" name="phone" id="" value={form.phone?form.phone:""} onChange={handleChange}/> */}
    {/* form.email?form.email:"" .... if form state dosenot have  valicbles it will make */}

    <input type="text" name="email" id="" value={form?.email} onChange={handleChange}/>
    <input type="text" name="phone" id="" value={form?.phone} onChange={handleChange}/>
    {/* this is the shorthand */}
    </>
  )
}

export default App
