import "../css/HeroSection.css";
import Logo from "../images/logo.png";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-container">
            <div>
              <img src={Logo} alt="Underground CHH Logo" className="logo" />
            </div>
            <div className="hero-text">
              <p className="brand-font">
                Welcome to the echo chamber of faith and fire — Underground CHH.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
