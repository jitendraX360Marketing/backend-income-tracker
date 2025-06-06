const express = require("express");
const router = express.Router();
const users = require("../models/user");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

router.get("/login", (req, res) => {
  res.send("Login Page!");
});

module.exports = router;
