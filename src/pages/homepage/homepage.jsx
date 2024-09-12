import UnlockSection from '../../components/pages/homepage/section/unlocksection/unlocksection.jsx';
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
