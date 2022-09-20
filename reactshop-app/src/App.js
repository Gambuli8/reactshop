import './App.css';
import NavBar from './components/NavBar';
import ItemDetailConteiner from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import classCondicion from './components/classbasedCondicion';


function App() {

  //const categorias = ["Marcas", "NBA", "Jordan", "Hombre", "Mujer",]

  return (
    <>
    <classCondicion condicion={true}/>
    <BrowserRouter>
    <NavBar/> 
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:productId' element={<ItemDetailConteiner/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
