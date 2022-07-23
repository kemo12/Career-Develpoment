import './Opinions.css';
import { FcNext, FcPrevious } from 'react-icons/fc';
import OpinionCard from '../OpinionCard';
const Opinions = () => {
  return (
    <div className="opinionsContainer generalContainer">
      <div className="opinionsCard">
        <OpinionCard />
        <OpinionCard />
      </div>
      <div className="opinionsControl">
        <div className="controlIcon">
          <FcPrevious />
        </div>
        <div className="controlIcon">
          <FcNext />
        </div>
      </div>
    </div>
  );
};

export default Opinions;
