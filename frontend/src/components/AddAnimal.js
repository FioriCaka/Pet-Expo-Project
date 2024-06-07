import React, { useState } from 'react';
import axios from 'axios';
import './AddAnimal.css';

function AddAnimal({ token }) {
  const [animal, setAnimal] = useState({
    name: '',
    origin: '',
    type: 'cats',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/api/animals/${animal.type}`, animal, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Animal added successfully!');
      setAnimal({
        name: '',
        origin: '',
        type: 'cats',
        imageUrl: ''
      });
    } catch (error) {
      console.error(error);
      alert('Failed to add animal');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={animal.name} onChange={handleChange} required />
      </label>
      <label>
        Origin:
        <input type="text" name="origin" value={animal.origin} onChange={handleChange} required />
      </label>
      <label>
        Type:
        <select name="type" value={animal.type} onChange={handleChange}>
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
          <option value="birds">Birds</option>
        </select>
      </label>
      <label>
        Image URL:
        <input type="text" name="imageUrl" value={animal.imageUrl} onChange={handleChange} required />
      </label>
      <button type="submit">Add Animal</button>
    </form>
  );
}

export default AddAnimal;
