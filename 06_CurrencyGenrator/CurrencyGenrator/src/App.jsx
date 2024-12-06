import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [inputVal, setInputVal] = useState(0)
  const [outputVal,setOutputVal] = useState(0)
  const [inputCurrency , setInputCurrency] = useState('IND')
  const [outputCurrency, setOutputCurrency] = useState('USD')

  const currency = {
     'USD': {
         'IND' : 84.38,
         'PKR' : 277.49
     },
     'IND' : {
         'USD' : 0.011,
         'PKR' : 3.28
     },
     'PKR' : {
         'IND' : 0.304,
         'USD' : 0.0036
     }
    } ; // object inside object 
    //we just need to print keys of object 

    const currencyArr = Object.keys(currency)

    useEffect(() => {
      if(inputCurrency && outputCurrency && inputCurrency !== outputCurrency){
        let conversionRate = currency[inputCurrency][outputCurrency]
        let Result = (inputVal * conversionRate).toFixed(2)
        setOutputVal(Result)
      }
      else setOutputVal(inputVal)

    },[inputCurrency,inputVal , outputCurrency])

  return (
    <>
      <div className='container'>
        <div>
        <label > Amount: 
        <input id = 'inputdata' type='number' value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder='Enter Amount' />
        </label>
 
        <label> From : 
        <select value = {inputCurrency} onChange = {(e) => setInputCurrency(e.target.value)} >
          {
            currencyArr.map((data,idx) => (
              <option key={idx} value={data} >{data} </option>
            ))
          }
        </select>
        </label>

        </div>
        <div>
        <label > Convert Amount: 
        <input id = 'outputdata' type='number' value={outputVal} readOnly />
        </label>

        <label>To:
        <select value = {outputCurrency} onChange = {(e) => setOutputCurrency(e.target.value)}>
          {
            currencyArr.map((data,idx) => (
              <option  key={idx} value={data}>{data} </option>
            ))
          }
        </select>
        </label>
        </div>
      </div>
    </>
  )
}

export default App
