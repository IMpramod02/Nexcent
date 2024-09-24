/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UnlockSection from '../../components/pages/homepage/section/unlocksection/unlocksection.jsx';
import CaringSection from '../../components/pages/homepage/section/caresection/caringsection.jsx';
import {
  HOME_PAGE_CONSTANTS,
  SITE_PAGE_CONSTANTS,
  SITE_PAGE_CONSTANTS_ES,
} from './homepageconstant.js';
import AchivementSection from '../../components/pages/homepage/section/achivementsection/achivementsection.jsx';
import Footer from '../../components/global/footer/footer.jsx';
import Navbar from '../../components/global/navbar/Navbar.jsx';

const HomePage = ({ language }) => {
  // const [language, setLanguage] = useState('en');

  // const toggleLanguage = () => {
  //   setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  // };
  const siteConstants =
    language === 'en' ? SITE_PAGE_CONSTANTS : SITE_PAGE_CONSTANTS_ES;
  const homeConstants = HOME_PAGE_CONSTANTS;
  //const language = 'en';

  console.log(language);
  return (
    <>
      {/*<Navbar toggleLanguage={toggleLanguage} currentLanguage={language} />*/}
      <UnlockSection {...homeConstants} />
      <UnlockSection {...siteConstants} />
      <CaringSection />
      <AchivementSection />
      <Footer />
    </>
  );
};

export default HomePage;
