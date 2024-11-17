import { useCart } from "../context/CartContext"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function Cart () {
    const { cart, getTotal } = useCart()

    return (
        <div>
            {cart.map(prod => (
                <div key={prod.id}>
                    <Card>
                        <Card.Header as="h5"></Card.Header>
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>
                                {prod.description}
                            </Card.Text>
                            <Card.Text>
                                Cantidad: {prod.qty}
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </div>
            ))}
            <div>
                <h5>Total: {getTotal()}</h5>
                <Link to="/CheckoutForm" type="button" className="btn btn-primary position-relative">Completar la compra</Link>
            </div>
        </div>
    )
}

export default Cart