import './App.css';
import NavBar from './components/NavBar';
import ItemDetailConteiner from './components/ItemDetail';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const categorias = ["Marcas", "NBA", "Jordan", "Hombre", "Mujer",]

  return (
    <BrowserRouter>
    <NavBar categorias={categorias} /> 
    <ItemListContainer greeting={"Hola Bienvenido a Nike"} /> 
    
    <ItemDetailConteiner/>
    </BrowserRouter>
  )
}

export default App;
