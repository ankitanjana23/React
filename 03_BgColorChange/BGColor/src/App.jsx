import { useState } from 'react'
import MyButton from './MyButton';
import "./App.css"

function App() {
 
  const[color , setColor] = useState('white')
  const colors = ["red" , "blue" , "purple" , "green" , "white" , "orange" , "teal" , "yellow"];

  return (
       <div style={{backgroundColor : color}}>
       {
         colors.map((value,idx)=>(
          <MyButton key = {idx} color = {value} handleClick={() => setColor(value)} />
         ))
       } 
       </div>  
  )
}

export default App
