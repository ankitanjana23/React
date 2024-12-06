import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
     <h1 className='flex justify-center items-center p-10 text-3xl'>
      <NavLink to = 'login' className = "hover:text-orange-700"
      >Login {" "}</NavLink> 
      to Read Blog
      </h1>
    </div>
  )
}

export default Home
