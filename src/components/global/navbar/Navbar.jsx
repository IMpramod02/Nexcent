/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.scss';
// import { MENU_ITEMS, AUTH_ITEMS } from './constants';
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';

// const Navbar = ({ toggleLanguage, currentLanguage }) => {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Nexcent Logo" className="logo-image" />
//       </div>

//       <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

//       <ul className="navbar-menu">
//         {MENU_ITEMS.map((item) => (
//           <li key={item.href} className="menu-item">
//             <Link
//               to={item.href}
//               className={location.pathname === item.href ? 'active' : ''}
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Language Toggle Button */}
//       <button onClick={toggleLanguage} className="language-toggle">
//         {currentLanguage === 'en' ? 'EN' : 'ES'}
//       </button>

//       {AUTH_ITEMS.length > 0 && (
//         <div className="navbar-auth">
//           {AUTH_ITEMS.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               className={`auth-button ${item.className || ''}`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.scss';
// import {
//   MENU_ITEMS_EN,
//   MENU_ITEMS_ES,
//   AUTH_ITEMS_EN,
//   AUTH_ITEMS_ES,
// } from './constants'; // Import both language sets
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';

// const Navbar = ({ toggleLanguage, currentLanguage }) => {
//   const location = useLocation();

//   // Determine the constants to use based on the current language
//   const MENU_ITEMS = currentLanguage === 'es' ? MENU_ITEMS_ES : MENU_ITEMS_EN;
//   const AUTH_ITEMS = currentLanguage === 'es' ? AUTH_ITEMS_ES : AUTH_ITEMS_EN;

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Nexcent Logo" className="logo-image" />
//       </div>

//       <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

//       <ul className="navbar-menu">
//         {MENU_ITEMS.map((item) => (
//           <li key={item.href} className="menu-item">
//             <Link
//               to={item.href}
//               className={location.pathname === item.href ? 'active' : ''}
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Language Toggle Button */}
//       <button onClick={toggleLanguage} className="language-toggle">
//         {currentLanguage === 'en' ? 'EN' : 'ES'}
//       </button>

//       {AUTH_ITEMS.length > 0 && (
//         <div className="navbar-auth">
//           {AUTH_ITEMS.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               className={`auth-button ${item.className || ''}`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import {
  MENU_ITEMS_EN,
  MENU_ITEMS_ES,
  AUTH_ITEMS_EN,
  AUTH_ITEMS_ES,
} from './constants';
import logo from '../../../assets/icons/logo.png';
import hamburger from '../../../assets/icons/hamburger.png';

const Navbar = ({ toggleLanguage, currentLanguage }) => {
  const location = useLocation();

  const MENU_ITEMS = currentLanguage === 'es' ? MENU_ITEMS_ES : MENU_ITEMS_EN;
  const AUTH_ITEMS = currentLanguage === 'es' ? AUTH_ITEMS_ES : AUTH_ITEMS_EN;

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
              to={`/${currentLanguage}${item.href}`}
              className={
                location.pathname === `/${currentLanguage}${item.href}`
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
        {currentLanguage === 'en' ? 'EN' : 'ES'}
      </button>

      {AUTH_ITEMS.length > 0 && (
        <div className="navbar-auth">
          {AUTH_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={`/${currentLanguage}${item.href}`}
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
