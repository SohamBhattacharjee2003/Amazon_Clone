const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// Replace <password> with your actual MongoDB password
const connection_url = "mongodb+srv://sohambhattacharjee84:<password>@cluster0.2oxcdi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});


app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/products/add', (req, res) => {
    const productDetail = req.body;
    // res.status(200).send('Product added successfully'); // Commented out to avoid sending response twice
    console.log("Product Detail >>>>", productDetail);
    product.create(productDetail, (err, data) => { // Corrected model name to Product
        if (err) {
            res.status(500).fsend(err.message); // Changed error to err
        } else {
            res.status(200).send(data);
        }
    })
});

app.listen(port, () => console.log("Server is listening on port", port));
