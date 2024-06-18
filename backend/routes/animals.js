import express from 'express';
import {createAnimal, getAllAnimals, updateAnimal, deleteAnimal, searchAnimals} from '../controllers/animalsController.js';
import { auth } from '../controllers/authController.js'

const router = express.Router();

router.post('/', auth, createAnimal);
router.get('/', getAllAnimals);
router.put('/:id', auth, updateAnimal);
router.delete('/:id', auth, deleteAnimal);
router.get('/search/:type', searchAnimals);

export default router;
