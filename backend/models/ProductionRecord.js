const mongoose = require('mongoose');

const ProductionRecordSchema = new mongoose.Schema({
  country: String,
  type: { type: String, enum: ['animal', 'fruit'] },
  name: String,
  quantity: Number,
});

module.exports = mongoose.model('ProductionRecord', ProductionRecordSchema);