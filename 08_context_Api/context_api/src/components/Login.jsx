import React from 'react'
import { useContext ,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const[username , setUsername] = useState('')
  const[Password , setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleClick = (e)=>{
       e.preventDefault()
       setUser({username, Password})
  }
  
  return (
    <div>
      <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} ></input>
      <input type='text' placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login
