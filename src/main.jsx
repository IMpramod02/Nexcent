/* eslint-disable react-refresh/only-export-components */
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
import LoginForm from './forms/loginform/loginform';
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
              <Route path="login" element={<LoginForm />} />
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
