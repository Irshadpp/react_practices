// import React, { useCallback, useState } from 'react'
// import './App.css'

// import { useDispatch, useSelector } from "react-redux"
// import { decrement, increment } from "./utils/counterSlice";
// import {useState} from 'react'
import Body from "./components/Body";

//  Item = ({ item, onClick }) => {
//   console.log(`Rendering ${item}`);
//   return (
//     <div>
//       {item}
//       <button onClick={() => onClick(item)}>Click</button>
//     </div>
//   );
// };


// const Item = 

// function App() {
//   const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
//   const [count, setCount] = useState(0)

//   // const handleClick = useCallback((item)=>{
//   //   console.log(`handle click ${item}`)
//   // },[]);

//   const handleClick = (item) =>{
//     console.log('item function is called'+item);
//   }
  
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Re-render</button>
//       {items.map((item, index)=>(
//         <Item key={index} item={item} onClick={handleClick}></Item>
//       ))}
//     </div>
//   )
// }

// export default App


const App = () => {
  // const {count} = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // const [intervalId, setIntervalId] = useState(null);

  // const handleInc = () =>{
  //   if(intervalId){
  //     clearInterval(intervalId)
  //   }
  //     const newIntervalId = setInterval(()=>{
  //     dispatch(increment());
  //   },500)
  //   setIntervalId(newIntervalId)
  // }

  // const handleDec = () =>{
  //   if(intervalId){
  //     clearInterval(intervalId)
  //   }
  //   const newIntervalId = setInterval(()=>{
  //     dispatch(decrement());
  //   },500)
  //   setIntervalId(newIntervalId)
  // }
  return (
    <div>
      <Body/>
    </div>
  )
}

export default App
