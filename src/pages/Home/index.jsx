import Hero from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Offers from '../../components/Offers';
import Reservation from '../../components/Reservation';
import Travel from '../../components/Travel';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reservation />
      <Offers />
      <Travel />
    </div>
  );
};

export default Home;
