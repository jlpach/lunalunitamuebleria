import { useCart } from "../context/CartContext"
import { Form, Button } from "react-bootstrap"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"

function CheckoutForm() {
    const { cart, getTotal } = useCart()

    const handleOrder = (e) => {
        e.preventDefault()

        const form = e.target
        const [name, email, phone] = form

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }
        console.log("inside createOrder", order)
        createOrder(order)
    }
    return (
        <div>
            <Form onSubmit={handleOrder}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Jose Pacheco" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="999-118-9473" />
                    <Button type="submit" variant="primary">Comprar</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default CheckoutForm