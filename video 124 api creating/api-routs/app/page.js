"use client"  // frontend
import Image from "next/image";

export default function Home() {
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

  return (
    <div>
      <h1>nextjs api routs demo</h1>
      <button onClick={handelClick}>Cllick me</button>
    </div>
  );
}
