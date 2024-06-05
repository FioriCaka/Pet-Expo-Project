const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const animalRoutes = require('./routes/animals');

const app = express();

app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost/petexpo', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/animals', animalRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
