import React, { useState, useEffect } from 'react';
import api from '../api';
import AnimalCard from './AnimalCard';

function Gallery() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('cats'); // default to cats
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await api.get('/animals', { params: { type } });
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals', error);
      }
    };
    fetchAnimals();
  }, [type]);

  return (
    <div className="search-filter">
      <select onChange={e => setType(e.target.value)}>
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
        <option value="birds">Birds</option>
      </select>
      <input 
        type="text" 
        placeholder="Search by name..." 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <div className="animal-gallery">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
