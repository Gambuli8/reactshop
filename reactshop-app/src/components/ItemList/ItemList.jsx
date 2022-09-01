import React from 'react'
import { productos } from '../data/productos'
import Item from '../item/item'

const ItemList = ({products})=> {
    return (
    <div>
        {products.map(products => {
            return <Item key={productos.id} productos={productos}/>
        })}
    </div>
    )
}

export default ItemList