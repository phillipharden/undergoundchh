import "./css/Reset.css";
import "./css/MyBootstrap.css";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import PlaylistSection from "./sections/PlaylistSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PlaylistSection />
      <Footer />
    </>
  );
};

export default App;
