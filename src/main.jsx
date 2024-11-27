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
// import LoginForm from './forms/loginform/loginform';
// import DashboardPage from './components/pages/homepage/section/dashboardsection/dashboard';
// import { LanguageProvider } from './context/LanguageContext';
// import AuthCheck from './components/global/AuthCheck';

// function App() {
//   return (
//     <Router>
//       <LanguageProvider>
//         <Navbar />
//         <AuthCheck>
//           <Routes>
//             <Route path="/:lang" element={<MainLayout />}>
//               <Route path="home" element={<HomePage />} />
//               <Route path="home/signup" element={<SignUpForm />} />
//               <Route path="home/signup/step2" element={<SignUpFormStepTwo />} />
//               <Route path="home/login" element={<LoginForm />} />
//               <Route path="faq" element={<FAQPage />} />
//               <Route path="dashboard" element={<DashboardPage />} />
//             </Route>
//             <Route path="/" element={<Navigate to="/en/home" />} />
//           </Routes>
//         </AuthCheck>
//       </LanguageProvider>
//     </Router>
//   );
// }

// const MainLayout = () => (
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

import React, { Suspense, lazy } from 'react';
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
import { LanguageProvider } from './context/LanguageContext';
import AuthCheck from './components/global/AuthCheck';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const FAQPage = lazy(() =>
  import('./components/pages/homepage/section/faqsection/faqpage')
);
const SignUpForm = lazy(() => import('./forms/signupform/signupform'));
const SignUpFormStepTwo = lazy(() =>
  import('./forms/signupform/SignUpFormStepTwo')
);
const LoginForm = lazy(() => import('./forms/loginform/loginform'));
const DashboardPage = lazy(() =>
  import('./components/pages/homepage/section/dashboardsection/dashboard')
);

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Navbar />
        <AuthCheck>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/:lang" element={<MainLayout />}>
                <Route path="home" element={<HomePage />} />
                <Route path="home/signup" element={<SignUpForm />} />
                <Route
                  path="home/signup/step2"
                  element={<SignUpFormStepTwo />}
                />
                <Route path="home/login" element={<LoginForm />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
              </Route>
              <Route path="/" element={<Navigate to="/en/home" />} />
            </Routes>
          </Suspense>
        </AuthCheck>
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
