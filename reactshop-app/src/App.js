import './App.css';
import NavBar from './components';

function App() {

  let numerodeclase = 3

  return (
    <>
    <NavBar/>
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
