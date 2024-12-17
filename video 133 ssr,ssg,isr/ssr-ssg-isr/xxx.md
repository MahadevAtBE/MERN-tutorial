# ssr, ssg, isr
## ssr
 -> server side rendaring:
```
"use server"
``` 
the rendsring will be saver side.
it means the console.log will show the output on server side trminal
```
"use client"
``` 
the console.log will show the output on client side trminal of browser

## ssg
 -> static site generation:
    any page which dose not have netwark calls is a static page by default

## isr
 -> incre ?:

fetch in next js caches the responce  to prevent too much server request and this might cause a problem due to not changing the responce data.

we can prevent this with adding {cache:'no-store'} to the api link

or we can set the time intervel to the fetch calles
```
    let data = await fetch('https://api.vercel.app/blog', {next: {revalidate:3600}})
```

* there are exceptions to cache
    1. used inside a server action
    2. used inside a rout handeler, that uses the POST method


# static, dynamic page
by default if we build this page it will build as a static page bacause fecth store the data on cache memory.
to prevent build as static page.
we gave to make this component dynamic
```
 export const dynamic = 'force-dynamic'
 ```