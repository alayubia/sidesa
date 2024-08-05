// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [-7.7735784, 112.0797326];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '360px', width: '100%', marginBottom: '6px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;