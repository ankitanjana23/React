import { useState } from 'react'
import React  from 'react'
import { useTodo } from '../contexts/TodoContext'

function Todo({todo}) {
  
  const {deleteTodo,updateTodo,toggleChecked} = useTodo()
  const [msg , setMsg] = useState(todo.todo)
  const [isEditClicked,setIsEditClicked] = useState(false)

  const handleEdit = () => {
        updateTodo(todo.id,{...todo , todo:msg})   // complete object pass just massage change
        setIsEditClicked(true)
  }
  const handleChecked = () => {
        toggleChecked(todo.id)
  }

  return (
    <div style={{backgroundColor: (todo.checked)?"green":"white"}}>
      <input type='checkbox' onChange={handleChecked} checked = {todo.checked}></input>
      <input type='text' value={msg} onChange={(e) => setMsg(e.target.value)}
       readOnly = {!isEditClicked}   
      ></input>
      <button onClick={() => {
           if(isEditClicked) setIsEditClicked(!isEditClicked) 
           else handleEdit() 
      }} 
      disabled = {todo.checked} >
       {isEditClicked?'save' : 'edit'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </div>
  )
}

export default Todo
