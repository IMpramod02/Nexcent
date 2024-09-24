/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './achivementsection.scss';
import Icon1 from '../../../../../assets/icons/icon 1.png';
import Icon2 from '../../../../../assets/icons/icon 2.png';
import Icon3 from '../../../../../assets/icons/icon 3.png';
import Icon4 from '../../../../../assets/icons/icon 4.png';

const fetchAchievementsData = async () => {
  const response = await fetch('http://localhost:5000/achivements');
  const data = await response.json();
  return data;
};

const AchivementsSection = () => {
  const [achievementsData, setAchievementsData] = useState({
    members: 0,
    clubs: 0,
    'event bookings': 0,
    payments: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAchievementsData();
      setAchievementsData(data);
    };

    getData();
  }, []);

  const icons = [
    { imgSrc: Icon1, number: achievementsData.members, description: 'Members' },
    { imgSrc: Icon2, number: achievementsData.clubs, description: 'Clubs' },
    {
      imgSrc: Icon3,
      number: achievementsData['event bookings'],
      description: 'Event Bookings',
    },
    {
      imgSrc: Icon4,
      number: achievementsData.payments,
      description: 'Payments',
    },
  ];

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
          {icons.map((item, index) => (
            <div key={index} className="icon-item">
              <img
                src={item.imgSrc}
                alt={`Icon ${index + 1}`}
                className="achivement-icon"
              />
              <div className="icon-text">
                <span className="number">{item.number.toLocaleString()}</span>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchivementsSection;