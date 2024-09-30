/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
// import './FAQPage.scss';
// import { FAQ_CONSTANTS_EN, FAQ_CONSTANTS_ES } from './faqconstant';

// const getFAQConstants = (language) => {
//   const languageMap = {
//     en: FAQ_CONSTANTS_EN,
//     es: FAQ_CONSTANTS_ES,
//   };

//   return languageMap[language] || FAQ_CONSTANTS_EN;
// };

// const FAQPage = ({ language }) => {
//   const faqData = getFAQConstants(language);

//   return (
//     <div className="faq-page-container">
//       <h1>{faqData.title}</h1>
//       <div className="faq-list">
//         {faqData.faqs.map((faq, index) => (
//           <div key={index} className="faq-item">
//             <h3 className="faq-question">{faq.question}</h3>
//             <p className="faq-answer">{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQPage;

import React, { useContext } from 'react';
import './FAQPage.scss';
import { FAQ_CONSTANTS_EN, FAQ_CONSTANTS_ES } from './faqconstant';
import LanguageContext from '../../../../../context/LanguageContext';

const getFAQConstants = (language) => {
  const languageMap = { en: FAQ_CONSTANTS_EN, es: FAQ_CONSTANTS_ES };
  return languageMap[language] || FAQ_CONSTANTS_EN;
};

const FAQPage = () => {
  const { language } = useContext(LanguageContext);
  const faqData = getFAQConstants(language);

  return (
    <div className="faq-page-container">
      <h1>{faqData.title}</h1>
      <div className="faq-list">
        {faqData.faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;