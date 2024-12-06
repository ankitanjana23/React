import { useCallback, useState ,useEffect, useRef} from 'react'

function App() {
  const [pass, setPass] = useState('')
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharactorAllowed, setCharactorAllowed] = useState(false)

  const handleChanges = useCallback(()=>{

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = "";

    if(NumberAllowed) str += "123456789" 
    if(CharactorAllowed) str += "~`!@#$%^&*()_+-={}[];'" 

    for(let i = 0 ;i<length ; i++){
        const code = Math.floor((Math.random()*str.length))
        pass += str.charAt(code)
    }
    setPass(pass)

  },[length,NumberAllowed,CharactorAllowed,setPass])


  //if you just reload your And you need to perform changes so just use useEffect 
  useEffect(()=>{
    handleChanges()
  },[length,NumberAllowed, CharactorAllowed,setPass])

  function CopyToClipboard() {
      window.navigator.clipboard.writeText(pass) ;  //this is a way to access your clipboard 
      //You also need to select this text so just need useRef to take referce than select 
      passRef.current.select()
      inputRef.current.setSelectionRange(0, pass.length) 
  }

  let passRef = useRef(null)

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='text-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
          <h1 className='text-green-600 font-bold text-4xl mb-6'>Password Generator</h1>

          <div className='flex items-center mb-4'>
            <input
              type='text'
              readOnly
              value={pass}
              ref={passRef}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
              placeholder='Generated password will appear here'
            />
            <button
              onClick={handleChanges}
              className='ml-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition'
            >
             Genrator </button>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Password Length:</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
              min="4"
              max="32"
            />
          </div>

          <div className='flex items-center justify-between mb-4'>
            <label className='flex items-center text-gray-700 font-medium'>
              <input
                type="checkbox"
                checked={NumberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className='mr-2'
              />
              Include Numbers
            </label>
            <label className='flex items-center text-gray-700 font-medium'>
              <input
                type="checkbox"
                checked={CharactorAllowed}
                onChange={() => setCharactorAllowed(!CharactorAllowed)}
                className='mr-2'
              />
              Include Special Characters
            </label>
          </div>

          <button
            onClick={CopyToClipboard}
            className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition'
          >
            COPY TO CLIPBOARD
          </button>
        </div>
      </div>
    </>
  )
}

export default App
