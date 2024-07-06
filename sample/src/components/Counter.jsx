import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function handleInc(){
        setCount(count + 1)
    }
    function handleDec(){
        if(count > 0){
            setCount(count - 1);
        }else{
            setCount(0)
        }
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>handleInc()}>Increment</button>
      <button onClick={()=>handleDec()}>Decrement</button>
    </div>
  )
}

export default Counter
