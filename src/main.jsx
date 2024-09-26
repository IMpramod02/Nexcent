// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/faqsection/faqpage';

// import { useState } from 'react';
// function App() {
//   const [language, setLanguage] = useState('en');

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
//   };
//   return (
//     <Router>
//       <Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />
//       <Routes>
//         <Route path="/home" element={<HomePage language={language} />} />
//         <Route path="/faq" element={<FAQPage language={language} />} />
//       </Routes>
//     </Router>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './styles/global.scss';
import Navbar from './components/global/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
import FAQPage from './components/pages/faqsection/faqpage';

function App() {
  const [language, setLanguage] = useState('en');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const currentLang = pathParts[1];

    if (currentLang === 'es' || currentLang === 'en') {
      setLanguage(currentLang);
    } else {
      navigate('/en/home');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />
      <Routes>
        <Route path="/en/home" element={<HomePage language={language} />} />
        <Route path="/es/home" element={<HomePage language={language} />} />
        <Route path="/en/faq" element={<FAQPage language={language} />} />
        <Route path="/es/faq" element={<FAQPage language={language} />} />
        <Route path="/" element={<Navigate to="/en/home" />} />
      </Routes>
    </>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
