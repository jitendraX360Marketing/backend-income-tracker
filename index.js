const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3001;

const authRouter = require("./routes/auth");
const incomeEntrySchema = require("./routes/incomeEntries");

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json());

app.use("/api", authRouter);
app.use("/api/income-entries", incomeEntrySchema);

// Simple GET route
app.get("/", (req, res) => {
  res.send("Hello from Backend Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
