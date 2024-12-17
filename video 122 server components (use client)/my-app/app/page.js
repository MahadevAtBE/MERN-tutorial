"use client"  // to use frontend componets like usestate we have to make it a clint component
import { useState,useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      this is a component {count}
      <button onClick={()=>setCount(count+1)}>update</button>
    </div>
  );
}
