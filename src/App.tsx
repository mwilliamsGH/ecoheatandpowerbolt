import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FirewoodPage from './pages/FirewoodPage';
import BiomassPage from './pages/BiomassPage';
import SolarPage from './pages/SolarPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/firewood" element={<FirewoodPage />} />
          <Route path="/biomass" element={<BiomassPage />} />
          <Route path="/solar" element={<SolarPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;