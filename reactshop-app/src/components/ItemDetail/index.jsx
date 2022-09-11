import React from 'react'
import products from '../../data/productos'
import ItemCount from '../ItemCount'

const ItemDetail = ({products}) => {
  return (
    <div>
        <h1>{products.name}</h1>
        <img src={products.id} alt="product-detail"/>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail