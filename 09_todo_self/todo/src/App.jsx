import React, {useState} from 'react'
import ListItem from './components/ListItem'


function App() {
  const [text , setText] = useState('')
  const [todos,setTodos] = useState([]) //containe empty array

  const handleClick = () => {
        //another component exucte here 
        if(!text) throw new Error('Please Write same todo than add')
        else{
            setTodos([...todos , text])
        }
  }

  return (
    <div className="text-black-500 text-center border-2 border-gray-300 p-4 rounded-md">
    <div>
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className=" items-center space-x-2">
        <input
          type="text"
          placeholder="Write Todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 border border-gray-400 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
    </div>
    <ListItem todos={todos}/>
  </div>
  )
}

export default App
