import React from 'react';
import './styles.css';
import 'bootstrap';
import remerajordan from '../../img/remerajordan.jpg';
import ItemCount from '../ItemCount';

const Item = ({product})=> {
  return (
      <div className='card'>
        <div id='name'>{product.name}</div>
        <br />
        <div id='descripcion'>{product.description}</div>
        <br />
        <img src={remerajordan} alt="remera" width={200} height={200} />
        <br />
        <div id='precio'>{product.precio}</div>
        <br />
        <ItemCount initial={1} stock={10}/>
        <br />
      </div>
  )
}

export default Item;