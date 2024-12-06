import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

//It have access of user , setUser because we are passing as a props context 

function Profile() {

  const {user} = useContext(UserContext);
  if(!user) return <div> Please Enter Username </div>
  else{
  return (
    <div>
      UserName: {user.username}
    </div>
  )
  }

}

export default Profile
