const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Simple GET route
app.get("/", (req, res) => {
  res.send("Hello from Backend Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
