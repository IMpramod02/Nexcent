/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import {
  MENU_ITEMS_EN,
  MENU_ITEMS_ES,
  AUTH_ITEMS_EN,
  AUTH_ITEMS_ES,
} from './constants';
import LanguageContext from '../../../context/LanguageContext';
import logo from '../../../assets/icons/logo.png';
import hamburger from '../../../assets/icons/hamburger.png';
import SignUpForm from '../../../forms/signupform/signupform';
import LoginForm from '../../../forms/loginform/loginform';

const getMenuItems = (language) => {
  const languageMap = { en: MENU_ITEMS_EN, es: MENU_ITEMS_ES };
  return languageMap[language] || MENU_ITEMS_EN;
};

const getAuthItems = (language) => {
  const languageMap = { en: AUTH_ITEMS_EN, es: AUTH_ITEMS_ES };
  return languageMap[language] || AUTH_ITEMS_EN;
};

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showSignUpForm, setShowSignUpForm] = useState(false); // State for showing modal
  const [showLoginForm, setShowLoginForm] = useState(false);

  const MENU_ITEMS = getMenuItems(language);
  const AUTH_ITEMS = getAuthItems(language);

  // Handle opening the signup modal
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate('/en/home/signup');
    // setShowSignUpForm(true); // Show the signup modal
  };
  // Handle opening the login modal
  const handleLoginClick = (e) => {
    e.preventDefault();
    // console.log('login clicked');
    navigate('/en/home/login');
    // setShowLoginForm(true);
  };

  // Close the signup modal
  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false);
  };

  // Close the login modal
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Nexcent Logo" className="logo-image" />
        </div>

        <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

        <ul className="navbar-menu">
          {MENU_ITEMS.map((item) => (
            <li key={item.href} className="menu-item">
              <Link
                to={`/${language}${item.href}`}
                className={
                  location.pathname === `/${language}${item.href}`
                    ? 'active'
                    : ''
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'en' ? 'EN' : 'ES'}
        </button>

        {AUTH_ITEMS.length > 0 && (
          <div className="navbar-auth">
            {AUTH_ITEMS.map((item) => (
              <a
                key={item.href}
                href="/#"
                className={`auth-button ${item.className || ''}`}
                onClick={(e) => {
                  if (item.label === 'Login') {
                    // e.preventDefault();
                    // console.log('Login clicked');
                    handleLoginClick(e); // Attach Login handler
                  } else if (item.label === 'Signup') {
                    handleSignUpClick(e); // Attach Signup handler
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Wrap modal overlay in a container for relative positioning */}
      {/* {showLoginForm && (
        <div className="modal-container">
          {' '}
          <div className="modal-overlay">
            <SignUpForm onClose={handleCloseSignUpForm} />
            Hello Login form
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
