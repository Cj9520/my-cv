import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/CJ.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
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

)

export default Sidebar;