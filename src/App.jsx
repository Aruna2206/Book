import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    if (!cartItems.find((item) => item.id === book.id)) {
      setCartItems([...cartItems, book]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/book/:id"
          element={<BookDetails addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
