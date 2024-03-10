import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Import faMapMarkerAlt icon
import "./Train.css";

const Train = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [trainDetails, setTrainDetails] = useState(null); // Placeholder for train details

  const dummyTrainDetails = [
    { id: 1, trainName: "Express Train", departureTime: "08:00 AM", arrivalTime: "01:00 PM" },
    { id: 2, trainName: "Local Train", departureTime: "10:30 AM", arrivalTime: "02:30 PM" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set dummy train details
    setTrainDetails(dummyTrainDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="train-booking-form">
        <h2>Book Your Train</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="from">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> From:
            </label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
              className="large-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="to" className="middle-label">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> To:
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              className="large-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="large-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Search Trains
          </button>
        </form>
      </div>
      <div className="train-details-section">
        {trainDetails && (
          <div className="train-details">
            <h3 style={{fontSize: "40px"}}>Train Details</h3>
            <ul>
              {trainDetails.map((train) => (
                <li key={train.id}>
                  Train: {train.trainName}, Departure Time: {train.departureTime}, Arrival Time: {train.arrivalTime}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Train;
