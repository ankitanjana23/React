import React, { useEffect, useState } from "react";
import { TodoContext, TodoProvider , useTodo } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {

   const [todos,setTodos] = useState([])

  useEffect(()=>{
     const todos = JSON.parse(localStorage.getItem("todos"))    //convert to json object form 
     if(todos && todos.length >0 ){
      setTodos(todos)  
     }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))  //need value string form
 },[todos])

  const addTodo = (todo) => {
      //  setTodos([...todos,{id: Date.now() , todo: text} ])
       setTodos((prev) => [todo, ...prev])  //text is object can you direct add yes don't do spread operation its single property chekit
  }

  const deleteTodo = (id) => {
       setTodos((prev) => prev.filter((todo) => (todo.id !== id)))   //candition true it run excuted 
       
  }

  const updateTodo = (id,msg) => {  //msg complete todo 
    setTodos((prev) =>prev.map((todo)=> (todo.id === id)? msg: todo) ) //massage is object here direct pass chekit
  }

  const toggleChecked = (id) => {
    setTodos((prev) => prev.map((todo)=> (todo.id === id)?{...todo ,checked:!todo.checked }: todo) )  //checkit
  }

  return (
    <TodoProvider value={{todos , addTodo , deleteTodo , updateTodo, toggleChecked}}>   
      <h1>Manage Your Todo </h1>
      <div>
        <TodoForm/>
      </div>
        {
          todos.map((todo)=>(
            <div key={todo.id}>
              <Todo todo = {todo}/>
            </div>
          ))
        }
    </TodoProvider>
  );
}

export default App;
