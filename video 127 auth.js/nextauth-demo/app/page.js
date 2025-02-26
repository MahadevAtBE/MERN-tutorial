//2 change first page  to show signup btn and to collect data
"use client"
// from documentation of nextAuth for client side
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    {/* <button onClick={() => signIn()}>Sign in</button> */}
    <button onClick={() => signIn("github")}>Sign in using Github</button>
  </>
}