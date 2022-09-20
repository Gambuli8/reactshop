import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    console.log(productId);

    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregaron ${cantidad} productos al carrito!`);
        }

    //Gestionar la obtención de la data del detalle
    useEffect(()=> {
        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    console.log(productDetail);

    return (
        <div>
            <ItemDetail product={productDetail}/>
        <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
        </div>

    )
};

export default ItemDetailContainer;
