const express = require("express");
const router = express.Router();
const incomeEntrySchema = require("../models/incomeEntrySchema");

// Add new entry
router.post("/", async (req, res) => {
  try {
    const { work, value, date } = req.body;
    const entry = new incomeEntrySchema({ work, value, date });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all entries
router.get("/", async (req, res) => {
  try {
    const entries = await incomeEntrySchema.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single entry by ID
router.get("/:id", async (req, res) => {
  try {
    const entry = await incomeEntrySchema.findById(req.params.id);
    if (!entry) return res.status(404).json({ error: "Entry not found" });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update entry by ID
router.put("/:id", async (req, res) => {
  try {
    const { work, value, date } = req.body;
    const entry = await incomeEntrySchema.findByIdAndUpdate(
      req.params.id,
      { work, value, date },
      { new: true }
    );
    if (!entry) return res.status(404).json({ error: "Entry not found" });
    res.json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete entry by ID
router.delete("/:id", async (req, res) => {
  try {
    const entry = await incomeEntrySchema.findByIdAndDelete(req.params.id);
    if (!entry) return res.status(404).json({ error: "Entry not found" });
    res.json({ message: "Entry deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
