import React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import './styles.css';


const ItemListContainer = ({greeting}) => {

    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);;
        console.log('se agrego la cantidad $(cantidad) al carrito');
    }

    return (
        <div className="Item-List-Container">
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer