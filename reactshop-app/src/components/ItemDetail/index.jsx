import React from 'react';
import ItemCount from '../ItemCount';
import './stilo.css';

const ItemDetail = ({product}) => {

  return (
    <div className='detail-container'>
        <h1>detalle del producto</h1>
        <img src={product.image} alt="imagen" />
        <div className='detail-subcontainer'>
        <p>{product.title}</p>
        </div>
          <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default ItemDetail