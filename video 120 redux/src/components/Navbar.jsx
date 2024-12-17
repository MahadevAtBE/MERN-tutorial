import React from 'react'

import { useSelector, useDispatch } from 'react-redux'   // importing redux

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)  // getting the count from redux stpore
  return (
    <div>
      this is  A navbar counter {count}
    </div>
  )
}

export default Navbar
