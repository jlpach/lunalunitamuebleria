/* eslint-disable react/prop-types */
import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = item => setCart([...cart, item])

    const clearCart = () => setCart([])

    const removeCartItem = (id) => {
        setCart(cart.filter(item => item.id != id))
        getTotal()
    }

    const getQuantity = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    const getTotal = () => {
        const priceOnly = cart.map(item => item.price * item.qty)
        const total = priceOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeCartItem, clearCart, getQuantity, getTotal }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider