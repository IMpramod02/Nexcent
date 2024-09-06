import './UnlockSection.scss';
import mobil from '../../assets/icons/mobil.png';
import { HOME_PAGE_CONSTANTS } from './unlocksection';

const UnlockSection = () => {
  return (
    <div className="unlock-section-container">
      <div className="left-section">
        <img
          src={mobil}
          alt={HOME_PAGE_CONSTANTS.imageAlt}
          className="mobil-image"
        />
      </div>
      <div className="right-section">
        <h2>{HOME_PAGE_CONSTANTS.heading}</h2>
        <p>{HOME_PAGE_CONSTANTS.paragraph}</p>
        <button className="learn-more-button">
          {HOME_PAGE_CONSTANTS.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default UnlockSection;

/*import React from 'react';
import './HomePage.scss';
import LeftSection from './leftsection';
import RightSection from './rightsection';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default HomePage;*/
