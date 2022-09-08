import React from "react";
import { useState } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import './styles.css';
import products from "../../data/productos";
import { useEffect } from "react";


const ItemListContainer = ({greeting}) => {

    const [ productos ,setproducts] = useState([])



    useEffect(() => {
        ( async()=> {
        const obtenerproductos = new Promise ((accept, reject)=> {
            setTimeout(()=> {
                accept(products)
            },);
        })

        try {
            const response = await obtenerproductos;
            setproducts(response);
        } catch (error) {
            console.log(error);
        }
        })()
        })  
    console.log(products);
    
    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
    }

    return (
        <div className="Item-List-Container">
            <h1 className="titulo">Bienvenido a Nike AR</h1>
            <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
            <ItemList products={productos}/>
        </div>
    )
}

export default ItemListContainer