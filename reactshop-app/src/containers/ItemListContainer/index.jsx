import React from "react";
import { useState } from "react";
import './styles.css';
import { useEffect } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {

    const [ productos ,setproducts] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);

    useEffect(() => {
        (async ()=> {
        try {
            if (categoryId){
                const response = await fetch('https://fakestoreapi.com/products/category/' + categoryId);
                const productos = await response.json();
                setproducts(productos);
            }
            else{
                const response = await fetch('https://fakestoreapi.com/products');
                const productos = await response.json();
                setproducts(productos);
            }
        } catch (error) {
            console.log(error);
        }
    })()
    }, [categoryId]) 

    console.log(productos);
    
    //const agregarAlCarrito = (cantidad) => {
        //console.log(cantidad);
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