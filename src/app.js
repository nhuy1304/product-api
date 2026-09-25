const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

// Kết nối MongoDB
connectDB();

// Cho phép API nhận dữ liệu JSON
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// Route kiểm tra API
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Product API is running"
  });
});

// Healthcheck
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "product-api"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Product API is running on port ${PORT}`);
});