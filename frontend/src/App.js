import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Gallery} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
