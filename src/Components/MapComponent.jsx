import React from "react";
import '../styles/MapComponent.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';


function MapComponent() {
    const position = [50.63836669921875, 3.0963664054870605]

  return (
    <>
      <MapContainer 
        className='map_footer'
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Institut de Combat, France <br /> 11 rue Louis Braille, Mons-en-Baroeul</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default MapComponent;
