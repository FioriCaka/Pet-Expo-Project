const express = require('express');
const animalsController = require('../controllers/animalsController');

const router = express.Router();

router.post('/:type', animalsController.createAnimal);
router.get('/:type', animalsController.getAllAnimals);
router.put('/:type/:id', animalsController.updateAnimal);
router.delete('/:type/:id', animalsController.deleteAnimal);
router.get('/:type/search', animalsController.searchAnimals);

module.exports = router;
