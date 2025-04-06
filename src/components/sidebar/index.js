import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import LogoS from '../../assets/images/CJ.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <div>
    {/* Hamburger Menu Button */}
    <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} color="#fff" size="2x" />
    </div>
          {/* Sidebar Navigation - Slide In */}
          <div className={`mobile-sidebar ${menuOpen ? 'active' : ''}`}>
        <nav>
          <NavLink exact="true" to="/" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
          <NavLink exact="true" to="/about" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faUser} /> About
          </NavLink>
          <NavLink exact="true" to="/contact" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </NavLink>
        </nav>
        <ul className="mobile-socials">
          <li><a href="https://www.linkedin.com/in/chirag-jindal-456682223/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://github.com/Cj9520" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.instagram.com/chirag__9520/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://x.com/Chirag9520" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
        </ul>
      </div>
    {/*desktop Sidebar */}
    <div className="nav-bar">
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo" />
            {/* <img className='sub-logo' src={LogoSubtitle} alt="cj" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/chirag-jindal-456682223/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a href="https://github.com/Cj9520" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/chirag__9520/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a href="https://x.com/Chirag9520" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faXTwitter} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>

    </div>
);

}
export default Sidebar;