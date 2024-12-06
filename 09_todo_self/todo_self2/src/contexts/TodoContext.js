import { createContext , useContext  } from "react";

export const TodoContext = createContext({
     todos: [
     {
        id: 1,
        todo:'School',
        checked: false
     }],
     addTodo: (todo)=>{},
     deleteTodo: (id) => {},
     updateTodo: (id,todo) => {},
     toggleChecked: (id) =>{}
}) ;

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
     return useContext(TodoContext)
}