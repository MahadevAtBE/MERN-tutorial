import React,{memo} from 'react'

const Navbar = ({adjective,getAdjective}) => {  // getting the callback
    console.log("navbar is renderd")
  return (
    <div>
      i am a {adjective} navbar
      <button onClick={()=>{getAdjective()}}>change</button>
      {/* using it to tigger another function */}
      <br /><br /><br />
    </div>
  )
}

export default memo(Navbar)
//every time app.jsx got rerender it rerender navbar.jsx
// memo prevent rerendaring on stats that are not releted to this component
// this component will rerender only when the props or stats are releted to this got canged
