import React from "react";
import './style.css';

const Select = ({handleColor}) => {
    return (
        <Select name="navColor" id="navColor" onchange={handleColor}>
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="#f3f3f3">default</option>
        </Select>
    );
};

export default Select;