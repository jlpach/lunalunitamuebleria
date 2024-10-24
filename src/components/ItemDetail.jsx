/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount"
import { Card, Container } from "react-bootstrap"

function ItemDetail({ detail }) {
    return (
        <>
            <Container className="mt-5 mb-5 d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{detail?.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{detail?.category}</Card.Subtitle>
                        <Card.Text>
                            {detail?.description}
                        </Card.Text>
                        <Card.Text>
                            Precio: {detail?.price}
                        </Card.Text>
                        <Card.Text>
                            Disponibles: {detail?.stock}
                        </Card.Text>
                        <ItemCount />
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ItemDetail
