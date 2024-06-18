import mongoose from 'mongoose';
import Admin from '../models/Admin.js'; 
import { createError } from '../error.js';
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {
 
  try{
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.password, salt)
      const newUser = new Admin({...req.body, password: hash})

      await newUser.save()
      res.status(200).send("Admin created")
  }catch(err){
      next(err)
  }
}

