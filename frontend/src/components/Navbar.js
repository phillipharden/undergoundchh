import React, { useState } from "react";
import "../css/Navbar.css";
import Logo from "../images/undergroundchh-logo-text.png";
import {
  SiApplemusic,
  SiSpotify,
  SiTiktok,
  SiYoutube,
  SiInstagram,
  SiBandsintown,
  SiBandcamp,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { TfiFacebook } from "react-icons/tfi";
import { IoShareSocial } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";


const Navbar = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleSocialMenu = () => setShowSocialMenu(!showSocialMenu);
  const toggleNavMenu = () => setShowNavMenu(!showNavMenu);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Underground CHH Logo" />
        </div>

        {/* First nav: Page links */}
        <ul className={`main-nav ${showNavMenu ? "active" : ""}`}>
       
          <li>
            <a href="#playlists">Playlists</a>
          </li>
        
        </ul>

        {/* Second nav: Social icons */}
        <ul className={`social-links ${showSocialMenu ? "active" : ""}`}>
          <li>
            <a
              href="https://www.facebook.com/UndergroundCHH/"
              target="_blank"
              rel="noopener noreferrer">
              <TfiFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/theundergroundchh/"
              target="_blank"
              rel="noopener noreferrer">
              <SiInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/UndergroundCHH"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitterX />
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/@TheUndergroundCHH"
              target="_blank"
              rel="noopener noreferrer">
              <SiYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@undergroundchh"
              target="_blank"
              rel="noopener noreferrer">
              <SiTiktok />
            </a>
          </li>
        
          <li>
            <a
              href="https://open.spotify.com/user/kw1mvjf3tz4c3k0azfw3j6zzr?si=4a5cea6760424506"
              target="_blank"
              rel="noopener noreferrer">
              <SiSpotify />
            </a>
          </li>
        
          <li>
            <a href="mailto:theundergroundchh@gmail.com">
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>

      <div>
        {/* Hamburger for nav menu */}
        <div
          className="hamburger nav-toggle"
          onClick={toggleNavMenu}
          aria-label="Toggle navigation menu">
          <GiHamburgerMenu />
        </div>

        {/* Hamburger for social links */}
        <div
          className="hamburger social-toggle"
          onClick={toggleSocialMenu}
          aria-label="Toggle social menu">
          <IoShareSocial />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
