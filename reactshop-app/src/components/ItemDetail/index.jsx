import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {

  return (
    <div>
        <h1>detalle del producto</h1>
        <image src={product} alt="imagen" />
        <p>{product}</p>
          <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default ItemDetail