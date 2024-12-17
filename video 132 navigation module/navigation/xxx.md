# quary
## useSearchParams
to get parems from browser at frontend
1. make that clint component
```
"use client"
```
2. import useSearchParams
```
import { useSearchParams } from "next/navigation";
```
3. make a variable
```
  const searchparams = useSearchParams()
```
4. extrect parems of name blog
```
{searchparams.get("blog")}
```
*     <div>
        main page and the search parems of blog is {searchparams.get("blog")} and source is {searchparams.get("source")}
        {/* the search reselt of =>  http://localhost:3000/?blog=python&source=sekhar
          will giv => main page and the search parems of blog is python and source is sekhar */}
      </div>

# get slug
## use useParams
1. make a variable
```
  const params = useParams()
```
2. get slug
```
params are: {params.slug}
```

# Pathname
## usePathname

1. make it clint conponent
```
"use client"
```
2. import usePathname
```
import { usePathname } from "next/navigation";
```
3. extrect variable
```
const pathname = usePathname() 
```
4. gat path
```
<div>The path is: {pathname}</div>  
```

# router.push
changing root by force 
1. make a router
```
const router = useRouter()
```
2. use router.push on a btn
```
     <button type="button" onClick={() => router.push('/dashboard')}>  {/* routing on btn click */}
          Dashboard
    </button>
```
