export default async function Page() {
    let data = await fetch('https://api.vercel.app/blog', {next: {revalidate:3600}})
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }

  // by default if we build this page it will build as a static page bacause fecth store the data on cache memory
  export const dynamic = 'force-dynamic'
  // this will prevent to build as static page

  // by default next js dont run the fetch request over and over it store the data on cache memory to prevent this
  // we have to add  {cache:'no-store'} to the api link

  // if we want to fetch the data in a sertin time of loop and store it in cache just add
  // {next: {revalidate:3600}} to the api link
  // it will re fetch the data in 3600 seconds and store it in cache