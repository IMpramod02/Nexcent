// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { MENU_ITEMS, AUTH_ITEMS } from './constants';
import logo from '../../assets/icons/logo.png';
import hamburger from '../../assets/icons/hamburger.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const handleMenuClick = (href) => {
    setActiveItem(href);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Nexcent Logo" className="logo-image" />
      </div>

      <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

      <ul className="navbar-menu">
        {MENU_ITEMS.map((item) => (
          <li key={item.href} className="menu-item">
            <a
              href={item.href}
              className={activeItem === item.href ? 'active' : ''}
              onClick={() => handleMenuClick(item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {AUTH_ITEMS.length > 0 && (
        <div className="navbar-auth">
          {AUTH_ITEMS.map((item) => (
            <button
              key={item.href}
              className={`auth-button ${item.className || ''}`}
              onClick={() => (window.location.href = item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
