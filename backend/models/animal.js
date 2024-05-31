const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: String,
  origin: String,
  type: String,
  imageUrl: String,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
