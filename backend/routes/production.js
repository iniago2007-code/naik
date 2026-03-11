const express = require('express');
const router = express.Router();
const ProductionRecord = require('../models/ProductionRecord');

// GET: Fetch all production for a country
router.get('/:country', async (req, res) => {
  const { country } = req.params;
  try {
    const records = await ProductionRecord.find({ country: country });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;