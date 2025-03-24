import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SareePrePlating } from './pages/SareePrePlating';
import { Mehandi } from './pages/Mehandi';
import { Aari } from './pages/Aari';
import { Book } from './pages/Book';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/saree-pre-plating" element={<SareePrePlating />} />
        <Route path="/services/mehandi" element={<Mehandi />} />
        <Route path="/services/aari" element={<Aari />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;