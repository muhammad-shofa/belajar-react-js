const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { count } = require("console");
const app = express();

// Middleware
app.use(cors()); // Harus dipanggil sebagai fungsi
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/benkyou", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Model User
// const User = mongoose.model("User", new mongoose.Schema({}));
const User = new mongoose.model("User", {
  username: String,
  password: String,
  name: String,
  full_name: String,
  no_hp: Number,
  email: String,
  role: String,
  create_at: { type: Date, default: Date.now }, // Tambahkan default untuk field `create_at`
});

// Endpoint untuk menghitung jumlah data
app.get("/users-count", async (req, res) => { // HAMPIR BISA INI//
  try {
    const userCount = await User.estimatedDocumentCount(); // Alternatif lebih ringan
    console.log("User count:", userCount); // Debugging
    res.json({ count: userCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
