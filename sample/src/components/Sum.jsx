import React, { useMemo, useState } from 'react'

const Sum = () => {
    console.log('rendering component......')
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    const sum = useMemo(()=>{
        console.log('calculating sum......', numbers)
        numbers.reduce((acc,crr)=>{
            return acc += crr
        },0)
    },[numbers]);

    const addNumber = (()=>{
        setNumbers([1,2,3,4,5,6]);
        console.log(numbers);
    })
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Re-render</button>
      <button onClick={addNumber}>Calculate sum</button>
    </div>
  )
}

export default Sum
