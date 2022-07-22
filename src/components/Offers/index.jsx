import OffersCard from '../OffersCard';
import './Offers.css';
const Offers = () => {
  return (
    <div className="offersContainer generalContainer">
      <div className="offersTitle">
        <h2>Speacial Upcoming Offers</h2>
      </div>
      <div className="offersTabs">
        <button className="offersTabClicked">Team</button>
        <button>Couple</button>
        <button>Family</button>
      </div>
      <div className="offersCardsContainer">
        <OffersCard />
        <OffersCard />
        <OffersCard />
      </div>
    </div>
  );
};

export default Offers;
