const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const authRouter = require('./routes/auth');

app.use(express.json());

app.use('/api', authRouter);

// Simple GET route
app.get("/", (req, res) => {
  res.send("Hello from Backend Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
