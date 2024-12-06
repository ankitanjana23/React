import React from 'react'

function Footer() {
  return (
    <div className="absolute bottom-0 bg-gray-500 p-4 text-center w-full ">
      <div>© {new Date().getFullYear()} Ankit Anjana. All rights reserved.</div>
    </div>
  )
}

export default Footer
