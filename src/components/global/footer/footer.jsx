import './footer.scss';
import { FOOTER_CONSTANTS_EN, FOOTER_CONSTANTS_ES } from './footer'; // Import both language constants

const Footer = ({ language }) => {
  // Choose constants based on the selected language
  const footerConstants =
    language === 'es' ? FOOTER_CONSTANTS_ES : FOOTER_CONSTANTS_EN;

  const {
    footerLeftImage,
    sections,
    subscriptionTitle,
    subscriptionPlaceholder,
  } = footerConstants; // Destructure the constants based on language

  return (
    <footer className="footer-container">
      <div className="row">
        {/* Left section of the footer with the image */}
        <div className="col-12 col-md-4 footer-left">
          <img
            src={footerLeftImage}
            alt="Footer Logo"
            className="footer-image"
          />
        </div>

        {/* Center section with footer links */}
        <div className="col-12 col-md-4 col-lg-4 footer-center row">
          {sections.map((section, index) => (
            <div key={index} className="col-6 col-md-6 footer-column">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right section with subscription form */}
        <div className="col-12 col-lg-4 footer-right">
          <h4>{subscriptionTitle}</h4>
          <div className="subscription-form">
            <input
              type="email"
              placeholder={subscriptionPlaceholder}
              className="subscription-input"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
