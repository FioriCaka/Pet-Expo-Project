const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost/petexpo', { useNewUrlParser: true, useUnifiedTopology: true });

const adminUser = new User({ username: 'admin', password: 'password' });

adminUser.save().then(() => {
  console.log('Admin user created');
  mongoose.connection.close();
}).catch((error) => {
  console.error('Error creating admin user:', error);
  mongoose.connection.close();
});
