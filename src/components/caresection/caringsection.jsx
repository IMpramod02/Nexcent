import './CaringSection.scss';
import { CARING_CONSTANTS } from './caringsection';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import Readmore from '../../assets/icons/Readmore.png';

const CaringSection = () => {
  return (
    <div className="caring-section-container">
      <div className="caring-content">
        <h2>{CARING_CONSTANTS.caringTitle}</h2>
        <p>{CARING_CONSTANTS.caringDescription}</p>
        <div className="image-gallery">
          <div>
            <img src={image1} alt="Image 1" className="gallery-image" />
            <div className="card">
              Creating Streamlined Safegaurding Process with OneRen
              <img src={Readmore} alt="Read more" />
            </div>
          </div>
          <div>
            {' '}
            <img src={image2} alt="Image 2" className="gallery-image" />
            <div className="card">
              What are your safegaurding responsibilites and how can you manage
              them?
              <img src={Readmore} alt="Read more" />
            </div>
          </div>
          <div>
            {' '}
            <img src={image3} alt="Image 3" className="gallery-image" />
            <div className="card">
              Revamping the Membership Model with Triathlon Australia
              <img src={Readmore} alt="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaringSection;
