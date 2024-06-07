const mongoose = require('mongoose');
const Animal = require('./models/animal'); 
const animals = require('./scripts/animals.json'); 

const mongoURI = 'mongodb://localhost:27017/petexpo/animals'; 

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    await Animal.deleteMany({});
    await Animal.insertMany(animals);
    console.log('Database populated!');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
