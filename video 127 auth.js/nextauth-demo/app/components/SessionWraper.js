// 3 make this session wraper to provide SessionProvider to page
"use client"
//SessionProvider only can be used is client component so we make a separet component that take the children as the peremiter and wrap it in SessionProvider
import { SessionProvider } from "next-auth/react" // for nexyAuth


const SessionWraper = ({ children }) => {
    return (
        <SessionProvider>   {/* wraping body with </SessionProvider> */}
            {children}
        </SessionProvider>
    )
}

export default SessionWraper
