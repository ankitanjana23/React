import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
     const data = useLoaderData()
  // const [data , setData] = useState({})
//   async function getApi(){
//     const response = await fetch('https://api.github.com/users/ankitanjana23')
//     const result = await response.json();
//     console.log(result)
//     setData(result)
//  } 

//   useEffect(()=>{
//     getApi()
//   })
  
  return (
    <>
    <div className='flex justify-center items-center '>
       <img className= ' object-cover' src = {data.avatar_url} alt='avatar'/>
    </div>
    <div className='text-center p-2 '>Name : {data.name} </div>
   
    </>
  )
}

 const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ankitanjana23')
  return await response.json();
 }

export  {Github,githubInfoLoader}
