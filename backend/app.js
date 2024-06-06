const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const animalRoutes = require('./routes/animals');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost/petexpo', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

app.use('/api/animals', animalRoutes);
app.use('/api/auth', authRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
