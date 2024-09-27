/* eslint-disable react/prop-types */
import './CaringSection.scss';
import { CARING_CONSTANTS, CARING_CONSTANTS_ES } from './caringsection';

const getCaringConstants = (language) => {
  const languageMap = {
    en: CARING_CONSTANTS,
    es: CARING_CONSTANTS_ES,
  };

  return languageMap[language] || CARING_CONSTANTS;
};

const CaringSection = ({ language }) => {
  const constants = getCaringConstants(language);
  const { caringTitle, caringDescription, cards, readMoreIcon } = constants;

  return (
    <section
      className="caring-section-container"
      aria-labelledby="caring-title"
    >
      <div className="caring-content">
        <h2 id="caring-title">{caringTitle}</h2>
        <p>{caringDescription}</p>
        <div className="image-gallery">
          {cards.map((card, index) => (
            <div key={index} className="gallery-item">
              <img
                src={card.imageUrl}
                alt={`Image ${index + 1}`}
                className="gallery-image"
              />
              <div className="card">
                <p>{card.title}</p>
                <img src={readMoreIcon} alt="Read more icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaringSection;
