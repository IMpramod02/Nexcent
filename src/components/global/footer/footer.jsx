import './footer.scss';
import leftImage from '../../../assets/images/Company.png';

const footerData = [
  {
    title: 'Company',
    links: ['About Us', 'Blog', 'Contact Us', 'Pricing', 'Testimonials'],
  },
  {
    title: 'Support',
    links: [
      'Help Center',
      'Terms of Service',
      'Legal',
      'Privacy Policy',
      'Status',
    ],
  },
];
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="col-12 col-md-4 footer-left">
          <img src={leftImage} alt="Footer Logo" className="footer-image" />
        </div>

        <div className="col-12 col-md-4 col-lg-4 footer-center row">
          {footerData.map((section, index) => (
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

        <div className="col-12 col-lg-4 footer-right">
          <h4>Stay up to date</h4>
          <div className="subscription-form">
            <input
              type="email"
              placeholder="Your email address"
              className="subscription-input"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
