import React from 'react';
import './styles.css';
import 'bootstrap';
import remerajordan from '../../img/remerajordan.jpg';
import airtrainer1 from '../../img/airtrainer1.jpg';
import airforce1mid from '../../img/airforce1mid.jpg';
import nikebillie from '../../img/pantalonnikexbillie.jpg';

const Item = ({product})=> {
  return (
    <div>
      <div className='card'>
        <img src= {remerajordan} alt="product"/>
        {product.name}
      </div>
    </div>
  )
}

export default Item