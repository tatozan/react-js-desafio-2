
import { gFetch } from '../../../helpers/gFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../../ItemList/ItemList"

import './ItemListContainer.css';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    //const [loading, setLoading] = useState(true);
    const {idCategoria} = useParams();
    useEffect(() => {
        if(idCategoria){
            gFetch() //simulacion de fetch, mock
            .then(resSiguiente => setProductos(resSiguiente.filter(producto => producto.categoria === idCategoria)))
            .catch(err => console.log(err))
            //.finally(() => setLoading(false))
        } else {
            gFetch() //simulacion de fetch, mock
            .then(resSiguiente => setProductos(resSiguiente))
            .catch(err => console.log(err))
            //.finally(() => setLoading(false))
        }

        
    }, [idCategoria]);

    return (
        <div>
            <h2></h2>
            <ItemList productos={productos} />

        </div>
    );
}

export default ItemListContainer;

