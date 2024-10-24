import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const url = 'https://dummyjson.com/products/'
        const urlCategory = `https://dummyjson.com/products/category/${id}`

        fetch(id ? urlCategory : url)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [id])

    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer