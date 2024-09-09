import './UnlockSection.scss';
import { HOME_PAGE_CONSTANTS } from './unlocksection';

const UnlockSection = () => {
  const { heading, paragraph, buttonLabel, imageAlt, imageUrl } =
    HOME_PAGE_CONSTANTS;

  return (
    <div className="unlock-section-container">
      <div className="banner-section">
        <img src={imageUrl} alt={imageAlt} className="mobil-image" />
      </div>
      <div className="content-section">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <button className="learn-more-button">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default UnlockSection;
