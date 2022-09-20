import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './stilo.css';

const ItemDetail = ({product}) => {

  const [quantity, setquantity] = useState(0);
  const navigate = useNavigate();

  const addCart = (quantity) => {

    setquantity(quantity);
  };

    const handleFinish = () => {
      navigate('/cart');
  }


  return (
    <div className='detail-container'>
        <h1 className='titulo-producto'>{product.title}</h1>
        <img className='imagen' src={product.image} alt="imagen" />
        <p className='descripcion'>{product.description}</p>
        {quantity ? (
                    <button onClick={handleFinish}>Finalizar compra</button>
                ) : (
                    <ItemCount stock={10} initial={1} onAdd={addCart} />
                )}
    </div>
  )
}

export default ItemDetail