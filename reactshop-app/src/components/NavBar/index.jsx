//rafce => funcion flecha
import React from 'react';
import { useState } from 'react';
import CartWidget from '../CartWidget';
import './stilo.css';
import Select from '../seleccionar';


const NavBar = () => {
    
    //nombre de estado 
    const [navColor, setNavColor] = useState("#f3f3f3")

    const onChangeColor = (Event) => {
        const Color = Event.target.value;
        setNavColor(Color)
    }
    console.log(navColor);

    return (
        <>
        <div>
            <nav className='navbar'>
            <div className="">
                <CartWidget/>
            <ul style={{
                backgroundColor: navColor
            }}>
                
                <li className="lista">
                    <a href="/#" className="palabra">HOME</a>
                </li>
                <li className="lista">
                    <a href="/#" className="palabra">CATEGORIAS</a>
                </li>
                <li className="lista">
                    <a href="/#" className="palabra">MARCA</a>
                </li>
                <li className="lista">
                    <a href="/#" className="palabra">HOMBRE</a>
                </li>
                <li className="lista">
                    <a href="/#" className="palabra">MUJER</a>
                </li>
            </ul>
            <Select handlecolor={onChangeColor} />
            </div>
            </nav>
        </div>
        </>
    );
};

export default NavBar