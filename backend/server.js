const express = require("express");
const cors = require("cors");
const path = require("path");

const users = require("./data");
const { auth, adminOnly } = require("./middleware");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// store users globally
app.locals.users = users;

// root → login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ✅ LOGIN (admin password = 456)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send("Missing credentials");
  }

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return res.send("Invalid credentials");

  res.json({ username: user.username, role: user.role });
});

// profile
app.get("/profile", auth, (req, res) => {
  res.json(req.user);
});

// admin
app.get("/admin", auth, adminOnly, (req, res) => {
  res.send("Welcome Admin 🔥 Full Access Granted");
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});