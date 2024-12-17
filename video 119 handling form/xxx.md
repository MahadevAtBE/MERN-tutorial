# Handling forms

## frontend

1. in frontend where we make the form install it
```
npm install react-hook-form
```
2. import
```
import { useForm } from 'react-hook-form'
```
3. get all the functions from useForm
```
  const {  // the all function of useform
    register,
    handleSubmit,
    setError,  // this is to set custom error
    watch,
    formState: { errors,isSubmitting },  // to catch error and to check submitting 
  } = useForm()
```

4. make a form
``
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
``
5. make onSubmit function to fetch a POST request to backend

``
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
``

## backend
1. make a express server

2. import cors for frontend abd backent different cors and
 body-parser to parsr the data from body to json formet.
```
import cors from "cors"
import bodyParser from "body-parser"
```
3. make a POST request handeler on same ens point of frontend
```
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})
```