import imagenProyecto1 from "../../assets/images/1.jpg"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemDetail = ({producto}) => {

    return (
        <Container className='mt-5' >
            <Row>
                    <Col md="auto"><Card.Img variant="top" src={producto.img} style={{ width: '20rem'}}/></Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{producto.name}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify'}}>{producto.description}</Card.Text>
                        </Card.Body>
                    </Col>
                
            </Row>
        </Container>
    )
}

export default ItemDetail;