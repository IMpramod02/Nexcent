/*import React from 'react';
import CalendarSection from '../../components/pages/calendersection/calendersection.jsx';
import CareSection from '../../components/pages/caresection/caringsection.jsx';
import UnlockContent from '../../components/pages/UnlockSection/UnlockContent';
//import './HomePage.scss';

const HomePage = () => {
  return (
    <main className="homepage">
      <CalendarSection />
      <UnlockContent />
      <CareSection />
    </main>
  );
};

export default HomePage;*/

/*import React from 'react';
import UnlockContent from '../../components/pages/unlocksection/unlockcontent';
import CalendarContent from '../../components/pages/calendersection/calendercontent';
import CaringSection from '../../components/pages/caresection/caringsection.jsx';

const HomePage = () => {
  return (
    <div>
      <UnlockContent />
      <CalendarContent />
      <CaringSection />{' '}
    </div>
  );
};

export default HomePage;*/

import UnlockSection from '../../components/pages/homepage/section/unlocksection/unlocksection.jsx';
//import { HOME_PAGE_CONSTANTS } from '../../components/pages/homepage/section/unlocksection/unlocksection.js';
//import { SITE_PAGE_CONSTANTS } from '../../components/pages/homepage/section/calendersection/constant.js';
import CaringSection from '../../components/pages/homepage/section/caresection/caringsection.jsx';
import {
  HOME_PAGE_CONSTANTS,
  SITE_PAGE_CONSTANTS,
} from './homepageconstant.js';

const HomePage = () => {
  return (
    <main>
      <UnlockSection {...HOME_PAGE_CONSTANTS} />
      <UnlockSection {...SITE_PAGE_CONSTANTS} />
      <CaringSection />
    </main>
  );
};

export default HomePage;
