import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addVal = ()=>{
    if(count<20){
      count = count + 1
      setCount(count)
    }
    else{
      alert("Es se jyada nahi badhega mitterrr")
    }
  }
  const removeVal = ()=>{
    if(count>0){  
      count = count - 1
      setCount(count)
    }
    else{
      alert("Es se kam nahi hoga Mitterr")
    }
  }
  return (
    <>
            <div className='bg-gray-600 p-5 rounded-xl'>
                <h2 className='bg-red-600 p-3 rounded-xl text-2xl'>Welcome to Tailwindcss</h2>
                <p className='bg-gray-200 text-black p-3 font-semibold text-xl mt-3 mb-3 rounded-md'>Count = {count}</p>
                <button onClick={addVal} className='bg-green-600 m-3 border-none outline-none hover:bg-green-700 transition-all duration-300 hover:border-none focus:outline-none'>Add Counter</button>
                <button onClick={removeVal} className='bg-red-600 m-3 border-none outline-none hover:bg-red-700 transition-all duration-300 hover:border-none focus:outline-none'>Remove Counter</button>
            </div>
    </>
  )
}

export default App
