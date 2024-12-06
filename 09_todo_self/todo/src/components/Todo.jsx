import React,{useState} from 'react'

function Todo({txt ,handleDelete}) {
  const [item,setItem] = useState(false)
  const [img , setImg] = useState('/edit.png')

  const handleCheckBox = () => {
    const value = e.currentTarget.checked
    setItem(value)
  }
  const handleEdit = () => {
        if(img === '/edit.png') setImg('/save.png')
        else setImg('/edit.png')
  }

  return (
    <div id = 'container' className='flex justify-center border border-gray-400 rounded-md w-25 m-4'>
      <input type='checkbox' value = "c" onChange={() =>handleCheckBox }/>
      <span>{txt}</span>
      <img onClick = {handleEdit} src={img} className='h-10 w-10 ' alt='edit'/>
      <img onClick = {handleDelete} src='/delete.png' className = 'h-10 w-10' alt='delete'/>
    </div>
  )
}

export default Todo
