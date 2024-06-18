import Animal from '../models/animal.js';

export const createAnimal = async (req, res) => {
  const { name, origin, type, imageBase64 } = req.body;
  const animal = new Animal({ name, origin, type, imageBase64 });
  
  try{
    const newAnimal = await animal.save();
    res.status(201).send(newAnimal);
  }catch (error){
    res.status(400).json({ message: error.message });
  }
  
};

export const getAllAnimals = async (req, res) => {
  const { type } = req.query;
  
  try{
    const animals = await getAnimals(type);
    res.json(animals);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal not found' });

    Object.assign(animal, req.body);
    const updatedAnimal = await animal.save();
    res.json(updatedAnimal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAnimal = async (req, res) => {
  try{
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal not found' });

    await animal.remove();
    res.json({ message: 'Animal deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    
};

export const searchAnimals = async (req, res) => {
  const { type } = req.params;
  const { name } = req.query;
  const animals = await Animal.find({ type, name: new RegExp(name, 'i') });
  res.send(animals);
};
