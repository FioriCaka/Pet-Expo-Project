const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getAdmin } = require('../db');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try { 
    const admin = await getAdmin({ username });
    if (!admin) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
      
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: err.message });
  }
};
