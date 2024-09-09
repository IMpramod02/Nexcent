//import React from 'react';
import CalendarSection from '../../components/pages/calendersection/calendersection.jsx';
import CareSection from '../../components/pages/caresection/caringsection.jsx';
import UnlockSection from '../../components/pages/unlocksection/unlocksection.jsx';
//import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <CalendarSection />
      <UnlockSection />
      <CareSection />
    </div>
  );
};

export default HomePage;
