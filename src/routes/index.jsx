import React from 'react'
import NavBar from '../components/NavBar';
import ItemDetailConteiner from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Cart from '../containers/CartContainer';

const routess = () => {
    return (
    <BrowserRouter>
        <NavBar/> 
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailConteiner/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default routess