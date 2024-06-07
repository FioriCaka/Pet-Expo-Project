const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user'); 
const mongoURI = 'mongodb://localhost:27017/petexpo/admin'; 

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('fiori267', 12); 
  const admin = new User({
    username: 'admin',
    password: hashedPassword,
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
