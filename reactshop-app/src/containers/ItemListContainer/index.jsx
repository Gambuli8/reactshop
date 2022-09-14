import React from "react";
import { useState } from "react";
import './styles.css';
import { useEffect } from "react";
import ItemList from "../../components/ItemList";


const ItemListContainer = ({greeting}) => {

    const [ productos ,setproducts] = useState([])



    useEffect(() => {
        ( async()=> {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const productos = await response.json();
            setproducts(productos);
        } catch (error) {
            console.log(error);
        }
    })()
    }, 10000) 

    console.log(productos);
    
    //const agregarAlCarrito = (cantidad) => {
      //  console.log(cantidad);
        //console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
    //}

    return (
        <div className="Item-List-Container">
            <h1 className="titulo">Bienvenido a Nike AR</h1>
            <ItemList products={productos}/>
        </div>
    )
}

export default ItemListContainer