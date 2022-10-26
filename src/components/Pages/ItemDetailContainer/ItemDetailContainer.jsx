import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../../components/ItemDetail/ItemDetail";
import {gFetch} from "../../../helpers/gFetch";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {idProducto} = useParams();
    useEffect(() => { 
        gFetch() //simulacion de fetch, mock
        .then(resSiguiente => setProducto(resSiguiente.find(producto => producto.id === idProducto)))
        .catch(err => console.log(err))
        //.finally(() => setLoading(false)) 
    }, []);
    //estados
    //useEffect llamando a la api mock
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer;