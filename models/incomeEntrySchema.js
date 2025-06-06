const mongoose = require("mongoose");

const incomeEntrySchema = new mongoose.Schema({
  work: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("IncomeEntry", incomeEntrySchema);
