// Import necessary dependencies and components
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faTrain, faPlane, faUtensils, faLandmark, faPalette } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';

// Home component
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <main className="hero-section">
          <div className="navigation-options">
            <ul>
              <li style={{ color: " #4B5320" }}>
                <FontAwesomeIcon icon={faHotel} style={{ color: "#8A2BE2", fontSize: "33px" }} /> Hotels
              </li>
              <li style={{ color: "#3E2723" }}>
                <Link to="/trains">
                  <FontAwesomeIcon icon={faTrain} style={{ color: "#0E4D92", fontSize: "33px" }} />Trains
                </Link>
              </li>
              <li style={{ color: "#263238" }}>
                <FontAwesomeIcon icon={faPlane} style={{ color: "#00BCD4", fontSize: "33px" }} /> Flights
              </li>
              <li style={{ color: "black" }}>
                <FontAwesomeIcon icon={faUtensils} style={{ color: "#FF5722", fontSize: "33px" }} /> Restaurants
              </li>
              <li style={{ color: "Black" }}>
                <FontAwesomeIcon icon={faLandmark} style={{ color: " #f95959", fontSize: "33px" }} /> Famous-Places
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
