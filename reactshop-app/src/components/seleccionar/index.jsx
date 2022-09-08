import React from "react";
import './style.css';

const Select = ({handleColor}) => {
    return (
        <select name="navColor" id="navColor" onchange={handleColor}>
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="white">default</option>
        </select>
    );
};

export default Select;