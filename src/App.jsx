import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
/* import './App.css' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkoutform' element={<CheckoutForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App