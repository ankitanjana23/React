import "./App.css";
import {useState,useEffect} from 'react'

function App() {
   
  const [length , setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [character , setCharacter] = useState(false)
  const [password, setPassword] = useState('')


  function handleClick() {
      window.navigator.clipboard.writeText(password)
      alert("Successfully Copy! " + password )
  }

  useEffect(()=>{
    let store = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(character){
      store += '!@#$%^&*()';
    }
    if(number){
      store += '0123456789';
    }

    let res = '' ;
    for(let i =0 ; i<length ;i++){
       let idx = Math.floor(Math.random() * store.length);
       res += store.charAt(idx);
    }
    setPassword(res);
  },[length , number , character])

  return(
    <>
   
    <div className="box">

    <div className="first">
    <input type="text" value={password} onChange={() => setPassword(e.target.value)}/>
    <button onClick={handleClick} > Copy </button>
    </div>

    <div className="second">
    <input type="range" id = "Range" min={6} max={100} value = {length} onChange={(e) => setLength(e.target.value)}/>
    <label htmlFor="Range">Length : {length} </label>

    <input type="checkbox" id = "Number" onChange={(e) => setNumber(e.target.checked)}/>
    <label htmlFor="Number">Number </label>
    <input type="checkbox"  onChange={(e) => setCharacter(e.target.checked)}/>
    <label htmlFor="Charactor"> Charactor </label> 

    </div>
    </div>
    
    </>
  )

}

export default App;