import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid}= useParams()
  return (
    <div className='text-center bg-gray-700 p-4 text-3xl text-white'>
       UserID: {userid}
    </div>
  )
}

export default User;
