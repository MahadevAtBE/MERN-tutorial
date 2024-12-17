import { useState } from 'react'
import './App.css'

import { useForm } from 'react-hook-form'  // importing useform

function App() {

  const {  // the all function of useform
    register,
    handleSubmit,
    setError,  // this is to set custom error
    watch,
    formState: { errors,isSubmitting },  // to catch error and to check submitting 
  } = useForm()

  const delay = (d)=>{   // a function return promice at some delay
    return new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)  // delay to get data to show netwark semulation
    let r = await fetch ("http://localhost:3000/", {method:"POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res)  // this log mens data is submiting
    // if (data.username == "sekhar") {  // this is to semulate block account senarion
    //   setError("blocked", {message:"this user is blocked"}) // to throw error to error.blocked
    // }
  }
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username",{ required: {value:true, message:"this fild is requird"}, minLength:{value:3, message:"Min length is 3"}, maxLength:{value:8, message:"Max length is 8"} })} type="text" placeholder='username' />
          {/* input with requird feld and msg for erroe */}
          {errors.username && <span>{errors.username.message}</span>} 
          {/* to show the error */}
          <br />
          <input {...register("password")} type="password" placeholder='password' />
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {isSubmitting && <div>Submiting...</div>}    {/* msg when submitting */}
          {/* disabled={isSubmitting} disable the button when submitting */}
          {errors.blocked && <span>{errors.blocked.message}</span>}   {/* to show all messages for error.blocked */} 
          <br />
        </form>
      </div>
    </>
  )
}

export default App
