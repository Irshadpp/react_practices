import React, { useCallback, useState } from 'react'
import './App.css'

 Item = ({ item, onClick }) => {
  console.log(`Rendering ${item}`);
  return (
    <div>
      {item}
      <button onClick={() => onClick(item)}>Click</button>
    </div>
  );
};


const Item = 

function App() {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
  const [count, setCount] = useState(0)

  // const handleClick = useCallback((item)=>{
  //   console.log(`handle click ${item}`)
  // },[]);

  const handleClick = (item) =>{
    console.log('item function is called'+item);
  }
  
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Re-render</button>
      {items.map((item, index)=>(
        <Item key={index} item={item} onClick={handleClick}></Item>
      ))}
    </div>
  )
}

export default App
