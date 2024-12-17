import React from 'react'
import "./Card.css"

const Card = (props) => {   // to catch the props
  return (
    <div className='card'>
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="220" style={{border: "2px solid red"}} />
      <h1>{props.title}</h1>   
      <p>{props.description}</p>
    </div>
  )
}

export default Card
