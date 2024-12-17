# dynamic routs
1. make the dynamic page like
```
app/blogpost/[slug]/page.js
```
here [slug] is a slug peremiter we can take from user brouser
2. make the responce as per te slug
```
export default async function Page({ params }) { 
    // throw new console.error("the error");  // this custom error is for custom error page
    
    const slug = (await params).slug
    //fecth blog by its slug
    let blogs = ["python", "javascript", "c", "cpp", "cs"]  // assume an array of blogs
    if(blogs.includes(params.slug)){  // finding the blog we wat to display
        return <div>My Post: {slug}</div>
    }else{
        return <div>Post not found</div>  // if blog not abilable
    }
  }
```

# custom 404 not found page
1. make a file same
```
app/not-found.js
```
2. make the page

# custom error page
1. make a file same as
```
app/error.js
```
2. make it client
```
'use client' 
```
3. make the page