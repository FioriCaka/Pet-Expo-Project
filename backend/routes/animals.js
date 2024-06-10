const express = require('express');
const animalsController = require('../controllers/animalsController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, animalsController.createAnimal);
router.get('/', animalsController.getAllAnimals);
router.put('/:id', auth, animalsController.updateAnimal);
router.delete('/:id', auth,animalsController.deleteAnimal);
router.get('/search/:type', animalsController.searchAnimals);

module.exports = router;
