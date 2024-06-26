import React, { useState, useEffect } from 'react';
import api from '../api';
import AnimalCard from './AnimalCard';
import AddAnimal from './AddAnimal';

function Admin({ token }) {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('cats');

  const fetchAnimals = async () => {
    try {
      const response = await api.get(`/animals/${type}`);
      setAnimals(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/animals/${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchAnimals();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <AddAnimal token={token} />
      <div className="animal-gallery">
        {animals.map((animal) => (
          <div key={animal._id}>
            <AnimalCard animal={animal} />
            <button onClick={() => handleDelete(animal._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
