## Link
normal a tag relod the page when it got clicked
to pprevent this we use link tag

1. import
```
import Link from 'next/link'
```
2. make a link 
```
<Link href="/"><li>Home</li></Link>
```

## image
normal img tag load the image on its original size. Image tag change its size according to screen size.
1. impport 
```
import Image from "next/image";
```
2. make next.config.mjs and pest the image configaration like
```
/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "dfstudio-d420.kxcdn.com",
        // hostname: 'www.menucool.com',
        port: '',
      },
    ],
  },};

export default nextConfig;
```
3. use the Image
``` <div>
        <Image  width={100} height={100} src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" alt="" />
    </div>
```
* width and height is mendetery

## script
to write custom script for that component
1. import
```
import Script from 'next/script'
```
2. use it like
```
    <div>
        <Script>  //custom Script tag
            alert("welcome to contact page")
        </Script>
        contect pahe
    </div>
```

## custom metadata
custom metadata for a component

```
export const metadata = {  // to set title/ metadata of every page
  title: "about page", // this is the title of the site
  description: "about page of the app",
};
```