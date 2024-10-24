/* eslint-disable react/prop-types */
import Item from "./Item"
import { Container, Row } from "react-bootstrap"

function ItemList({ items }) {
    return (
        <Container className="mt-5 mb-5">
            <Row sm={1} md={2} lg={3} className="g-4 align-items-stretch">
                {items.map(item =>
                        <Item item={item} key={item.id} />
                )}
            </Row>
        </Container>
    )
}
3
export default ItemList