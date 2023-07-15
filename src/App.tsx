import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import FavoritesPage from './components/pages/FavouritesPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default App;
