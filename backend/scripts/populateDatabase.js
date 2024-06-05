const mongoose = require('mongoose');
const Animal = require('../models/animal');

mongoose.connect('mongodb://localhost/petexpo', { useNewUrlParser: true, useUnifiedTopology: true });

const sampleAnimals = [
  { name: 'Milo', origin: 'USA', type: 'cats', imageUrl: 'https://example.com/milo.jpg' },
  { name: 'Bella', origin: 'Canada', type: 'dogs', imageUrl: 'https://example.com/bella.jpg' },
  { name: 'Charlie', origin: 'UK', type: 'birds', imageUrl: 'https://example.com/charlie.jpg' },
  // Add more sample animals
];

Animal.insertMany(sampleAnimals)
  .then(() => {
    console.log('Sample animals added successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error adding sample animals:', error);
    mongoose.connection.close();
  });

  