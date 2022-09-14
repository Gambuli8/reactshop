import React from 'react';
import './styles.css';
import 'bootstrap';
import ItemCount from '../ItemCount';

const Item = ({product})=> {
  return (
    <div className='cards'>
      <div className='card'>
        <div id='name'>{product.title}</div>
        <br />
        <img id='imagen' src={product.image} alt="remera"/>
        <br />
        <div id='descripcion'>{product.description}</div>
        <br />
        <br />
        <div id='precio'>${product.price} </div>
      </div>
    </div>
  )
}

export default Item;