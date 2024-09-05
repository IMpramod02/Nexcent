//import React from 'react';
import './CaringPage.scss';
import { CARING_CONSTANTS } from './caringpage';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
const CaringPage = () => {
  return (
    <div className="caring-page-container">
      <div className="caring-content">
        <h2>{CARING_CONSTANTS.caringTitle}</h2>
        <p>{CARING_CONSTANTS.caringDescription}</p>
        <div className="image-gallery">
          <img src={image1} alt="Image 1" className="gallery-image" />
          <img src={image2} alt="Image 2" className="gallery-image" />
          <img src={image3} alt="Image 3" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default CaringPage;
