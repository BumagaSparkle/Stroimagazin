import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Otzivi from './components/Otzivi';
import Calculator from './components/Calculator';
import ContactsPage from './components/ContactsPage';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/otzivi" element={<Otzivi />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
