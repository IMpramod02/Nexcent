/* eslint-disable react-refresh/only-export-components */
/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Hello Vite + React!</h1>
        <p>This is a sample React app with Vite and SCSS.</p>
        <HomePage />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
