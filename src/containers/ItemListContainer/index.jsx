import React from "react";
import { useState } from "react";
import './styles.css';
import { useEffect } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = ({greeting}) => {

    const [ productos ,setproducts] = useState([]);

    const {categoryId} = useParams();

    //console.log(categoryId);

    useEffect(() => {
        (async ()=> {
        try {
                const q = categoryId ?
                query(collection(db, "products"),  where("category", "==", categoryId))
                :
                query(collection(db, "products"));
                const productosfirebase = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productosfirebase.push({ id: doc.id, ...doc.data()})
        });
            setproducts(productosfirebase)
        } catch (error) {
            console.log(error);
        }
    })()
    }, [categoryId]) 

    console.log(productos);

    return (
        <div className="Item-List-Container">
            <h1 className="titulo">Bienvenido a Nike AR</h1>
            <ItemList products={productos}/>
        </div>
    )
}

export default ItemListContainer