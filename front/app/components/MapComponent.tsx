"use client";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

interface MapComponentInterface {
  style?: string;
}

const MapComponent: React.FC<MapComponentInterface> = ({ style }) => {
  const position: LatLngExpression = [51.505, -0.09];
  const polyline: LatLngExpression[] = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  return (
    <div className="relative" style={{ zIndex: 0 }}>
      <MapContainer
        center={position}
        zoom={13}
        className={style}
        style={{ height: "200px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={polyline} pathOptions={{ color: "green" }} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
