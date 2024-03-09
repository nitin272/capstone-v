import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faTrain, faPlane, faUtensils, faCompass, faLandmark, faPalette, faBars ,faHome, faUsers, faStar,faCalendarAlt, faEnvelope,faSignOutAlt,faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [newNavBar, setNewNavBar] = useState(false);

  const toggleNavbar = () => {
    setNewNavBar(!newNavBar);
  };

  const heroSectionStyle = {
    paddingTop: newNavBar ? '100px' : '0',
    transition: 'padding-top 0.5s ease',
    paddingBottom: newNavBar ? '100px' : '0', 
    backgroundPosition: newNavBar ? 'center 100px' : 'center center',
    transition : 'background-position 0.5s ease',
  };

  const navigationOptionsStyle = {
    marginTop: newNavBar ? '100px' : '0',
    transition: 'margin-top 0.5s ease',
  };

  return (
    <>
    <div className="home-container">
      <header className="header">
        <h1 className="logo-text">
          <FontAwesomeIcon icon={faCompass} /> ExploreXpress
        </h1>
        <div className="header-icons">
          <button className='Login'>Login</button>
        
          <FontAwesomeIcon icon={faBars} style={{ color: "#333", fontSize: "35px" }} onClick={toggleNavbar} /> Menu
     
        </div>
      </header>

      <main className="hero-section" style={heroSectionStyle}>
        {newNavBar && (
          <nav className="new-navbar">
            <ul className="new-navbar-options">
            <li><FontAwesomeIcon icon={faHome} style={{fontSize:"24px", color:"grey"}} /> Home</li>
        <li><FontAwesomeIcon icon={faUsers} style={{fontSize:"24px",color:"skyblue"}} /> About Us</li>
        <li><FontAwesomeIcon icon={faStar} style={{fontSize:"24px",color:"yellow"}}/>Review</li>
        <li><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"24px",color:"green"}}/> Contact</li>
        <li><FontAwesomeIcon icon={faCalendarAlt} style={{fontSize:"24px",color:"blue"}}/>My Plans</li>
        <li><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"24px",color:"purple"}}/> My Account</li>
        <li><FontAwesomeIcon icon={faSignOutAlt} style={{fontSize:"24px",color:"red"}}/> Logout</li>
            </ul>
          </nav>
        )}
       <div className="navigation-options" style={navigationOptionsStyle}>
    <ul>
        <li style={{ color: "#4B5320" }}>
            <FontAwesomeIcon icon={faHotel} style={{ color: "#8A2BE2", fontSize: "33px" }} /> Hotels
        </li>
        <li style={{ color: "#3E2723" }}>
            <FontAwesomeIcon icon={faTrain} style={{ color: "#0E4D92", fontSize: "33px" }} /> Trains
        </li>
        <li style={{ color: "#263238" }}>
            <FontAwesomeIcon icon={faPlane} style={{ color: "#00BCD4", fontSize: "33px" }} /> Flights
        </li>
        <li style={{ color: "black" }}>
            <FontAwesomeIcon icon={faUtensils} style={{ color: "#FF5722", fontSize: "33px" }} /> Restaurants
        </li>
        <li style={{ color: "Black" }}>
            <FontAwesomeIcon icon={faLandmark} style={{ color: " #f95959", fontSize: "33px",}} /> Famous-Places
        </li>
        <li style={{ color: "black" }}>
            <FontAwesomeIcon icon={faPalette} style={{ color: " #fdc57b", fontSize: "33px" }} /> Culture
        </li>
    </ul>
</div>

        <h2>Explore the world with ExploreXpress</h2>
      </main>
      
    </div>
    <section className="offers-section">
        <h3 className="section-title">Exclusive Offers</h3>
      </section>
    </>
  );
};

export default Home;
