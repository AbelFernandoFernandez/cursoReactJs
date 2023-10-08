import "../src/components/NavBar/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            {/* <Route path="/"element={<ItemListConteiner greeting="BIENVENIDOS A QUE TODO FLUYA" />}/> */}
            <Route path="/" element={<ItemListConteiner />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListConteiner />}
            />
            <Route path="/item/:itemId" element={<ItemDetailConteiner />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
