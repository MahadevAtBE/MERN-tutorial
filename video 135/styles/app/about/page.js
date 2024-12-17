"use client"
import React from 'react'

function About() {
  return (
    <div>
    <div className="con">
      <h1>this is about me</h1>
      <p>i am a pprogrammer</p>
      <style jsx>{`
        .con{
            background-color: red;
            color: green;
            }
            `}
      </style>

      <div className="con">
        this is another div with className con
        but the css will nit work on this because 
        the css is only first cons propraty.
        to mske this global we have to write jsx global
      </div>
    </div>
    </div>
  )
}

export default About
