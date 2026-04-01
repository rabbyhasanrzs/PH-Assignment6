<div align="center">

# ⚡ DigiTools

### *Supercharge Your Digital Workflow*

Premium AI tools, design assets, templates, and productivity software — all in one place.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

![DigiTools Banner](https://placehold.co/900x350/7C3AED/white?text=DigiTools+%E2%80%94+Assignment+6+by+Rabby+Hasan)

</div>

---

## About The Project

**DigiTools** is a modern digital marketplace landing page where users can browse and purchase premium digital products — from AI writing tools and design template packs to automation toolkits and stock assets. It features a clean, responsive UI with a fully functional shopping cart experience.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| **React** | Component-based UI |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Pre-built UI components |
| **React Toastify** | Toast notifications |
| **Vite** | Lightning-fast build tool |
| **JSON** | Product data management |

---

## Features

### 1. Dynamic Shopping Cart
Add and remove products with real-time cart updates. The cart badge on the navbar reflects item count instantly, and a smooth checkout flow clears the cart with a success notification — all powered by React state management.

### 2. Smart Toast Notification System
Every user interaction triggers a contextual toast alert — success when adding items, info when duplicates are detected, and error on removal. Powered by **React Toastify** with position and theme variants for a polished UX.

### 3. Product Catalog from JSON Data
All 6 digital products are dynamically rendered from a `products.json` file. Each card displays tags (Best Seller, New, Popular), pricing period (monthly / one-time), and feature lists — making it trivially easy to add or update products without touching the UI code.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/digitools.git

# Navigate into the project
cd digitools

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Project Structure

```
digitools/
├── src/
│   ├── assets/
│   │   └── banner.png
│   ├── App.jsx          # Main application component
│   └── main.jsx
├── products.json        # Product data
├── index.html
└── package.json
```