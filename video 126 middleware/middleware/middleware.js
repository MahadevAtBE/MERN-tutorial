// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
// //   return NextResponse.redirect(new URL('/', request.url))  // redirecting the path to "/" . change the url to "/" when it match the bottom url
// return NextResponse.json({message: "this is about redirect"})  // sending this json on maching down url
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',  // this is the path we are matching to run redirect . we can use a n of statment insted of this
// }


import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {  // matching the url
    return NextResponse.redirect(new URL('/change', request.url))  // rewriting the page. url not change the content of the page change to this url
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}


// file name mist be "middleware"