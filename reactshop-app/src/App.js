import './App.css';
import NavBar from './components/NavBar';
import ItemDetailConteiner from './components/ItemDetail'
import ItemListContainer from './containers/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';


function App() {

  const categorias = ["Marcas", "NBA", "Jordan", "Hombre", "Mujer",]

  return (
    <BrowserRouter>
    <NavBar 
    categorias={categorias} />
    <ItemListContainer greeting={"Hola Bienvenido a Nike"}/>
    <Routes/>
    </BrowserRouter>
  );
}

export default App;
