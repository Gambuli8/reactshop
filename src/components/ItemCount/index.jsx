import React, { useState, useEffect } from 'react';
import './style.css';

    const ItemCount  = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else{
            alert("no hay suficiente stock");
        }
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(()=> {
        console.log("se actualiza el estado!");
    }, [count]);

    return (
    <div id='botones'>  
        <h2>{count}</h2>
        <button id='menos' onClick={handleDecrement}>-</button>
        <button id='mas' onClick={handleAdd}>+</button>
        <br />
        <button id='agregar' onClick={addCart}>agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
