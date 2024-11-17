import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { getItems, getCategoryItems } from "../firebase/db"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    //const value = useContext(cartContext)

    useEffect(() => {
        /*         const url = 'https://dummyjson.com/products/'
                const urlCategory = `https://dummyjson.com/products/category/${id}`
        
                fetch(id ? urlCategory : url)
                    .then(res => res.json())
                    .then(res => setItems(res.products)) */
        if (!id) {
            getItems()
                .then(res => setItems(res))
        } else {
            getCategoryItems(id)
                .then(res => setItems(res))
        }
    }, [id])

    return (
        <>
            {items.length > 0 ? <ItemList items={items} /> : <Loader />}
        </>
    )
}

export default ItemListContainer