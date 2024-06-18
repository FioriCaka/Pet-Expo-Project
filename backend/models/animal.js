import mongoose from 'mongoose';

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


export default mongoose.model('Animal', animalSchema)
