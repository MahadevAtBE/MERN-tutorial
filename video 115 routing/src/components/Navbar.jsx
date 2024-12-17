import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'  // navlink give the permision to use a classsmane in content

const Navbar = () => {
  return (
    <div>
        {/* <a href="/"><li>about</li></a> */}   {/* it relods the compponent */}
      <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink>
    </div>
  )
}

export default Navbar
