import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapSection = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <MapContainer
        center={[0.3476, 32.5825]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0.3476, 32.5825]}>
          <Popup>Diabetes Care Center – Kampala</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
