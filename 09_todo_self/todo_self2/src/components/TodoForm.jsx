import React ,{useState} from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {

  const [txt,setTxt] = useState('')
  const {addTodo} = useTodo()

  const handleSubmit = (txt) =>{
      // e.preventDefault(); //form submited so it goes to server so prevent this default feature 
      if(!txt) return 
      addTodo({id:Date.now() , todo: txt , checked:false })
      setTxt('')  //clear memory  otherwise every time it containe new data
  }

  return (
    <div>
        <input type='text' value={txt} placeholder='Write Text...' onChange={(e) => setTxt(e.target.value)}  ></input>
        <button onClick={() => handleSubmit(txt)}>Add</button>
    </div>
  )
}

export default TodoForm
