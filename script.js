const express = require('express');
const mongoose = require('mongoose');
const productionRoutes = require('./routes/production');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/naik', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/production', productionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});