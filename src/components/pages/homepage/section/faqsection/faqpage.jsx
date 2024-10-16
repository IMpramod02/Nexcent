/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './FAQPage.scss';
import { FAQ_CONSTANTS_EN, FAQ_CONSTANTS_ES } from './faqconstant';
import LanguageContext from '../../../../../context/LanguageContext';

const getFAQConstants = (language) => {
  //keep this in constantfileiteslf
  const languageMap = { en: FAQ_CONSTANTS_EN, es: FAQ_CONSTANTS_ES }; // in constant itself
  return languageMap[language] || FAQ_CONSTANTS_EN; //  instead of this use ??
};

const FAQPage = () => {
  const { language } = useContext(LanguageContext); // try to full it from path params i.e navigation lib itself
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
