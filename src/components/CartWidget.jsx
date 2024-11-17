import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { useCart } from "../context/cartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const { getQuantity } = useCart()
    return (
        <Link to='/cart' type="button" className="btn btn-primary position-relative">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getQuantity()}
                <span className="visually-hidden">unread messages</span>
            </span>
        </Link>
    )
}