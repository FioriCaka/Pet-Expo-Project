import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createError } from '../error.js';


export const login = async (req, res, next) => {

  try { 
    const admin = await Admin.findOne({name:req.body.name})
    if(!admin) return next(createError(404, "User not found!"))
    
    const isCorrect = await bcrypt.compare(req.body.password, admin.password)
    if(!isCorrect) return next(createError(400, "Wrong credentials!"))    
    
    const token = jwt.sign({id:admin._id}, proccess.env.JWT)
    const {password, ...others} = admin._doc
    
    res 
    .cookie("access_token", token, {
        httpOnly:true
    })
    .status(200)
    .json(others)

  } catch (err) {
      next(err)
  }
};

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const Admin = await Admin.findOne({ _id: decoded._id });

    if (!Admin) {
      throw new Error();
    }

    req.Admin = Admin;s
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};
