"use client"  // to use useParams necessary to make a clint component
import React from 'react'
import { useParams } from 'next/navigation'  //importing useParams . give the information of all slugs on dynamic routing
import { useRouter } from 'next/navigation' // use to navigat on another desier page by a btn click or a function run

import { useEffect } from 'react'


const blog = () => {
  const params = useParams()
  const router = useRouter()

  useEffect(() => {  //useeffect to use settimeout
    setTimeout(() => {
      router.push('/dashboard')   // changing root on 3s automaticly
    }, 3000);
  }, [])

  return (
    <div>
      params are: {params.slug}
      <div>
        <button type="button" onClick={() => router.push('/dashboard')}>  {/* routing on btn click */}
          Dashboard
        </button>
      </div>
    </div>
  )
}

export default blog
