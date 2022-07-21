import './Navbar.css';
const Navbar = () => {
  return (
    <div className="Navbar generalContainer">
      <div className="logo">
        <span>Treloo</span>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Review</a>
          </li>
          <li>
            <a href="#">Tips</a>
          </li>
          <li>
            <a href="#">Alerts</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <button>Blog</button>
      </div>
    </div>
  );
};

export default Navbar;
