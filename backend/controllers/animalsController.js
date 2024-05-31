const Animal = require('../models/animal');

exports.createAnimal = async (req, res) => {
  const animal = new Animal(req.body);
  try {
    await animal.save();
    res.status(201).send(animal);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getAllAnimals = async (req, res) => {
  const type = req.params.type;
  try {
    const animals = await Animal.find({ type });
    res.send(animals);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateAnimal = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).send();
    }
    updates.forEach((update) => (animal[update] = req.body[update]));
    await animal.save();
    res.send(animal);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) {
      return res.status(404).send();
    }
    res.send(animal);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.searchAnimals = async (req, res) => {
  const type = req.params.type;
  const name = req.query.name;
  try {
    const animals = await Animal.find({ type, name: new RegExp(name, 'i') });
    res.send(animals);
  } catch (e) {
    res.status(500).send(e);
  }
};
