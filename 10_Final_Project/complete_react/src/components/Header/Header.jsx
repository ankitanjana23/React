import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-gray-500 w-full p-4 flex justify-between items-center">
    <h1 className="text-white text-xl font-bold">Blog App</h1>
    <nav className="flex space-x-4">
      <NavLink 
        to="/" 
        className="text-white hover:text-gray-300 transition-colors"
      >
        Home
      </NavLink>
      <NavLink 
        to="/login" 
        className="text-white hover:text-gray-300 transition-colors"
      >
        Login
      </NavLink>
      <NavLink 
        to="/signup" 
        className="text-white hover:text-gray-300 transition-colors"
      >
        Signup
      </NavLink>
    </nav>
  </div>
  )
}



export default Header
