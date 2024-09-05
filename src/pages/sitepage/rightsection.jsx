//import React from 'react';
import { CONSTANTS } from './constant';

const RightSection = () => {
  return (
    <div className="right-section">
      <h2>{CONSTANTS.title}</h2>
      <p>{CONSTANTS.description}</p>
      <button className="learn-more-button">{CONSTANTS.buttonText}</button>
    </div>
  );
};

export default RightSection;
