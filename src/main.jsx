import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Navbar from './components/global/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
import { useState } from 'react';
function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };
  return (
    <Router>
      <Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />
      <Routes>
        <Route path="/home" element={<HomePage language={language} />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
