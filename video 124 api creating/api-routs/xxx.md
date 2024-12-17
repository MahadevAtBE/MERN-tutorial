# api-routs
api routs tells next js that we are going to make get post delete request

1. make a file
```
app/api/add/routs.js
```
2. import routs on it
```
import { NextResponse } from "next/server";
```
3. define the function of method, collect data, send responce
```
export async function POST(request) {   // post request handeler

    let data = await request.json()  // catching the data
    console.log(data)

    return NextResponse.json({success:true,  // this is the terponce when backend get the data
        receve:"yes",
        data  // resending the same data to brouser/frontend/sender
    })
}
```

## in frontend
1. make a form and collect the data and send it to backend
2. make a custom data and send it
3. inside function make a post request
4. capture the responce comming from the backend

```
  const handelClick = async () => {  //event handeler to doa post request

    let data = {  // example data to send with post request
      name: 'pokemon',
      role: 'programmer',
      phone:9064743234
    }

    let a = await fetch("/api/add",  // fetching a post request
      {
        method: "POST", headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)  // sending data json
      })
    let responce = await a.json()
    console.log(responce)  // consoling responce
  }
```