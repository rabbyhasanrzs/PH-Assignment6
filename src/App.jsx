import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productsData from './products.json';

const App = () => {
  const [view, setView] = useState('products');
  const [cart, setCart] = useState([]);

  // --- Logic Functions ---
  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        theme: "colored"
      });
    } else {
      toast.info(`${product.name} is already in your cart.`);
    }
  };

  const removeFromCart = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
    toast.error("Item removed from cart.", { position: "bottom-right" });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.success("Checkout successful! Your cart is now empty.", {
      icon: "🚀"
    });
    setView('products');
  };

     return (
          );
};
export default App;