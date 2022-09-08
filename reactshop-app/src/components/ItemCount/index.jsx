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
        if (count > stock) {
            setCount(count-1);
        }
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(()=> {
        console.log("se actualiza el estado!");
    }, [count]);

    return (
    <div>  
        <button id='menos' onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button id='mas' onClick={handleAdd}>+</button>
        <button onClick={addCart}>agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
