import Destination from '../../components/Destination';
import Footer from '../../components/Footer';
import Hero from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Offers from '../../components/Offers';
import Opinions from '../../components/Opinions';
import Register from '../../components/Register';
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
      <Destination />
      <Opinions />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
