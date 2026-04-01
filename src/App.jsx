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



          {/* --- BANNER --- */}
          <header className="hero min-h-[80vh] py-16 px-6 md:px-20 bg-white">
            <div className="hero-content flex-col lg:flex-row gap-16 max-w-7xl mx-auto p-0">
              
              {/* Text Content */}
              <div className="text-left w-full lg:w-1/2">
                {/* New Badge */}
                <div className="inline-flex items-center gap-2 bg-[#EEF2FF] px-4 py-1.5 rounded-full mb-8 border border-[#E0E7FF]">
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></div>
                  <span className="text-[#7C3AED] text-sm font-semibold">New: AI-Powered Tools Available</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-[60px] font-bold text-[#1E293B] leading-[1.1] mb-6 tracking-tight">
                  Supercharge Your <br />
                  <span className="text-[#4F39F6]">Digital Workflow</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-500 mb-4 leading-relaxed max-w-lg">
                  Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                
                <p className="text-[#7C3AED] font-semibold mb-10 cursor-pointer hover:underline underline-offset-4">
                  Explore Products
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none px-8 h-[56px] rounded-4xl text-[16px] font-bold normal-case">
                    Explore Products
                  </button>
                  
                  <button className="btn bg-white hover:bg-gray-50 border border-[#7C3AED] text-[#7C3AED] px-8 h-[56px] rounded-4xl text-[16px] font-bold normal-case gap-3">
                    <div className="w-6 h-6 border-2 border-[#7C3AED] rounded-full flex items-center justify-center pl-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-[#7C3AED]" viewBox="0 0 24 24">
                        <path d="M3 22v-20l18 10-18 10z" />
                      </svg>
                    </div>
                    Watch Demo 
                  </button>
                </div>
              </div>

              {/* Banner Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    src="/src/assets/banner.png" 
                    className="w-full h-full object-cover" 
                    alt="Digital Workflow Visual" 
                  />
                </div>
              </div>

            </div>
          </header>



          {/* --- STATS SECTION --- */}
          <section className="bg-[#7C3AED] py-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center text-white">
              
              {/* Active Users */}
              <div className="flex-1 text-center py-6 md:py-0">
                <h2 className="text-5xl font-bold mb-2">50K+</h2>
                <p className="text-lg opacity-90">Active Users</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

              {/* Premium Tools */}
              <div className="flex-1 text-center py-6 md:py-0">
                <h2 className="text-5xl font-bold mb-2">200+</h2>
                <p className="text-lg opacity-90">Premium Tools</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

              {/* Rating */}
              <div className="flex-1 text-center py-6 md:py-0">
                <h2 className="text-5xl font-bold mb-2">4.9</h2>
                <p className="text-lg opacity-90">Rating</p>
              </div>

            </div>
          </section>





      </div>
    );
};
export default App;