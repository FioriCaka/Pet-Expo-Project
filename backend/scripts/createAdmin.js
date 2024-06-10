const mongoose = require('mongoose');
const Admin = require('../models/Admin'); 
const mongoURI = 'mongodb://localhost:27017/petexpo'; 

const createAdmin = async () => {
  const admin = new Admin({
    username: 'admin',
    password: 'asdasd',
    role: 'admin'
  });

  await admin.save();
  console.log('Admin user created!');
};

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    await createAdmin();
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
