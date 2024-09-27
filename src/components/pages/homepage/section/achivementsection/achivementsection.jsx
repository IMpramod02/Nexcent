/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import './achivementsection.scss';
// import {
//   ACHIEVEMENTS_CONSTANTS,
//   ACHIEVEMENTS_CONSTANTS_ES,
// } from './achivementsection';

// const fetchAchievementsData = async () => {
//   const response = await fetch('http://localhost:5000/achivements');
//   const data = await response.json();
//   return data;
// };

// const AchivementsSection = ({ language }) => {
//   const [achievementsData, setAchievementsData] = useState({
//     members: 0,
//     clubs: 0,
//     'event bookings': 0,
//     payments: 0,
//   });

//   useEffect(() => {
//     const getData = async () => {
//       const data = await fetchAchievementsData();
//       setAchievementsData(data);
//     };

//     getData();
//   }, []);

//   const constants =
//     language === 'en' ? ACHIEVEMENTS_CONSTANTS : ACHIEVEMENTS_CONSTANTS_ES; //avoid using ternary statement it's not scalable

//   const icons = [
//     {
//       imgSrc: constants.icons[0].imgSrc,
//       number: achievementsData.members,
//       description: constants.icons[0].description,
//     },
//     {
//       imgSrc: constants.icons[1].imgSrc,
//       number: achievementsData.clubs,
//       description: constants.icons[1].description,
//     },
//     {
//       imgSrc: constants.icons[2].imgSrc,
//       number: achievementsData['event bookings'],
//       description: constants.icons[2].description,
//     },
//     {
//       imgSrc: constants.icons[3].imgSrc,
//       number: achievementsData.payments,
//       description: constants.icons[3].description,
//     },
//   ];

//   return (
//     <section className="achivements-section row">
//       <div className="col-6 left-side">
//         <h1>
//           {constants.title}
//           <br />
//           <span className="text-green">{constants.subtitle}</span>
//         </h1>
//         <p>{constants.description}</p>
//       </div>

//       <div className="col-6 right-side">
//         <div className="icon-stats-grid">
//           {icons.map((item, index) => (
//             <div key={index} className="icon-item">
//               <img
//                 src={item.imgSrc}
//                 alt={`Icon ${index + 1}`}
//                 className="achivement-icon"
//               />
//               <div className="icon-text">
//                 <span className="number">{item.number.toLocaleString()}</span>
//                 <p className="description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AchivementsSection;

import React, { useState, useEffect } from 'react';
import './achivementsection.scss';
import {
  ACHIEVEMENTS_CONSTANTS,
  ACHIEVEMENTS_CONSTANTS_ES,
} from './achivementsection';

const fetchAchievementsData = async () => {
  const response = await fetch('http://localhost:5000/achivements');
  const data = await response.json();
  return data;
};

const getLanguageConstants = (language) => {
  const languageMap = {
    en: ACHIEVEMENTS_CONSTANTS,
    es: ACHIEVEMENTS_CONSTANTS_ES,
  };

  return languageMap[language] || ACHIEVEMENTS_CONSTANTS;
};

const AchivementsSection = ({ language }) => {
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

  const constants = getLanguageConstants(language);

  const icons = [
    {
      imgSrc: constants.icons[0].imgSrc,
      number: achievementsData.members,
      description: constants.icons[0].description,
    },
    {
      imgSrc: constants.icons[1].imgSrc,
      number: achievementsData.clubs,
      description: constants.icons[1].description,
    },
    {
      imgSrc: constants.icons[2].imgSrc,
      number: achievementsData['event bookings'],
      description: constants.icons[2].description,
    },
    {
      imgSrc: constants.icons[3].imgSrc,
      number: achievementsData.payments,
      description: constants.icons[3].description,
    },
  ];

  return (
    <section className="achivements-section row">
      <div className="col-6 left-side">
        <h1>
          {constants.title}
          <br />
          <span className="text-green">{constants.subtitle}</span>
        </h1>
        <p>{constants.description}</p>
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
