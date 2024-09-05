/*import React from 'react';
import './HomePage.scss';
import mobil from '../../assets/icons/mobil.png';
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="left-section">
        <img src={mobil} alt="Mobil" className="mobil-image" />
      </div>
      <div className="right-section">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Spending three years at pixel-grade detail reveals the hidden
          intricacies of the digital world, where each pixel's minutiae
          contribute to the broader tapestry. It’s an immersion in the subtle
          dance of color and light, uncovering how seemingly insignificant
          elements coalesce into a compelling whole. The experience cultivates a
          meticulous eye for detail and a deep appreciation for the artistry
          behind digital creation. It’s a journey into the microcosm that shapes
          our visual .
        </p>
        <button className="learn-more-button">Learn more</button>
      </div>
    </div>
  );
};

export default HomePage;*/

//import React from 'react';
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

export default HomePage;
