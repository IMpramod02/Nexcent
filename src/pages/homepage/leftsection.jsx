//import React from 'react';
import mobil from '../../assets/icons/mobil.png';
import { CONSTANTS } from './constant';

const LeftSection = () => {
  return (
    <div className="left-section">
      <img src={mobil} alt={CONSTANTS.mobilImageAlt} className="mobil-image" />
    </div>
  );
};

export default LeftSection;
