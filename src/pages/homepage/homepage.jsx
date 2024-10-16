/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UnlockSection from '../../components/pages/homepage/section/unlocksection/unlocksection.jsx';
import CaringSection from '../../components/pages/homepage/section/caresection/caringsection.jsx';
import AchivementSection from '../../components/pages/homepage/section/achivementsection/achivementsection.jsx';
import Footer from '../../components/global/footer/footer.jsx';
import {
  HOME_PAGE_CONSTANTS,
  HOME_PAGE_CONSTANTS_ES,
  SITE_PAGE_CONSTANTS,
  SITE_PAGE_CONSTANTS_ES,
} from './homepageconstant.js';
import LanguageContext from '../../context/LanguageContext.jsx';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const homeConstants =
    language === 'en' ? HOME_PAGE_CONSTANTS : HOME_PAGE_CONSTANTS_ES;
  const siteConstants =
    language === 'en' ? SITE_PAGE_CONSTANTS : SITE_PAGE_CONSTANTS_ES;

  return (
    <>
      <Outlet />
      <UnlockSection {...homeConstants} />
      <UnlockSection {...siteConstants} />
      <CaringSection />
      <AchivementSection />
      <Footer />
    </>
  );
};

export default HomePage;
