import React, { useState } from "react";

function EcommerceProductListing() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Smartphone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Product Listing</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "200px",
              borderRadius: "8px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>🛒 Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} – ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EcommerceProductListing;
