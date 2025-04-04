import React from "react";
import { motion } from "framer-motion";
import store1 from "../images/NextStep-tshirt-1.png"
import store3 from "../images/NextStep-cap.png"
import store4 from "../images/NextStep-notebook.png"

const Store: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      description: "High quality cotton t-shirt with logo",
      price: 500,
      image:store1,
    },
    {
      id: 2,
      name: "Coffee Mug",
      description: "Ceramic mug with special design",
      price: 300,
      image: "https://placehold.co/400x400?text=Mug+Image",
    },
    {
      id: 3,
      name: "Caps ",
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

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Store Header */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Store
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-lg font-semibold">Your Points: <span className="text-green-500">1,000</span></p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col h-full">
              <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-green-500 font-medium text-xl mb-4">
                  {product.price} points
                </p>
                <button
                  className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty Cart Notice */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow border border-gray-200 dark:border-gray-700 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Your cart is empty
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Add some items to get started!
        </p>
      </motion.div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-400 dark:text-gray-500">
        Items ship within 2-3 weeks. All sales final.
      </div>
    </div>
  );
};

export default Store;