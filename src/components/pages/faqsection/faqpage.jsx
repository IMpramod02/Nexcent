/* eslint-disable react/prop-types */
import React from 'react';
import './FAQPage.scss';
import { FAQ_CONSTANTS_EN, FAQ_CONSTANTS_ES } from './faqconstant';

const FAQPage = ({ language }) => {
  const faqData = language === 'en' ? FAQ_CONSTANTS_EN : FAQ_CONSTANTS_ES;

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
