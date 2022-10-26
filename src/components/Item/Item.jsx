import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

import "./Item.css";

const Item = ({producto}) => {
  return (
    <div>    
        <Card key={producto.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                    {producto.description}
                </Card.Text>
                <Button variant="primary"> <Link to={`/detalle/${producto.id}`}> Ver detalle </Link> </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item;