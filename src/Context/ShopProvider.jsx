import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({Children}) => {
    
    const [cart, setcart] = useState([])

    const AddItem = (item) => {

        const productrepetido = isInCart(item.id);
        console.log(productrepetido);
        if (productrepetido) {
            const cartmodifed = cart.map(product => {
                if (product.id === item.id) {
                    product.qty += product.qty
                    return product
                }
                return product
            })
            setcart(cartmodifed);
        }else {
            const cartmodificado = [...cart, item]
            setcart(cartmodificado)
        }
    }
    
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removerItem = (item) => {
        const igual = isInCart(item.id)
        if (igual) {
            const eliminarItem = cart.find(product => product.id === item.id) 
            const item = cart.indexOf(eliminarItem)
            cart.splice(item,1)
            console.log(cart);
        } else {
            console.log('no se encuentra el elemento en el carrito');
        }
    }

    return (
        <ShopProvider value={{ cart, AddItem, removerItem}}>
        {Children}
        </ShopProvider>
    )
}

export default ShopProvider;

