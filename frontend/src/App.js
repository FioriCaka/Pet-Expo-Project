import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={Gallery} />
        <Route path="/about" element={AboutUs} />
        <Route path="/contact" element={ContactUs} />
      </Routes>
    </Router>
  );
}

export default App;
