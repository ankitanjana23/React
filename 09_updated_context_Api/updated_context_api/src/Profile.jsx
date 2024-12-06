import React from 'react'
import { useUserData } from './context/UserContext'

function Profile() {

  const {user} = useUserData() 
  return (
    <div>
      User: {user?user: "no user exist"}
    </div>
  )
}

export default Profile
