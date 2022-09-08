import React from 'react';
import './styles.css';

const Item = ({productos})=> {



  return (
    <h1>{productos.name} </h1>
  )
}

export default Item