import React from "react";
import './styles.css';

const CartWidget = () => {
    return (
        <div style={{
            width:"70px",
            height:"70px",
        }}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </div>
    )
}

export default CartWidget