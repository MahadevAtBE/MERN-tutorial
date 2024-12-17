// "use client"
import Image from "next/image";

export default function Home() {
  // console.log(`The id is ${process.env.ID}`)  // this is server side rendaring so we get the env from server
  console.log(`this env is now brouser side also: ${process.env.NEXT_PUBLIC_PASS}`)  // no ned to "use client" because it hase send to browser
  return (
    <div>
      home page
      <span>The id is: {process.env.ID}</span>
      {/* we cant get it in client side because server side env and client side env are not same */}
      {/* but if we want to parsr the env va we have to save the var like (NEXT_PUBLIC_<var>) */}
      <span>The id is: {process.env.NEXT_PUBLIC_PASS}</span>
    </div>
  );
}
