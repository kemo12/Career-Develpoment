import './DestinationCard.css';
import dsCardImge from './../../assetes/images/hero.jpg';
import { BsFillStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
const DestinationCard = () => {
  return (
    <div className="DestinationCardContainer">
      <div className="desCardTop">
        <div className="dsCardImge">
          <img src={dsCardImge} alt="dsCardImge" />
        </div>
        <div className="dsCardRate">
          <BsFillStarFill
            style={{
              color: 'yellow',
              marginRight: '5px',
            }}
          />
          <span className="rateNum">4.5</span>
        </div>
      </div>
      <div className="desCardDown">
        <span className="desCardDownName">Kina Maountain</span>
        <span className="locationContainer">
          <MdLocationPin style={{ color: 'red' }} />
          <span>Cambodia</span>
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
