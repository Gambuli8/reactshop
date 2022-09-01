//rafce => funcion flecha
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        
        <div>
            <div className="container-fluid">
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
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>
        </>
)
}

export default NavBar