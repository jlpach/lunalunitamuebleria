/* eslint-disable react/prop-types */
import { useState, useContext } from "react"
import { cartContext } from "../context/CartContext"

function ItemCount({detail}) {
    const [count, setCount] = useState(0)
    const {addToCart} = useContext(cartContext)

    const addCount = () => {setCount(count + 1)}
    const subCount = () => {setCount(count - 1)}

    const handleAddToCart = () => addToCart({...detail, qty: count})

    return (
        <div>
            <p>{ count }</p>
            <button onClick={subCount}>-</button>
            <button onClick={addCount}>+</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount