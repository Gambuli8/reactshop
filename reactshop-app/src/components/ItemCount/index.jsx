import React, { useState, useEffect } from 'react';
import './style.css';

    const ItemCount  = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count< stock) {
            setCount(count+1);
        } else{
            alert("no hay suficiente stock");
        }
    }

    const handleDecrement = 

    useEffect(()=> {
        console.log("se monto el itemcount");
    }, [])

    return (
    <div>  
        <h2>{count}</h2>
        <button id='mas' onClick={handleAdd}>+</button>
    </div>
    )
}

export default ItemCount;
