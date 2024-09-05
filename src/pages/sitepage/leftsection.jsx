import pana from '../../assets/icons/pana.png';
import { CONSTANTS } from './constant';

const LeftSection = () => {
  return (
    <div className="left-section">
      <img src={pana} alt={CONSTANTS.panaImageAlt} className="pana-image" />
    </div>
  );
};

export default LeftSection;
