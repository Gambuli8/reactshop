import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "../../data/productos";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import './styles.css';


const ItemListContainer = ({greeting}) => {

    const [products, setproducts] = useState([])
    
    useEffect(()=> {
        ( async()=> {
        const obtenerproductos = new Promise ((accept, reject)=> {
            setTimeout(()=> {
                accept(productos)
            }, 50000);
        })

        try {
            const response = await obtenerproductos;
            setproducts(response);
        } catch (error) {
            console.log(error);
            console.log("hubo un error");
        }

        })()

    }, [])
    console.log(productos);
    
    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
    }

    return (
        <div className="Item-List-Container">
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={8} onAdd={agregarAlCarrito}/>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer