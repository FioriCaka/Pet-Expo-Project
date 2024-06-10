import React, { useState } from 'react';
import api from '../api';
import './AddAnimal.css';

const AddAnimal = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [type, setType] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/animals`, { name, origin, type, imageBase64 });
      onAdd();
      
      alert('Animal added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add animal');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name : 
        <input type="text" name="name" value={name} onChange={handleChange} required />
      </label>
      <label>
        Origin : 
        <input type="text" name="origin" value={origin} onChange={handleChange} required />
      </label>
      <label>
        Type : 
        <select name="type" value={type} onChange={handleChange}>
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
          <option value="birds">Birds</option>
        </select>
      </label>
      <label>
        Image base 64 : 
        <input type="text" name="imageUrl" value={imageBase64} onChange={handleChange} required />
      </label>
      <button type="submit">Add Animal</button>
    </form>
  );
}

export default AddAnimal;
