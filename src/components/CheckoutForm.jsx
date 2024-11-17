import { useCart } from "../context/CartContext"
import { Form, Button, Container, Row } from "react-bootstrap"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function CheckoutForm() {
    const { cart, getTotal, clearCart } = useCart()
    const navigate = useNavigate()

    const handleOrder = async (e) => {
        e.preventDefault()

        const form = e.target
        const [name, email, phone] = form

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        const orderId = await createOrder(order)

        if (orderId != -1) {
            Swal.fire("Su compra ha sido exitosa. \nFavor de guardar su numero de compra: " + orderId)
            clearCart()

            return navigate("/")
        }
    }
    return (
        <Container fluid className="justify-content-center mt-5 col-lg-10 col-md-8 col-auto">
            <Form onSubmit={handleOrder}>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Jose Pacheco" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="9991189473" />
                        <Button type="submit" className="mt-5" variant="primary">Comprar</Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}

export default CheckoutForm