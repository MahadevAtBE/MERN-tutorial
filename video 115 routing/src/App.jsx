import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

import { createBrowserRouter,RouterProvider } from 'react-router-dom' // recomended to make a router
import User from './components/User' // to pass user peramiter

function App() {

  const router = createBrowserRouter([  // this is an array of objects
    {
      path:"/",
      // element:<Home/>  // this will work on main.jsx
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    },
  ])

  return (
    <>
      <div>
      <RouterProvider router={router}/>
      {/* <Navbar/> 
      // element:<Home/>  // this will work from main.jsx*/}
      </div>
    </>
  )
}

export default App
