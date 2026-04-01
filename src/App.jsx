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

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

     return (
      <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      <ToastContainer autoClose={2000} />
          
          {/* --- NAVBAR --- */}
          <nav className="navbar bg-white px-4 md:px-20 py-5 border-b border-gray-50 sticky top-0 z-50 shadow-lg">
            <div className="navbar-start">
              <span className="text-4xl font-extrabold text-[#7C3AED] cursor-pointer tracking-tight" onClick={() => setView('products')}>
                DigiTools
              </span>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-4 text-[16px] font-medium text-slate-700">
                <li><button onClick={() => setView('products')} className="hover:text-[#7C3AED] active:bg-transparent">Products</button></li>
                <li><a href="#features" className="hover:text-[#7C3AED]">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#7C3AED]">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-[#7C3AED]">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-[#7C3AED]">FAQ</a></li>
              </ul>
            </div>

            <div className="navbar-end gap-6">
              {/* Cart Icon */}
              <div className="indicator cursor-pointer mr-2" onClick={() => setView('cart')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm bg-[#7C3AED] text-white border-none indicator-item font-bold">{cart.length}</span>
              </div>


              {/* Login Link */}
              <a className="text-[16px] font-semibold text-slate-700 hover:text-[#7C3AED] cursor-pointer hidden md:block">
                Login
              </a>

              {/* Get Started Button */}
              <button className="btn bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:opacity-90 text-white border-none px-8 rounded-full normal-case text-[16px] font-bold min-h-0 h-12 shadow-md">
                Get Started
              </button>
            </div>
          </nav>




      </div>
    );
};
export default App;