'use client';

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  // State to track cart items
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Example product list
  const products = [
    { id: 1, name: "AirPods", description: "High-quality sound", price: 20, imageUrl: "/image/vin.jpg" },
    { id: 2, name: "Smart Watch", description: "Stay connected on the go", price: 30, imageUrl: "/image/pakku.jpg" },
    { id: 3, name: "Shoes", description: "Comfortable and stylish", price: 50, imageUrl: "/image/dedly2.jpg" },
    { id: 4, name: "Jacket", description: "Durable winter wear", price: 40, imageUrl: "/image/sai.jpg" },
    { id: 4, name: "power bank", description: "comfort", price: 15, imageUrl: "/image/vinnu.jpg" },
    
  ];

  return (
    <>
      {/* Header */}
      <Header cart={cart} />

      {/* Main Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Welcome to <span className="text-blue-600">Meesho</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            Start your business today by selling quality products at wholesale prices.
          </p>
          <Hero />
        </section>

        {/* Products Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            🌟 Our Products
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg text-green-600 font-semibold">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-black px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart */}
        <section className="mt-16 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            🛒 Your Cart
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-2">
                  <span className="text-gray-700 font-medium">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="text-green-600 font-semibold">
                    ${item.quantity * item.price}
                  </span>
                </div>
              ))}

              <div className="flex justify-between border-t pt-4 mt-4 text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>
                  $
                  {cart.reduce((total, item) => total + item.quantity * item.price, 0)}
                </span>
              </div>
              <div className="text-right mt-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}