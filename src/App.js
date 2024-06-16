import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookTablePage from './pages/BookTablePage';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-table-page" element={<BookTablePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

