import './OffersCard.css';
import cardImage from './../../assetes/images/hero.jpg';
const OffersCard = () => {
  return (
    <div className="OffersCard">
      <div className="offerCardTop">
        <div className="offerCardTopImage">
          <img src={cardImage} alt="" />
        </div>
        <span>14 &nbsp;&nbsp;FEB &nbsp;&nbsp;2022</span>
      </div>
      <div className="OfferCardMid">
        <span className="offerType">Relax</span>
        <span>3 Days, 3 Nights</span>
      </div>
      <div className="offerCardTitle">
        <span>Logo Sea</span>
      </div>
      <div className="offerCardPrice">
        <div className="offerCardPriceLeft">
          <span className="priceText">700$&nbsp;</span>
          <span>/&nbsp;Person</span>
        </div>
        <button className="bookNowBtn">Book Now</button>
      </div>
    </div>
  );
};

export default OffersCard;
