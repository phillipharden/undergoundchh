import "../css/Footer.css";
import Logo from "../images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <img src={Logo} alt="Underground CHH" className="footer-logo" />
        </div>
        <div>
          <p>&copy; Underground CHH {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
