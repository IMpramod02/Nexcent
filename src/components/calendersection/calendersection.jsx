/*import React from 'react';
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

export default SitePage;*/

//import React from 'react';
import './calendersection.scss';
import pana from '../../assets/icons/pana.png';
import { SITE_PAGE_CONSTANTS } from './constant';

const CalendarSection = () => {
  return (
    <div className="calendar-section-container">
      <div className="left-section">
        <img
          src={pana}
          alt={SITE_PAGE_CONSTANTS.imageAlt}
          className="pana-image"
        />
      </div>
      <div className="right-section">
        <h2>{SITE_PAGE_CONSTANTS.heading}</h2>
        <p>{SITE_PAGE_CONSTANTS.paragraph}</p>
        <button className="learn-more-button">
          {SITE_PAGE_CONSTANTS.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default CalendarSection;
