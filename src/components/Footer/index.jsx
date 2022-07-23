import './Footer.css';
const Footer = () => {
  return (
    <div className="Footer generalContainer">
      <div className="footerLeft">
        <span>&copy; Treloo LLC - All right reserved.</span>
      </div>
      <div className="footerRight">
        <ul>
          <li>Review</li>
          <li>Tips</li>
          <li>Alerts</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
