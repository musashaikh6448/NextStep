import React, { useState } from "react";
import { motion } from "framer-motion";
import store1 from "../images/NextStep-tshirt-1.png";
import store2 from "../images/NextStep-cup.png";
import store3 from "../images/NextStep-cap.png";
import store4 from "../images/NextStep-notebook.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Store: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [points, setPoints] = useState(1000);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium T-Shirt",
      description: "High quality cotton t-shirt with logo",
      price: 500,
      image: store1,
    },
    {
      id: 2,
      name: "Coffee Mug",
      description: "Ceramic mug with special design",
      price: 300,
      image: store2,
    },
    {
      id: 3,
      name: "Caps",
      description: "Comes in black or white",
      price: 200,
      image: store3,
    },
    {
      id: 4,
      name: "Premium Notebook",
      description: "Hardcover 120-page notebook",
      price: 400,
      image: store4,
    },
  ];

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const removeItemCompletely = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cancelOrder = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = () => {
    const total = calculateTotal();
    if (total <= points) {
      setPoints(points - total);
      setCart([]);
      alert("Purchase successful! Your items will be shipped soon.");
    } else {
      alert("You don't have enough points for this purchase.");
    }
  };

  return (
    <div className="space-y-8 md:space-y-16 py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Store Header */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-2 md:mb-4"
        >
          Store
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Redeem your points for awesome swag
        </motion.p>
      </section>

      {/* Points Display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-base md:text-lg font-semibold">
            Your Points: <span className="text-green-500">{points.toLocaleString()}</span>
          </p>
        </div>
      </motion.div>

      {/* Products Grid - 2 columns on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col h-full">
              {/* Image container with fixed aspect ratio */}
              <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-2 md:mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-2 md:mb-3">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-green-500 font-medium text-base md:text-lg mb-2 md:mb-3">
                  {product.price} points
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className={`w-full py-1 md:py-2 px-3 rounded-lg text-xs md:text-sm ${
                    points >= product.price
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={points < product.price}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
          Your Cart {cart.length > 0 && `(${cart.reduce((acc, item) => acc + item.quantity, 0)})`}
        </h3>
        
        {cart.length === 0 ? (
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Add some items to get started!
          </p>
        ) : (
          <div>
            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.price} pts × {item.quantity} = {item.price * item.quantity} pts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs p-1 w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-sm w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="text-xs p-1 w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeItemCompletely(item.id)}
                      className="text-xs p-1 w-6 h-6 flex items-center justify-center bg-red-100 dark:bg-red-900 rounded-md hover:bg-red-200 dark:hover:bg-red-800 text-red-600 dark:text-red-300"
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-green-500">{calculateTotal()} points</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={cancelOrder}
                  className="py-2 px-4 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel Order
                </button>
                <button
                  onClick={checkout}
                  className={`py-2 px-4 rounded-lg font-medium ${
                    calculateTotal() <= points
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={calculateTotal() > points}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Footer Note */}
      <div className="text-center text-xs md:text-sm text-gray-400 dark:text-gray-500">
        Items ship within 2-3 weeks. All sales final.
      </div>
    </div>
  );
};

export default Store;