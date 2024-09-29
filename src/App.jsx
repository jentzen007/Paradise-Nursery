import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Only one BrowserRouter here
import Home from './Home';
import Cart from './Cart';
import Landing from './Landing';

function App() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (plant) => {
    const existingPlant = cart.find((item) => item.name === plant.name);
    if (existingPlant) {
      setCart(
        cart.map((item) =>
          item.name === plant.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Checkout logic
  const checkout = () => {
    alert("Thank you for your purchase!");
    setCart([]);
  };

  return (
      <Routes>
        {/* Home page route */}
        <Route
          path="/" element={<Landing />} />
          <Route
          path="/home"
          element={<Home cart={cart} addToCart={addToCart} />}
        />

        {/* Cart page route */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              checkout={checkout}
            />
          }
        />
      </Routes>
  );
}

export default App;
