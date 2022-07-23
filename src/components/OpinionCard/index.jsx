import './OpinionCard.css';
import { BsFillStarFill } from 'react-icons/bs';
import opinionImg from './../../assetes/images/hero.jpg';
const OpinionCard = () => {
  return (
    <div className="opinionCardContainer">
      <div className="opinionText">
        Our trip to Morocco was truly a nice ia a lifetime experience and we are
        so grateful to erveyone that made it happen seamlessly. Our travel
        planner, Jaouad, was Incerdible.
      </div>
      <div className="opinionAuthor">
        <span className="opinionAuthorName">-Vanad D</span>
        <span className="opinionAuthorMode">Happy Trelao</span>
      </div>
      <div className="opinionImgContainer">
        <img src={opinionImg} alt="opinionImg" />
        <div className="opinionCardRate">
          <BsFillStarFill
            style={{
              color: 'yellow',
              marginRight: '5px',
            }}
          />
          <span className="rateNum">4.5</span>
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
