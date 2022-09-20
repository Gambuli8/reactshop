//rafce => funcion flecha
import React from 'react';
import CartWidget from '../CartWidget';
import './stilo.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
        <div>
            <nav className="navbar">
            <ul>
                <CartWidget/>
                <input type="text" className='buscador' placeholder='Buscar'/>
                <li className="lista">
                    <Link to="/category/electronics" className="palabra">Electronica</Link>
                </li>
                <li className="lista">
                    <Link to="/category/women's clothing" className="palabra">MUJER</Link>
                </li>
                <li className="lista">
                    <Link to="/category/men's clothing" className="palabra">HOMBRE</Link>
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