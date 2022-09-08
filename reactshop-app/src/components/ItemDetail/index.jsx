import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({productos}) => {
  return (
    <div>
        <h1>{productos.title}</h1>
        <img src={productos.image} alt="product-detail"/>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail