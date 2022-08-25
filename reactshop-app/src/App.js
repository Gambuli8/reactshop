import './App.css';
import NavBar from './components';

function App() {

  let numerodeclase = 3
  const categorias = ["genero", "NBA", "Jordan"]

  return (
    <>
    <NavBar categorias={categorias}/>
    <div className="App">
      <p style={
        {
          color:"red",
          fontsize: "100px",
          margin: "25px",
        }
      }>
      BIENVENIDO a la clase {numerodeclase}
      </p>
      <input placeholder="ingrese comentario"/>

    </div>
    </>
  );
}

export default App;
