const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true
  },
  origin: {
    type : String,
    required : true
  },
  type: {
    type : String,
    required : true
  },
  imageBase64: {
    type : String,
    required : true
  },
});

const Animal = mongoose.model('animal', animalSchema);

module.exports = Animal;
