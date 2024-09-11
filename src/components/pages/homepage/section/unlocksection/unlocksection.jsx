/* eslint-disable react/prop-types */
/*import './UnlockSection.scss';
import { HOME_PAGE_CONSTANTS } from './unlocksection';

const UnlockSection = () => {
  const { heading, paragraph, buttonLabel, imageAlt, imageUrl } =
    HOME_PAGE_CONSTANTS;

  return (
    <section className="unlock-section-container">
      <div className="banner-section">
        <img src={imageUrl} alt={imageAlt} className="mobil-image" />
      </div>
      <div className="content-section">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <button className="learn-more-button">{buttonLabel}</button>
      </div>
    </section>
  );
};

export default UnlockSection;*/

import './UnlockSection.scss';
const UnlockSection = ({
  heading,
  paragraph,
  buttonLabel,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="unlock-section-container">
      <div className="banner-section">
        <img src={imageUrl} alt={imageAlt} className="mobil-image" />
      </div>
      <div className="content-section">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <button className="learn-more-button">{buttonLabel}</button>
      </div>
    </section>
  );
};

export default UnlockSection;
