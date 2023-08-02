import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from './pages/Product'
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/Products/:cat" element={<ProductList/>} />
      <Route path="/Product/:id" element={<Product/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />

    </Routes>
    )
}

export default App