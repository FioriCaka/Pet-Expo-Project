const Animal = require('../models/animal');

exports.createAnimal = async (req, res) => {
  const { name, origin, type, imageUrl } = req.body;
  const animal = new Animal({ name, origin, type, imageUrl });
  await animal.save();
  res.status(201).send(animal);
};

exports.getAllAnimals = async (req, res) => {
  const { type } = req.params;
  const animals = await Animal.find({ type });
  res.send(animals);
};

exports.updateAnimal = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const animal = await Animal.findByIdAndUpdate(id, updates, { new: true });
  if (!animal) {
    return res.status(404).send();
  }
  res.send(animal);
};

exports.deleteAnimal = async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findByIdAndDelete(id);
  if (!animal) {
    return res.status(404).send();
  }
  res.send(animal);
};

exports.searchAnimals = async (req, res) => {
  const { type } = req.params;
  const { name } = req.query;
  const animals = await Animal.find({ type, name: new RegExp(name, 'i') });
  res.send(animals);
};
