import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

function GoogleMap() {
  // Define coordinates for the two locations
  const indianLocation = { lat: 28.7371, lng: 77.0672 }; // Sector-24, Rohini, Delhi, India

  const ukLocation = { lat: 52.8010, lng: -1.6367 }; // Burton-on-Trent, UK

  // Use state to track the current location and active button
  const [location, setLocation] = useState({
    center: indianLocation,
    zoom: 11, // Adjust zoom level as needed
  });
  const [activeLocation, setActiveLocation] = useState("India"); // Initial active location

  // Update location and active button based on the selected location
  const showIndianLocation = () => {
    setLocation({ center: indianLocation, zoom: 11 });
    setActiveLocation("India");
  };

  const showUKLocation = () => {
    setLocation({ center: ukLocation, zoom: 11 });
    setActiveLocation("UK");
  };

  return (
    <div className="section">
      <div className="container">
        <div className="aximo-map-wrap">
          <div id="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBHMkWn3dgHZnjmpxRGul1N5P7kyDZlEfQ" }}
              center={location.center}
              zoom={location.zoom}
            >
              <LocationPin lat={location.center.lat} lng={location.center.lng} />
            </GoogleMapReact>
          </div>
          <div className="button-container">
            <button
              className={`aximo-default-btn ${activeLocation === "India" ? "active" : ""}`}
              onClick={showIndianLocation}
            >
              Indian Address
            </button>
            <button
              className={`aximo-default-btn ${activeLocation === "UK" ? "active" : ""}`}
              onClick={showUKLocation}
            >
              UK Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
