//rafce => funcion flecha
import React from 'react';
import './stilo.css';

const NavBar = (propiedades) => {
    console.log(propiedades);
    return (
        <div>
            <nav className="navbar">
            <div>
            <ul className="">
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
            </div>
        </nav>
        </div>
)
}

export default NavBar