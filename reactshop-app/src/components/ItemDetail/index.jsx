import React from 'react';
import ItemCount from '../ItemCount';
import './stilo.css';

const ItemDetail = ({product}) => {

  return (
    <div className='detail-container'>
        <h1 className='titulo-producto'>{product.title}</h1>
        <img className='imagen' src={product.image} alt="imagen" />
        <p className='descripcion'>{product.description}</p>
    </div>
  )
}

export default ItemDetail