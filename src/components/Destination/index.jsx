import DestinationCard from '../DestinationCard';
import './Destination.css';
const Destination = () => {
  return (
    <div className="destinationContainer generalContainer">
      <div className="destinationTitle">
        <span>Recommended Destination</span>
      </div>
      <div className="destinationTabs">
        <button className="des-clicked">Popular</button>
        <button>Adventure</button>
        <button>Beath</button>
      </div>
      <div className="destinationCards">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </div>
  );
};

export default Destination;
