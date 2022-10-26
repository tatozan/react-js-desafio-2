import { useState } from 'react';
import Item from "../Item/Item";    

import "./ItemList.css"

//const [loading, setLoading] = useState(true);
const ItemList = ({productos}) => {
    return (
        <>
            { productos.map(producto =>     
                <Item key={producto.id} producto={producto} />                            
                )
            }
        </>
    )
}

export default ItemList