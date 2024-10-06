import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../Layout/images/logo-s.png";
import { HiHome } from "react-icons/hi2";
import { MdOutgoingMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const SideBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
      className="logo" 
      to="/" 
      onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink
           exact="true" 
           activeclassname="active" 
           to="/"
           onClick={() => setShowNav(false)}>

            <HiHome color="#d9d9d9" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FaUser color=" #d9d9d9" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <MdOutgoingMail color="#d9d9d9" />
          </NavLink>
          <IoClose
            onClick={() => setShowNav(false)}
            color="#ffd700"
            size="3em"
            className='close-icon'
          />
        </nav>
  
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/khushboo-bansiwal-65991a174/"
          >
            <FaLinkedin color="#d9d9d9" className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/?ref=github.co&shorturl=khushboobansiwal"
          >
            <IoLogoGithub color="#d9d9d9" className="anchor-icon" />
          </a>
        </li>
      </ul>
      <TfiMenuAlt
        onClick={() => setShowNav(true)}
        color="#d9d9d9"
        size="3em"
        className="hamburger-icon"
      />
    </div>
  );
};

export default SideBar;
