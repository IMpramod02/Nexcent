/* eslint-disable react-refresh/only-export-components */
/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/LandingPage/homepage/homepage.jsx';
import CaringPage from './pages/LandingPage/caringpage/caringpage.jsx';
import SitePage from './pages/LandingPage/sitepage/sitepage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/service" element={<CaringPage />} />
        <Route path="/feature" element={<SitePage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
