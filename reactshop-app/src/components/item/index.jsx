import React from 'react';
import './styles.css';
import 'bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({product})=> {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
      <div className='card' onClick={handleNavigate}>
        <div id='name'>{product.title}</div>
        <br />
        <img id='imagen' src={product.image} alt="remera"/>
        <br />
        <div id='descripcion'>{product.description}</div>
        <br />
        <br />
        <div id='precio'>${product.price} </div>
      </div>
  )
}

export default Item;