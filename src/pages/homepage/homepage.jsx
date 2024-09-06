//import React from 'react';
import CalendarSection from '../../components/calendersection/calendersection.jsx';
import CareSection from '../../components/caresection/caringsection.jsx';
import UnlockSection from '../../components/unlocksection/unlocksection.jsx';
//import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Homepage</h1>
      <CalendarSection />
      <UnlockSection />
      <CareSection />
    </div>
  );
};

export default HomePage;
