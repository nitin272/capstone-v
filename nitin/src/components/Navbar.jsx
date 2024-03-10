import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import AuthForm from './Login';
import {
  faCompass,
  faBars,
  faHome,
  faUsers,
  faStar,
  faEnvelope,
  faCalendarAlt,
  faUserCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [newNavBar, setNewNavBar] = useState(false);

  const toggleNavbar = () => {
    setNewNavBar(!newNavBar);
  };

  return (
    <header className="header">
      <h1 className="logo-text">
        <FontAwesomeIcon icon={faCompass} /> ExploreXpress
      </h1>
      <div className="header-icons">
        <Link to="/login" className='Login'>Login</Link> {/* Use Link instead of button */}
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: '#333', fontSize: '35px' }}
          onClick={toggleNavbar}
        />
      </div>
      {newNavBar && (
        <nav className="new-navbar">
          <ul className="new-navbar-options">
            <li>
              <FontAwesomeIcon
                icon={faHome}
                style={{ fontSize: '24px', color: 'grey' }}
              />{' '}
              Home
            </li>
            <li>
              <FontAwesomeIcon
                icon={faUsers}
                style={{ fontSize: '24px', color: 'skyblue' }}
              />{' '}
              About Us
            </li>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: '24px', color: 'yellow' }}
              />
              Review
            </li>
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: '24px', color: 'green' }}
              />
              Contact
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ fontSize: '24px', color: 'blue' }}
              />
              My Plans
            </li>
            <li>
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ fontSize: '24px', color: 'purple' }}
              />
              My Account
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ fontSize: '24px', color: 'red' }}
              />
              Logout
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
