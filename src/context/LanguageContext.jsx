/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    const newPath = location.pathname.replace(`/${language}`, `/${newLang}`);
    setLanguage(newLang);
    navigate(newPath);
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const currentLang = pathParts[1];

    if (currentLang === 'es' || currentLang === 'en') {
      setLanguage(currentLang);
    } else {
      navigate('/en/home');
    }
  }, [location.pathname, navigate]); // ideally have a single source of truth.  todo: remove navigation. as a dependency.

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
