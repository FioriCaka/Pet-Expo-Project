const express = require('express');
const animalsController = require('../controllers/animalsController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/:type', auth, animalsController.createAnimal);
router.get('/:type', animalsController.getAllAnimals);
router.put('/:type/:id', auth, animalsController.updateAnimal);
router.delete('/:type/:id', auth,animalsController.deleteAnimal);
router.get('/:type/search', animalsController.searchAnimals);

module.exports = router;
