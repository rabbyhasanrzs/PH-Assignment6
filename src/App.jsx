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



          {/* --- MAIN SECTION (PRODUCT & CART) --- */}
          <main className="py-20 px-6 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
              {/* Heading Section */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Premium Digital Tools</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-[15px]">
                  Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                {/* Pill Toggle Buttons */}
                <div className="inline-flex bg-white border border-gray-200 p-1 rounded-full shadow-sm">
                  <button 
                    className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${view === 'products' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'}`}
                    onClick={() => setView('products')}
                  >
                    Products
                  </button>
                  <button 
                    className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${view === 'cart' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'}`}
                    onClick={() => setView('cart')}
                  >
                    Cart ({cart.length})
                  </button>
                </div>
              </div>

              {/* Products View */}
              {view === 'products' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {productsData.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
                      {/* Tag/Badge */}
                      <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-[11px] font-bold ${
                        product.tag === 'Best Seller' ? 'bg-[#FEF3C7] text-[#D97706]' : 
                        product.tag === 'Popular' ? 'bg-[#E0E7FF] text-[#4338CA]' : 
                        'bg-[#DCFCE7] text-[#15803D]'
                      }`}>
                        {product.tag}
                      </div>

                      {/* Icon Circle */}
                      <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-2xl mb-6 shadow-inner">
                        {product.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#1E293B] mb-3">{product.name}</h3>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-6 flex items-baseline">
                        <span className="text-2xl font-bold text-[#1E293B]">${product.price}</span>
                        <span className="text-slate-400 text-sm ml-1 capitalize font-medium">/{product.period}</span>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[13px] text-slate-600 font-medium">
                            <svg className="w-4 h-4 text-[#22C55E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold transition-colors text-[15px]"
                      >
                        {cart.find(item => item.id === product.id) ? "✓ Added to Cart" : "Buy Now"}
                      </button>
                    </div>
                  ))}
                </div>
              )}

          {/* Cart View */}
          {view === 'cart' && (
              <div className="max-w-2xl mx-auto mt-10">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-md">
                  <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Your Cart</h2>

                  {cart.length === 0 ? (
                    <div className="text-center py-16">
                      <p className="text-slate-400 text-lg mb-6">Your cart is empty.</p>
                      <button
                        onClick={() => setView('products')}
                        className="btn bg-[#7C3AED] text-white border-none px-8 rounded-full normal-case font-bold"
                      >
                        Browse Products
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-8">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-2xl px-6 py-4">
                            <div className="flex items-center gap-4">
                              {/* Icon circle like in the screenshot */}
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                                {item.icon}
                              </div>
                              <div>
                                <p className="font-bold text-[#1E293B]">{item.name}</p>
                                <p className="text-slate-400 text-sm">${item.price}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[#7C3AED] font-semibold text-sm hover:text-red-500 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Total */}
                      <div className="flex justify-between items-center mb-6 px-2">
                        <span className="text-slate-500 font-medium">Total:</span>
                        <span className="text-2xl font-black text-[#1E293B]">${totalCost}</span>
                      </div>

                      {/* Checkout Button */}
                      <button
                        onClick={handleCheckout}
                        className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold text-[16px] transition-colors"
                      >
                        Proceed To Checkout
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            </div>
          </main>




          {/* --- STEPS SECTION --- */}
          <section className="py-24 px-6 md:px-20 bg-[#F9FAFC]">
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4">Get Started In 3 Steps</h2>
                <p className="text-slate-500 text-lg">Start using premium digital tools in minutes, not hours.</p>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Step 1 */}
                <div className="relative bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition-shadow text-center group">
                  {/* Step Number Badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-100">
                    01
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                    <svg className="w-10 h-10 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Create Account</h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    Signup for free in seconds. No credit card required to get started.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition-shadow text-center group">
                  <div className="absolute top-6 right-6 w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-100">
                    02
                  </div>

                  <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                    <svg className="w-10 h-10 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Choose Products</h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    Browse our catalog and select the tools that fit your needs.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm hover:shadow-md transition-shadow text-center group">
                  <div className="absolute top-6 right-6 w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-100">
                    03
                  </div>

                  <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                    <svg className="w-10 h-10 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Start Creating</h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    Download and start using your premium tools immediately.
                  </p>
                </div>

              </div>
            </div>
          </section>



          {/* --- PRICING SECTION --- */}
          <section id="pricing" className="py-24 px-6 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4">Simple, Transparent Pricing</h2>
                <p className="text-slate-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                
                {/* Starter Plan */}
                <div className="bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Starter</h3>
                  <p className="text-slate-500 text-sm mb-8">Perfect for getting started</p>
                  <div className="mb-8 flex items-baseline">
                    <span className="text-4xl font-black text-[#1E293B]">$0</span>
                    <span className="text-slate-400 text-lg ml-1 font-medium">/Month</span>
                  </div>
                  <ul className="space-y-4 mb-12 flex-grow">
                    <li className="flex items-center text-[15px] text-slate-600 font-medium gap-3">
                      <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      Access to 10 free tools
                    </li>
                    <li className="flex items-center text-[15px] text-slate-600 font-medium gap-3">
                      <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      Basic templates
                    </li>
                    <li className="flex items-center text-[15px] text-slate-600 font-medium gap-3">
                      <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      Community support
                    </li>
                    <li className="flex items-center text-[15px] text-slate-600 font-medium gap-3">
                      <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      1 project per month
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold transition-colors">
                    Get Started Free
                  </button>
                </div>

                {/* Pro Plan (Highlighted) */}
                <div className="bg-[#7C3AED] rounded-[2rem] p-10 flex flex-col shadow-2xl relative scale-105 z-10">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-5 py-1.5 rounded-full text-[12px] font-black uppercase tracking-tight shadow-md">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <p className="text-purple-100 text-sm mb-8 opacity-80">Best for professionals [cite: 66]</p>
                  <div className="mb-8 flex items-baseline">
                    <span className="text-4xl font-black text-white">$29</span>
                    <span className="text-purple-200 text-lg ml-1 font-medium">/Month</span>
                  </div>
                  <ul className="space-y-4 mb-12 flex-grow">
                    {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feat, i) => (
                      <li key={i} className="flex items-center text-[15px] text-white font-medium gap-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-white text-[#7C3AED] hover:bg-gray-50 rounded-2xl font-bold transition-colors shadow-lg">
                    Start Pro Trial
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Enterprise</h3>
                  <p className="text-slate-500 text-sm mb-8">For teams and businesses</p>
                  <div className="mb-8 flex items-baseline">
                    <span className="text-4xl font-black text-[#1E293B]">$99</span>
                    <span className="text-slate-400 text-lg ml-1 font-medium">/Month</span>
                  </div>
                  <ul className="space-y-4 mb-12 flex-grow">
                    {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feat, i) => (
                      <li key={i} className="flex items-center text-[15px] text-slate-600 font-medium gap-3">
                        <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold transition-colors">
                    Contact Sales
                  </button>
                </div>

              </div>
            </div>
          </section>



          {/* --- CTA SECTION --- */}
          <section className="py-24 px-6 text-center bg-[#7C3AED] text-white">
            <div className="max-w-4xl mx-auto">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready To Transform Your Workflow? 
              </h2>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl mb-4 opacity-90 font-medium">
                Join thousands of professionals who are already using Digitools to work smarter.
              </p>
              <p className="text-lg opacity-90 mb-10">
                Start your free trial today.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button 
                  onClick={() => setView('products')}
                  className="btn bg-white text-[#7C3AED] hover:bg-gray-100 border-none px-10 h-14 rounded-full text-lg font-bold normal-case shadow-lg"
                >
                  Explore Products 
                </button>
                
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#7C3AED] px-10 h-14 rounded-full text-lg font-bold normal-case">
                  View Pricing 
                </button>
              </div>

              {/* Trust Badges / Footer Text */}
              <div className="text-sm opacity-80 font-medium flex flex-wrap justify-center gap-4 md:gap-2">
                <span>14-day free trial</span>
                <span className="hidden md:inline">•</span>
                <span>No credit card required</span>
                <span className="hidden md:inline">•</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </section>





      </div>
    );
};
export default App;