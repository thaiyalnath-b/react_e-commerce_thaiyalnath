import React, { useEffect, useState } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const LOCALSTORAGE = "Shoesea";

const App = () => {
  
  const [cart, setCart] = useState(() => {


    try {
      const raw = localStorage.getItem(LOCALSTORAGE);
      return raw ? JSON.parse(raw) : [];
    }
    catch (e) {
      console.error("Failed to read cart from localstorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCALSTORAGE, JSON.stringify(cart));
    }
    catch (e) {
      console.error("Failed to save cart to localstorage", e);
    }
  }, [cart]);


  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const front = prev.findIndex(p => p.id === product.id);
      if (front === -1) {
        return [...prev, { ...product, quantity: qty }];
      }
      else {
        const next = [...prev];
        next[front] = { ...next[front], quantity: next[front].quantity + qty };
        return next;
      }
    });
  };

  const setQuantity = (productId, qty) => {
    setCart(prev => {
      if (qty <= 0) return prev.filter(p => p.id !== productId);
      return prev.map(p => (p.id === productId ? { ...p, quantity:qty} : p));
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.flatMap(p => {
        if(p.id !== productId) return[p];
        const newQty = p.quantity + delta;
        if(newQty <= 0) return [];
        return [{...p, quantity: newQty}];
      });
    });
  };

  const removeFromCart = (productId)=> {
    setCart(prev => prev.filter(p => p.id !== productId));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((s, it) => s + (it.quantity || 0), 0)
  return (
    <>
      <header>
        <Navbar cartCount={cartCount} />
      </header>
      <main className="container-fluid p-0 m-0">
        <Outlet context={{ cart, addToCart, updateQuantity, setQuantity, removeFromCart, clearCart }} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
