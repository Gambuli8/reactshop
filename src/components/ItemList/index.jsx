import React from 'react'
import Item from '../item'
import './stilo.css';

const ItemList = ({products}) => {
    return (
        <div className='item-container'>
        {products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        }
    </div>
    )
}

export default ItemList