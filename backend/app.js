import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import animalRoutes from "./routes/animals.js";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json);
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from port 3000
  credentials: true
}));

app.use('/api/animals', animalRoutes);
app.use('/api/login', authRoutes);

const connect = () => { 
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB', error);
    });
};

app.listen(PORT, () => {
  connect();
  
  console.log(`Server is running on port ${PORT}`);
});
