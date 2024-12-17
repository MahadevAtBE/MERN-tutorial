import "./Box.css"

import React from 'react'

const Box = (props) => {
  return (
    <a href={props.link}>
    <div className="box">
      <img src={props.img}alt="" />
      <h2>{props.breed}</h2>
      <p>{props.detail}</p>
    </div>
    </a>
  )
}

export default Box

