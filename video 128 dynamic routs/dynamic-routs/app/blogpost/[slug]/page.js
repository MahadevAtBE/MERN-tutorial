// the [slug] folde is a slug peremeter comming from browser
// same as we an make [...slug] thos will return an aray of slugs if it gets more then one

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