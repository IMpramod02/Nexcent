// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { MENU_ITEMS, AUTH_ITEMS } from './constants';
import logo from '../../assets/icons/logo.png';
import hamburger from '../../assets/icons/hamburger.png';

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Nexcent Logo" className="logo-image" />
      </div>

      <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

      <ul className="navbar-menu">
        {MENU_ITEMS.map((item) => (
          <li key={item.href} className="menu-item">
            <Link
              to={item.href}
              className={activeItem === item.href ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {AUTH_ITEMS.length > 0 && (
        <div className="navbar-auth">
          {AUTH_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`auth-button ${item.className || ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
