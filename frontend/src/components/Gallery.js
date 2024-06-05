import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard';

function Gallery() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('cats'); // default to cats
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/api/animals/${type}`)
      .then(response => setAnimals(response.data))
      .catch(error => console.error(error));
  }, [type]);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
