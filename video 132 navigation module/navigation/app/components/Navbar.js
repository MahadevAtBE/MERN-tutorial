"use client"  // usePathname works on only clint component
import React from 'react'
import { usePathname } from "next/navigation";  // importing usePathname  thats give the current location of component or page

const Navbar = () => {
    const pathname = usePathname()  // making a variable for usePathname
  return (
    <div>
        <div>navbar</div>
      <div>The path is: {pathname}</div>  
    </div>
  )
}

export default Navbar
