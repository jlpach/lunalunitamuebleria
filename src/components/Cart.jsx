import { useCart } from "../context/CartContext"
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function Cart () {
    const { cart, getTotal } = useCart()

    return (
        <Container fluid className="justify-content-center mt-5 col-lg-8 col-md-8 col-10">
            {cart.map(prod => (
                <div key={prod.id}>
                    <Card className="mt-4">
                        <Card.Header as="h5"></Card.Header>
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>
                                {prod.description}
                            </Card.Text>
                            <Card.Text>
                                Precio: {prod.price}
                            </Card.Text>
                            <Card.Text>
                                Cantidad: {prod.qty}
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </div>
            ))}
            <div className="mt-5">
                <h5>Total: {getTotal()}</h5>
                <Link to="/CheckoutForm" type="button" className="btn btn-primary position-relative mt-3 mb-5">Completar la compra</Link>
            </div>
        </Container>
    )
}

export default Cart