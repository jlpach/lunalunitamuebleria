/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <Col>
            <Card style={{ width: '18rem' }} className='h-100'>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.category}
                    </Card.Text>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                    <Button
                        variant="primary"
                        as={Link}
                        to={`/item/${item.id}`}
                    >
                        Ver Mas
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    );
}

export default Item