const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const app = express();

// Define a schema for your products
const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  rating: Number
});

// Create a model for the products
const Product = mongoose.model('Product', productSchema, 'Backend_data');
app.use(express.json());
app.use(cors());

// Replace <password> with your actual MongoDB password
const connection_url = process.env.MONGODB_URI;

mongoose.connect(connection_url).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});


app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

app.post('/products/add', (req, res) => {
    const productDetail = req.body;
    const newProduct = new Product(productDetail);
    newProduct.save()
      .then(() => res.status(201).send('Product added successfully'))
      .catch(err => res.status(500).send(err.message));
    // res.status(200).send('Product added successfully'); // Commented out to avoid sending response twice
    console.log("Product Detail >>>>", productDetail);
    });

const port = 8001;
const server = app.listen(port, () => console.log("Server is listening on port", port));

// Graceful shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});


