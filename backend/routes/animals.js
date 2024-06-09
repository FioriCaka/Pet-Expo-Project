const express = require('express');
const animalsController = require('../controllers/animalsController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const animals = await Animal.find();
      console.log('Animals fetched:', animals); // Log data for debugging
      res.json(animals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.post('/:type', auth, animalsController.createAnimal);
router.get('/:type', animalsController.getAllAnimals);
router.put('/:type/:id', auth, animalsController.updateAnimal);
router.delete('/:type/:id', auth,animalsController.deleteAnimal);
router.get('/:type/search', animalsController.searchAnimals);

module.exports = router;
