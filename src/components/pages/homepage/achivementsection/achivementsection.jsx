/*import React from 'react';
import './achivementsection';
import './achivementsection.scss';
import Icon1 from '../../../../assets/icons/Icon 1.png';
import Icon2 from '../../../../assets/icons/icon 2.png';
import Icon3 from '../../../../assets/icons/icon 3.png';
import Icon4 from '../../../../assets/icons/icon 4.png';

const AchivementsSection = () => {
  return (
    <section className="achivements-section row">
      <div className="col-6 left-side">
        <h1>
          Helping a local
          <br />
          <span className="text-green"> business reinvent itself</span>
        </h1>
        <div className=" achivement-stats">
          <p>we reached here with out hardworks and dedication</p>
        </div>
      </div>
      <div className="col-6 right-side"></div>
      <div className="icons and numbers">
        <div className="icons-with numbers">
          <img src={Icon1} alt="Icon 1" className="achivement-icon" />
          <span className="number">2,245,341</span>
          <p className="description">Members</p>
        </div>
        <div className="icon-with-number">
          <img src={Icon2} alt="Icon 2" className="achievement-icon" />
          <span className="number">46,328</span>
          <p className="description">clubs</p>
        </div>
        <div className="icon-with-number">
          <img src={Icon3} alt="Icon 3" className="achievement-icon" />
          <span className="number">828867</span>
          <p className="description">Events</p>
        </div>
        <div className="icon-with-number">
          <img src={Icon4} alt="Icon 4" className="achievement-icon" />
          <span className="number">1,926,436</span>
          <p className="description">Bookings</p>
        </div>
      </div>
    </section>
  );
};
export default AchivementsSection;*/
//import React from 'react';
import './achivementsection.scss';
import Icon1 from '../../../../assets/icons/Icon 1.png';
import Icon2 from '../../../../assets/icons/icon 2.png';
import Icon3 from '../../../../assets/icons/icon 3.png';
import Icon4 from '../../../../assets/icons/icon 4.png';

const AchivementsSection = () => {
  return (
    <section className="achivements-section row">
      <div className="col-6 left-side">
        <h1>
          Helping a local
          <br />
          <span className="text-green"> business reinvent itself</span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="col-6 right-side">
        <div className="icon-stats-grid">
          <div className="icon-item">
            <img src={Icon1} alt="Icon 1" className="achivement-icon" />
            <div className="icon-text">
              <span className="number">2,245,341</span>
              <p className="description">Members</p>
            </div>
          </div>
          <div className="icon-item">
            <img src={Icon2} alt="Icon 2" className="achivement-icon" />
            <div className="icon-text">
              <span className="number">46,328</span>
              <p className="description">Clubs</p>
            </div>
          </div>
          <div className="icon-item">
            <img src={Icon3} alt="Icon 3" className="achivement-icon" />
            <div className="icon-text">
              <span className="number">828,867</span>
              <p className="description">Event Bookings</p>
            </div>
          </div>
          <div className="icon-item">
            <img src={Icon4} alt="Icon 4" className="achivement-icon" />
            <div className="icon-text">
              <span className="number">1,926,436</span>
              <p className="description">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchivementsSection;
