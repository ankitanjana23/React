import { useEffect ,React} from 'react'
import {useUserData}  from './context/UserContext'

function Login() {
  const {setUser} = useUserData() //call it 
  useEffect(()=>{ 
      setUser('ankit')
  },[setUser])

  return (
    <div>
      Login Page
    </div>
  )
}

export default Login
