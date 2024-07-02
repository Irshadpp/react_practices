import React from "react"

const Item = React.memo(({cardItem, clickCard}) => {
    console.log(cardItem, 'rendered')
  return (
    <div>
        <button onClick={()=>clickCard(cardItem)}>{cardItem}</button>
    </div>
  )
})

Item.displayName = 'Item'

export default Item
