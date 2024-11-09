import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

function GoogleMap() {
	// Define coordinates for the two locations
	const indianLocation = { lat: 28.6139, lng: 77.2090 }; // Delhi, India
	const ukLocation = { lat: 51.5074, lng: -0.1278 }; // London, UK

	// Use state to track the current location
	const [location, setLocation] = useState({
		center: indianLocation,
		zoom: 11, // Adjust zoom level as needed
	});

	// Update location based on the selected button
	const showIndianLocation = () => {
		setLocation({ center: indianLocation, zoom: 11 });
	};

	const showUKLocation = () => {
		setLocation({ center: ukLocation, zoom: 11 });
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
				<button className="aximo-default-btn"   onClick={showIndianLocation}>Indian Address</button>
					<button className="aximo-default-btn" onClick={showUKLocation}>UK Address</button>
				</div>
				</div>
				
			</div>
		</div>
	);
}

export default GoogleMap;
