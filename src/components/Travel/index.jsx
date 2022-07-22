import './Travel.css';
import travelImg from './../../assetes/images/hero.jpg';
const Travel = () => {
  return (
    <div className="travelContainer generalContainer">
      <div className="travelLeft">
        <div className="travelLeft-L">
          <span className="travelNum">5000+</span>
          <span className="travelTitle">TOURISTS</span>
        </div>
        <div className="travelLeft-img">
          <img src={travelImg} alt="travel" />
        </div>
        <div className="travelLeft-R">
          <div className="travelLeft-R-content">
            <span className="travelNum">300+</span>
            <span className="travelTitle">DESTINATIONS</span>
          </div>
          <div className="travelLeft-R-content">
            <span className="travelNum">150+</span>
            <span className="travelTitle">HOTELS</span>
          </div>
        </div>
      </div>
      <div className="travelRight">
        <span>Travel Any Corner of The World With Us</span>
        <p>
          Would you explore nature paradise in the world, lets find the best
          destination in world with us, would you explore nature paradise in the
          world, lets find the best destination in world with us, would you
          explore nature paradise in the world, lets find the best destination
          in world with us.
        </p>
        <p>
          would you explore nature paradise in the world, lets find the best
          destination in world with us.
        </p>
        <div className="contactBtn">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Travel;
