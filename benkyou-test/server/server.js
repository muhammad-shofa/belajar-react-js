const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const { count } = require("console");
const app = express();

// Middleware
app.use(cors()); // Harus dipanggil sebagai fungsi
app.use(express.json());

// Koneksi MongoDB
mongoose
  .connect("mongodb://localhost/benkyou", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected into database ..."))
  .catch((err) => console.log("Failed to connect to database!", err));

// Model User
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

// Endpoint menampilkan data users
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// Endpoint untuk menghitung jumlah pengguna
app.get("/users-count", async (req, res) => {
  try {
    const userCount = await User.estimatedDocumentCount(); // Alternatif lebih ringan
    console.log("User count:", userCount); // Debugging
    res.json({ count: userCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint cek apakah user sudah login?
app.get("/is-logged-in", (req, res) => {
  const isLoggedIn = req.session?.user; // Asumsi menggunakan express-session
  res.json({ loggedIn: !!isLoggedIn });
});

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Atur `secure: true` jika menggunakan HTTPS
  })
);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Proses autentikasi
  if (username === "user" && password === "pass") {
    req.session.user = { username }; // Set session
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
