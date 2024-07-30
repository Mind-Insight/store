import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from "./components/main/MainPage"
import ProductList from './components/productsList/ProductList'
import Cart from './components/cart/Cart'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<MainPage></MainPage>}></Route>
            <Route path="products" element={<ProductList></ProductList>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
