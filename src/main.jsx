/* eslint-disable react-refresh/only-export-components */
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

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/faqsection/faqpage';

// function App() {
//   const [language, setLanguage] = useState('en');
//   const location = useLocation();
//   const navigate = useNavigate();

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
//   };

//   useEffect(() => {
//     const pathParts = location.pathname.split('/');
//     const currentLang = pathParts[1];

//     if (currentLang === 'es' || currentLang === 'en') {
//       setLanguage(currentLang);
//     } else {
//       navigate('/en/home');
//     }
//   }, [location.pathname, navigate]);

//   return (
//     <>
//       <Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />
//       <Routes>
//         <Route path="/en/home" element={<HomePage language={language} />} />
//         <Route path="/es/home" element={<HomePage language={language} />} />
//         <Route path="/en/faq" element={<FAQPage language={language} />} />
//         <Route path="/es/faq" element={<FAQPage language={language} />} />
//         <Route path="/" element={<Navigate to="/en/home" />} />
//       </Routes>
//     </>
//   );
// }

// const MainApp = () => (
//   <Router>
//     <App />
//   </Router>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MainApp />
//   </React.StrictMode>
// );

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';

// function App() {
//   const [language, setLanguage] = useState('en');
//   const location = useLocation();
//   const navigate = useNavigate();

//   const toggleLanguage = () => {
//     const newLang = language === 'en' ? 'es' : 'en';
//     const newPath = location.pathname.replace(`/${language}`, `/${newLang}`);
//     setLanguage(newLang);
//     navigate(newPath);
//   };

//   useEffect(() => {
//     const pathParts = location.pathname.split('/');
//     const currentLang = pathParts[1];

//     if (currentLang === 'es' || currentLang === 'en') {
//       setLanguage(currentLang);
//     } else {
//       navigate('/en/home');
//     }
//   }, [location.pathname, navigate]);

//   return (
//     <>
//       <Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />

//       <Routes>
//         <Route path="/:lang/home" element={<HomePage language={language} />} />
//         <Route path="/:lang/faq" element={<FAQPage language={language} />} />
//         <Route path="/" element={<Navigate to="/en/home" />} />
//       </Routes>
//     </>
//   );
// }

// const MainApp = () => (
//   <Router>
//     <App />
//   </Router>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MainApp />
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
// import { LanguageProvider } from './context/LanguageContext';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/:lang/home" element={<HomePage />} />
//         <Route path="/:lang/faq" element={<FAQPage />} />
//         <Route path="/" element={<Navigate to="/en/home" />} />
//       </Routes>
//     </>
//   );
// }

// const MainApp = () => (
//   <Router>
//     <LanguageProvider>
//       {' '}
//       <App />
//     </LanguageProvider>
//   </Router>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MainApp />
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
// import SignUpPage from './forms/signupform/signupform';
// import { LanguageProvider } from './context/LanguageContext';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/:lang/home" element={<HomePage />} />
//         <Route path="/:lang/faq" element={<FAQPage />} />
//         <Route path="/:lang/signup" element={<SignUpPage />} />{' '}
//         <Route path="/" element={<Navigate to="/en/home" />} />
//       </Routes>
//     </>
//   );
// }

// const MainApp = () => (
//   <Router>
//     <LanguageProvider>
//       <App />
//     </LanguageProvider>
//   </Router>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Outlet,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
// import SignUpForm from './forms/signupform/signupform'; // SignUpForm, not SignUpPage
// import { LanguageProvider } from './context/LanguageContext';

// function App() {
//   return (
//     <Router>
//       <LanguageProvider>
//         <Navbar />
//         <Routes>
//           {/* Main routes with nested outlet */}
//           <Route path="/:lang" element={<MainLayout />}>
//             <Route path="home" element={<HomePage />} />
//             <Route path="faq" element={<FAQPage />} />
//             {/* This nested route will show the SignUpForm on the same page */}
//             <Route path="signup" element={<SignUpForm />} />
//           </Route>

//           {/* Default redirect */}
//           <Route path="/" element={<Navigate to="/en/home" />} />
//         </Routes>
//       </LanguageProvider>
//     </Router>
//   );
// }

// const MainLayout = () => (
//   <div>
//     <Outlet />{' '}
//     {/* This will display HomePage, FAQPage, or SignUpForm depending on the route */}
//   </div>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Outlet,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
// import SignUpForm from './forms/signupform/signupform';
// import { LanguageProvider } from './context/LanguageContext';

// function App() {
//   return (
//     <Router>
//       <LanguageProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/:lang" element={<MainLayout />}>
//             <Route path="home" element={<HomePage />}>
//               <Route index element={<></>} />
//               <Route path="signup" element={<SignUpForm />} />
//             </Route>
//             <Route path="faq" element={<FAQPage />} />
//           </Route>
//           <Route path="/" element={<Navigate to="/en/home" />} />
//         </Routes>
//       </LanguageProvider>
//     </Router>
//   );
// }

// const MainLayout = () => (
//   <div>
//     <Outlet />{' '}
//   </div>
// );

// const HomePageLayout = () => (
//   <div>
//     <Outlet />
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Outlet,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
// import SignUpStepOne from './forms/signupform/signupform';
// import SignUpStepTwo from './forms/signupform/SignUpFormStepTwo';
// import { LanguageProvider } from './context/LanguageContext';

// function App() {
//   return (
//     <Router>
//       <LanguageProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/:lang" element={<MainLayout />}>
//             <Route path="home" element={<HomePage />} />
//             <Route path="faq" element={<FAQPage />} />
//             {/* Define the signup route with child routes */}
//             <Route path="signup" element={<SignUpLayout />}>
//               {/* Child routes for step 1 and step 2 */}
//               <Route path="step1" element={<SignUpStepOne />} />
//               <Route path="step2" element={<SignUpStepTwo />} />
//             </Route>
//           </Route>
//           <Route path="/" element={<Navigate to="/en/home" />} />
//         </Routes>
//       </LanguageProvider>
//     </Router>
//   );
// }

// const MainLayout = () => (
//   <div>
//     <Outlet /> {/* This renders child routes */}
//   </div>
// );

// const SignUpLayout = () => (
//   <div>
//     <h2>Sign Up</h2>
//     <Outlet /> {/* Renders either Step 1 or Step 2 depending on the route */}
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Outlet,
// } from 'react-router-dom';
// import './styles/global.scss';
// import Navbar from './components/global/navbar/Navbar';
// import HomePage from './pages/homepage/homepage';
// import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
// import SignUpForm from './forms/signupform/signupform';
// import SignUpFormStepTwo from './forms/signupform/SignUpFormStepTwo';
// import { LanguageProvider } from './context/LanguageContext';

// function App() {
//   return (
//     <Router>
//       <LanguageProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/:lang" element={<MainLayout />}>
//             <Route path="home" element={<HomePage />} />

//             {/* Define nested routes for signup */}
//             <Route path="signup" element={<SignUpForm />} />
//             <Route path="signup/step2" element={<SignUpFormStepTwo />} />

//             <Route path="faq" element={<FAQPage />} />
//           </Route>

//           {/* Default route */}
//           <Route path="/" element={<Navigate to="/en/home" />} />
//         </Routes>
//       </LanguageProvider>
//     </Router>
//   );
// }

// const MainLayout = () => (
//   <div>
//     <Outlet />{' '}
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import './styles/global.scss';
import Navbar from './components/global/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
import FAQPage from './components/pages/homepage/section/faqsection/faqpage';
import SignUpForm from './forms/signupform/signupform';
import SignUpFormStepTwo from './forms/signupform/SignUpFormStepTwo';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/:lang" element={<MainLayout />}>
            <Route path="home" element={<HomePage />}>
              <Route path="signup" element={<SignUpForm />} />
              <Route path="signup/step2" element={<SignUpFormStepTwo />} />
            </Route>
            <Route path="faq" element={<FAQPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/en/home" />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

const MainLayout = () => (
  <div>
    <Outlet />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
