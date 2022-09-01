import React from 'react'
import Item from '../item/item'

const ItemList = ({products})=> {
    return (
    <div>
        {products.map(products => {
            return <Item key={products.id} products={products}/>
        })}
    </div>
    )
}

export default ItemList