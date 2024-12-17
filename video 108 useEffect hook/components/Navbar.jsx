import React, {useEffect} from 'react'

const Navbar = ({color}) => {

      // case 1: run on every render
  useEffect(() => {
    alert("On every render")
  })

  // case 2: run only on first render
  useEffect(() => {
    alert("On first render")
  }, [])

  // case 3: run only on certain value change
  useEffect(() => {
    alert("color changed")
  }, [color])

  // case 4: example of clenup function
  useEffect(() => {
    alert("this is navbar page")
    return ()=>{  // it will run when the component is unmounted
        alert("component was unmounted")
    }
  }, [])
    
  return (
    <div>
      i am navbar of {color} color
    </div>
  )
}

export default Navbar
