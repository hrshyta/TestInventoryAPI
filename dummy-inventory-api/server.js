const express = require('express');
const app = express();
const PORT = 3000;

// Dummy inventory data
const inventory = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones with a long battery life.",
    price: 99.99,
    available_stock: 50,
    image_url: "https://example.com/images/headphones.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with high-resolution camera.",
    price: 799.99,
    available_stock: 20,
    image_url: "https://example.com/images/smartphone.jpg",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Automatic coffee maker with programmable settings.",
    price: 59.99,
    available_stock: 15,
    image_url: "https://example.com/images/coffeemaker.jpg",
    category: "Home Appliances"
  }
];

// API endpoint to fetch inventory
app.get('/api/inventory', (req, res) => {
  res.json({
    status: "success",
    data: inventory
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
