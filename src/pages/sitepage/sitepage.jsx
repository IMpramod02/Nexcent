//import React from 'react';
import './SitePage.scss';
import LeftSection from './leftsection';
import RightSection from './rightsection';

const SitePage = () => {
  return (
    <div className="sitepage-container">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default SitePage;
