import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './stilo.css';
import Shop from '../../Context/ShopProvider';

const ItemDetail = ({product}) => {

  const [quantity, setquantity] = useState(0);
  const navigate = useNavigate();

  const {AddItem} = useContext(Shop);

  const addCart = (qty) => {
    setquantity(qty);
  };

    const handleFinish = () => {
      const producttosave = {...product, qty: quantity}
      AddItem(producttosave)
      navigate('/cart');
  };

  console.log(quantity);


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