import Hero from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Offers from '../../components/Offers';
import Reservation from '../../components/Reservation';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reservation />
      <Offers />
    </div>
  );
};

export default Home;
