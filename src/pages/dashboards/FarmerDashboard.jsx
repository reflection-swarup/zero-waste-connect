import React, { useState } from "react";

function FarmerDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Organic Strawberries", price: 3.99, image: "/strawberries.jpg" },
    { id: 2, name: "Organic Blueberries", price: 4.99, image: "/blueberries.jpg" },
    { id: 3, name: "Organic Raspberries", price: 5.99, image: "/raspberries.jpg" },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold mb-6">Megan Jones</h2>
        <nav>
          <ul>
            <li className="mb-4"><a href="#" className="text-gray-600 hover:text-black">Dashboard</a></li>
            <li className="mb-4 font-bold text-black">Farmers Market</li>
            <li className="mb-4"><a href="#" className="text-gray-600 hover:text-black">Events</a></li>
            <li className="mb-4"><a href="#" className="text-gray-600 hover:text-black">Customers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Reports</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Farmers Market</h1>
        <p className="text-blue-500 underline cursor-pointer">Manage your offerings</p>

        {/* Product List */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Current Offerings</h2>
          <ul className="mt-4">
            {products.map((product) => (
              <li key={product.id} className="flex items-center justify-between p-2 border rounded-md bg-white shadow-sm mb-2">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded" />
                <span className="flex-1 ml-4">{product.name}</span>
                <span className="text-gray-700 font-medium">${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">+ Add Product</button>
        </div>
      </main>
    </div>
  );
}

export default FarmerDashboard;
