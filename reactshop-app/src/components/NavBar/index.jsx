//rafce => funcion flecha
import React from 'react';
import { useState } from 'react';
import CartWidget from '../CartWidget';
import './stilo.css';
import Select from '../seleccionar';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    //nombre de estado 
    const [navColor, setNavColor] = useState("white")

    const onChangeColor = (event) => {
        const Color = event.target.value;
        setNavColor(Color)
    }
    console.log(navColor);

    return (
        <>
        <div>
            <nav className="navbar">
            <ul style={{
                backgroundColor: navColor
            }}>
                <CartWidget/>
            <Select handlecolor={onChangeColor}/>
                <input type="text" className='buscador' placeholder='Buscar'/>
                <li className="lista">
                    <Link to="/category/Marcas" className="palabra">MARCA</Link>
                </li>
                <li className="lista">
                    <Link to="/category/Mujer" className="palabra">MUJER</Link>
                </li>
                <li className="lista">
                    <Link to="/category/Hombre" className="palabra">HOMBRE</Link>
                </li>
                <li className="lista">
                    <Link to="/category" className="palabra">CATEGORIAS</Link>
                </li>
                <li className="lista">
                    <Link to="/" className="palabra">HOME</Link>
                </li>
            </ul>
            </nav>
        </div>
        </>
    );
};

export default NavBar