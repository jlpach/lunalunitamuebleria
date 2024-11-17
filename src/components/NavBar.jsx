import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src="./public/favicon.png" alt="Logo" width="50" height="44" className="d-inline-block align-text-top" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/category/Mesas'}>Mesas</Nav.Link>
                            <Nav.Link as={Link} to={'/category/Sillas'}>Sillas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>

            </Navbar>
        </>
    )
}

export default NavBar