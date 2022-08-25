import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const categorias = ["genero", "NBA", "Jordan"]

  return (
    <>
    <NavBar 
      categorias={categorias}/>
    
    <ItemListContainer greeting={"Hola Bienvenido a Nike"}/>
    </>
  );
}

export default App;
