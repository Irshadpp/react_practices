import { useCallback, useState } from "react"
import Item from "./Item"

const Body = () => {
    const [cards, setCards] = useState(['card1', 'card2', 'card3']);
    const [count, setCount] = useState(0)
    // const handleClick = (card) =>{
    //     console.log(card, 'clicked');
    // }
    

    const handleClick = useCallback((card)=>{
        console.log(card, 'clicked');
    },[])
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Re-render</button>
    {
        cards.map((card, index) => <Item key={index} cardItem={card} clickCard={handleClick}/>)
    }
    </div>
  )
}

export default Body
