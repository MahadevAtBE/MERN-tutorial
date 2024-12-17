import React from 'react'
import Link from 'next/link'  // to prevent page reloding on clicking oa a ancher tag

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-green-500 p-5">
        <div className='font-bold text-xl'>Website name</div>
        <ul className="flex items-center gap-8">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contect"><li>Contect</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
