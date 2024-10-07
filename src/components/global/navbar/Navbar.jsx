/* eslint-disable no-unused-vars */
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

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.scss';
// import {
//   MENU_ITEMS_EN,
//   MENU_ITEMS_ES,
//   AUTH_ITEMS_EN,
//   AUTH_ITEMS_ES,
// } from './constants';
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';

// const getMenuItems = (language) => {
//   const languageMap = {
//     en: MENU_ITEMS_EN,
//     es: MENU_ITEMS_ES,
//   };
//   return languageMap[language] || MENU_ITEMS_EN;
// };

// const getAuthItems = (language) => {
//   const languageMap = {
//     en: AUTH_ITEMS_EN,
//     es: AUTH_ITEMS_ES,
//   };
//   return languageMap[language] || AUTH_ITEMS_EN;
// };

// const Navbar = ({ toggleLanguage, currentLanguage }) => {
//   const location = useLocation();

//   const MENU_ITEMS = getMenuItems(currentLanguage);
//   const AUTH_ITEMS = getAuthItems(currentLanguage);

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
//               to={`/${currentLanguage}${item.href}`}
//               className={
//                 location.pathname === `/${currentLanguage}${item.href}`
//                   ? 'active'
//                   : ''
//               }
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button onClick={toggleLanguage} className="language-toggle">
//         {currentLanguage === 'en' ? 'EN' : 'ES'}
//       </button>

//       {AUTH_ITEMS.length > 0 && (
//         <div className="navbar-auth">
//           {AUTH_ITEMS.map((item) => (
//             <Link
//               key={item.href}
//               to={`/${currentLanguage}${item.href}`}
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

// import React, { useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.scss';
// import {
//   MENU_ITEMS_EN,
//   MENU_ITEMS_ES,
//   AUTH_ITEMS_EN,
//   AUTH_ITEMS_ES,
// } from './constants';
// import LanguageContext from '../../../context/LanguageContext';
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';

// const getMenuItems = (language) => {
//   const languageMap = { en: MENU_ITEMS_EN, es: MENU_ITEMS_ES };
//   return languageMap[language] || MENU_ITEMS_EN;
// };

// const getAuthItems = (language) => {
//   const languageMap = { en: AUTH_ITEMS_EN, es: AUTH_ITEMS_ES };
//   return languageMap[language] || AUTH_ITEMS_EN;
// };

// const Navbar = () => {
//   const { language, toggleLanguage } = useContext(LanguageContext);
//   const location = useLocation();

//   const MENU_ITEMS = getMenuItems(language);
//   const AUTH_ITEMS = getAuthItems(language);

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
//               to={`/${language}${item.href}`}
//               className={
//                 location.pathname === `/${language}${item.href}` ? 'active' : ''
//               }
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button onClick={toggleLanguage} className="language-toggle">
//         {language === 'en' ? 'EN' : 'ES'}
//       </button>

//       {AUTH_ITEMS.length > 0 && (
//         <div className="navbar-auth">
//           {AUTH_ITEMS.map((item) => (
//             <Link
//               key={item.href}
//               to={`/${language}${item.href}`}
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

// import React, { useContext, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.scss';
// import {
//   MENU_ITEMS_EN,
//   MENU_ITEMS_ES,
//   AUTH_ITEMS_EN,
//   AUTH_ITEMS_ES,
// } from './constants';
// import LanguageContext from '../../../context/LanguageContext';
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';
// import SignUpForm from '../../../forms/signupform/signupform';

// const getMenuItems = (language) => {
//   const languageMap = { en: MENU_ITEMS_EN, es: MENU_ITEMS_ES };
//   return languageMap[language] || MENU_ITEMS_EN;
// };

// const getAuthItems = (language) => {
//   const languageMap = { en: AUTH_ITEMS_EN, es: AUTH_ITEMS_ES };
//   return languageMap[language] || AUTH_ITEMS_EN;
// };

// const Navbar = () => {
//   const { language, toggleLanguage } = useContext(LanguageContext);
//   const location = useLocation();
//   const [showSignUpForm, setShowSignUpForm] = useState(false);

//   const MENU_ITEMS = getMenuItems(language);
//   const AUTH_ITEMS = getAuthItems(language);

//   const handleSignUpClick = () => {
//     setShowSignUpForm(true);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={logo} alt="Nexcent Logo" className="logo-image" />
//         </div>

//         <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

//         <ul className="navbar-menu">
//           {MENU_ITEMS.map((item) => (
//             <li key={item.href} className="menu-item">
//               <Link
//                 to={`/${language}${item.href}`}
//                 className={
//                   location.pathname === `/${language}${item.href}`
//                     ? 'active'
//                     : ''
//                 }
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <button onClick={toggleLanguage} className="language-toggle">
//           {language === 'en' ? 'EN' : 'ES'}
//         </button>

//         {AUTH_ITEMS.length > 0 && (
//           <div className="navbar-auth">
//             {AUTH_ITEMS.map((item) => (
//               <Link
//                 key={item.href}
//                 to={`/${language}${item.href}`}
//                 className={`auth-button ${item.className || ''}`}
//                 onClick={
//                   item.label === 'Sign Up' ? handleSignUpClick : undefined
//                 }
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//       {showSignUpForm && (
//         <SignUpForm onClose={() => setShowSignUpForm(false)} />
//       )}
//     </>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Navbar.scss';
// import {
//   MENU_ITEMS_EN,
//   MENU_ITEMS_ES,
//   AUTH_ITEMS_EN,
//   AUTH_ITEMS_ES,
// } from './constants';
// import LanguageContext from '../../../context/LanguageContext';
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';
// import SignUpForm from '../../../forms/signupform/signupform';

// const getMenuItems = (language) => {
//   const languageMap = { en: MENU_ITEMS_EN, es: MENU_ITEMS_ES };
//   return languageMap[language] || MENU_ITEMS_EN;
// };

// const getAuthItems = (language) => {
//   const languageMap = { en: AUTH_ITEMS_EN, es: AUTH_ITEMS_ES };
//   return languageMap[language] || AUTH_ITEMS_EN;
// };

// const Navbar = () => {
//   const { language, toggleLanguage } = useContext(LanguageContext);
//   const location = useLocation();
//   const navigate = useNavigate(); // Use navigate for programmatic navigation

//   const MENU_ITEMS = getMenuItems(language);
//   const AUTH_ITEMS = getAuthItems(language);

//   // Navigate to the signup form route without reloading the page
//   const handleSignUpClick = (e) => {
//     e.preventDefault();
//     console.log('signup clicked');
//     navigate(`/${language}/home/signup`); // Navigate to the nested signup route under home
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={logo} alt="Nexcent Logo" className="logo-image" />
//         </div>

//         <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

//         <ul className="navbar-menu">
//           {MENU_ITEMS.map((item) => (
//             <li key={item.href} className="menu-item">
//               <Link
//                 to={`/${language}${item.href}`}
//                 className={
//                   location.pathname === `/${language}${item.href}`
//                     ? 'active'
//                     : ''
//                 }
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <button onClick={toggleLanguage} className="language-toggle">
//           {language === 'en' ? 'EN' : 'ES'}
//         </button>

//         {AUTH_ITEMS.length > 0 && (
//           <div className="navbar-auth">
//             {AUTH_ITEMS.map((item) => (
//               <a
//                 key={item.href}
//                 href="/#"
//                 className={`auth-button ${item.className || ''}`}
//                 onClick={
//                   item.label === 'Signup' ? handleSignUpClick : undefined
//                 }
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Navbar.scss';
// import {
//   MENU_ITEMS_EN,
//   MENU_ITEMS_ES,
//   AUTH_ITEMS_EN,
//   AUTH_ITEMS_ES,
// } from './constants';
// import LanguageContext from '../../../context/LanguageContext';
// import logo from '../../../assets/icons/logo.png';
// import hamburger from '../../../assets/icons/hamburger.png';
// import SignUpForm from '../../../forms/signupform/signupform'; // Import the form

// const getMenuItems = (language) => {
//   const languageMap = { en: MENU_ITEMS_EN, es: MENU_ITEMS_ES };
//   return languageMap[language] || MENU_ITEMS_EN;
// };

// const getAuthItems = (language) => {
//   const languageMap = { en: AUTH_ITEMS_EN, es: AUTH_ITEMS_ES };
//   return languageMap[language] || AUTH_ITEMS_EN;
// };

// const Navbar = () => {
//   const { language, toggleLanguage } = useContext(LanguageContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showSignUpForm, setShowSignUpForm] = useState(false); // State for showing modal

//   const MENU_ITEMS = getMenuItems(language);
//   const AUTH_ITEMS = getAuthItems(language);

//   // Handle opening the signup modal
//   const handleSignUpClick = (e) => {
//     e.preventDefault();
//     setShowSignUpForm(true); // Show the signup modal
//   };

//   // Close the signup modal
//   const handleCloseSignUpForm = () => {
//     setShowSignUpForm(false); // Close the modal when signup is done
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={logo} alt="Nexcent Logo" className="logo-image" />
//         </div>

//         <img src={hamburger} alt="Hamburger Icon" className="hamburger-icon" />

//         <ul className="navbar-menu">
//           {MENU_ITEMS.map((item) => (
//             <li key={item.href} className="menu-item">
//               <Link
//                 to={`/${language}${item.href}`}
//                 className={
//                   location.pathname === `/${language}${item.href}`
//                     ? 'active'
//                     : ''
//                 }
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <button onClick={toggleLanguage} className="language-toggle">
//           {language === 'en' ? 'EN' : 'ES'}
//         </button>

//         {AUTH_ITEMS.length > 0 && (
//           <div className="navbar-auth">
//             {AUTH_ITEMS.map((item) => (
//               <a
//                 key={item.href}
//                 href="/#"
//                 className={`auth-button ${item.className || ''}`}
//                 onClick={
//                   item.label === 'Signup' ? handleSignUpClick : undefined
//                 }
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* Conditionally render the signup form modal */}
//       {showSignUpForm && (
//         <div className="modal-overlay">
//           <SignUpForm onClose={handleCloseSignUpForm} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

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
import SignUpForm from '../../../forms/signupform/signupform'; // Import the form

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

  const MENU_ITEMS = getMenuItems(language);
  const AUTH_ITEMS = getAuthItems(language);

  // Handle opening the signup modal
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate('/en/home/signup');
    // setShowSignUpForm(true); // Show the signup modal
  };

  // Close the signup modal
  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false); // Close the modal when signup is done
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
                onClick={
                  item.label === 'Signup' ? handleSignUpClick : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Wrap modal overlay in a container for relative positioning */}
      {/* {showSignUpForm && (
        <div className="modal-container">
          {' '}
          <div className="modal-overlay">
            <SignUpForm onClose={handleCloseSignUpForm} />
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
