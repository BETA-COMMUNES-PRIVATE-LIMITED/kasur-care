import "leaflet/dist/leaflet.css";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const ContactMap = () => {

  // Example coordinates
  const position = [36.8508, -76.2859];

  return (
    <div className="w-full h-125 rounded-2xl overflow-hidden shadow-md">

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >

        {/* Map Layer */}
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker */}
        <Marker position={position}>

          <Popup>
            <div>
              <h2 className="font-semibold">
                BeachStreet USA
              </h2>

              <p className="text-sm">
                4500 Holland Office Park Suite
              </p>
            </div>
          </Popup>

        </Marker>

      </MapContainer>

    </div>
  );
};

export default ContactMap;