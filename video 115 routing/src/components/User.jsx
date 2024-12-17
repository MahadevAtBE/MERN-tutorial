import React from 'react'
import { useParams } from 'react-router-dom' // to get peremeter from app.jsx

const User = () => {
    const parems = useParams()
  return (
    <div>
      i am user {parems.username}
    </div>
  )
}

export default User
