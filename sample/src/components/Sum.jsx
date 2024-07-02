import React, { useMemo, useState } from 'react'

const Sum = () => {
    console.log('rendering component......')
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    const sum = useMemo(()=>{
        console.log('calculating sum......')
        numbers.reduce((acc,crr)=>{
            return acc += crr
        },0)
    },[numbers]) 
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Re-render</button>
    </div>
  )
}

export default Sum
