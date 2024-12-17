# next-auth

## 1. make this rout to provide auth of different auths
 * file formation must be as same
 ```
 app/api/auth/[...nextauth]/route.js
 ```

1. install neat auth
```
npm install next-auth
```
2. import next auth
```
import NextAuth from 'next-auth'
```
3. import provider like github, google
```
import GithubProvider from "next-auth/providers/github"
```
4. make a handler and use the provider
```
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  
  ]
  })
```
5. now export the handler and mathods
```
export {handler as GET, handler as POST}
```

## 2. setup signup page
chose a comonent to signup page (page.js)
1. make the component "use client"
2. import useSession, signIn, signOut
```
import { useSession, signIn, signOut } from "next-auth/react"
```
3. make the sighin signout btn with this function
```
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
```

## 3. SessionWraper page
1. make a SessionWraper page
```
app/components/SessionWraper.js
```
2. make it "use clint" 
3. import SessionProvider
```
import { SessionProvider } from "next-auth/react"
```
4. wrap it in a child component
```
const SessionWraper = ({ children }) => {
    return (
        <SessionProvider>   {/* wraping body with </SessionProvider> */}
            {children}
        </SessionProvider>
    )
}
```
5. export it
```
export default SessionWraper
```

## 4. SessionWraper page
1. in layout.js import SessionWraper
```
import SessionWraper from "./components/SessionWraper";
```
2. wrap the body on SessionWraper
```
      <SessionWraper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </SessionWraper>
```