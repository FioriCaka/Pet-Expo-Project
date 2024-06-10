require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const animalRoutes = require('./routes/animals');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json);
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from port 3000
  credentials: true
}));

app.use('./api/animals', animalRoutes);
app.use('./api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/petexpo', { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
