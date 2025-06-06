const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://officialjangidjitendra:NwXz3NNqNaMpTamv@digitrainic-clstr.uzxvwzo.mongodb.net/?retryWrites=true&w=majority&appName=digitrainic-clstr",
      {}
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
