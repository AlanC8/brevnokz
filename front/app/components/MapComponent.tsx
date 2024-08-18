"use client";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";


const MapComponent: React.FC = () => {
  const position: LatLngExpression = [43.238949, 76.889709];
  const polyline: LatLngExpression[] = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={polyline} pathOptions={{ color: "green" }} />
    </MapContainer>
  );
};

export default MapComponent;
