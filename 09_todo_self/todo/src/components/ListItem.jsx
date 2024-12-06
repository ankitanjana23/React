import React ,{useState} from 'react'
import Todo from './todo'

function ListItem({todos}) {

  function handleDelete(id){
      //filter method to remove the item which idx = id
      // setTodos(Todo.filter((index,data)=>{
      //   if(id !== index) return data
      // })) 
  }

  return (
    <>
      {
        todos.map((data,idx) => (
          <Todo key = {idx} txt = {data} handleDelete = {() => handleDelete(idx)} />
        ))
      }
    </>
  )
}

export default ListItem
