import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const reset = useCallback(()=>{
    setCount(0)
  })

  
  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={()=>setCount(count+1)}
      >increment</button>
      <button
      onClick={()=>setCount(count-1)}
      >decrement</button>
      <button
      onClick={()=>reset()}
      >reset</button>
    </div>
  )
}

export default App
