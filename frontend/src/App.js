import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AddAnimal from './components/AddAnimal';
import Login from './components/Login';
import Admin from './components/Admin';
import api from './api';


const App = () =>{
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/add" element={<AddAnimal token={token} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/admin" element={<Admin token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
