const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const animalRoutes = require('./routes/animals');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/petexpo', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from port 3000
  credentials: true // Allow including cookies in requests
}));

app.use('/api/animals', animalRoutes);
app.use('/api/auth', authRoutes);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
