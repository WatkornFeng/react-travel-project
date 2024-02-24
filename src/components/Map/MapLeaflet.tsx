import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import { VpnLock } from "@mui/icons-material";

// Function to get location from latitude and longitude coordinates
async function getLocationFromLatLng(lat: number, lng: number) {
  // Use reverse geocoding to get the location from the coordinates

  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch location data");
  }

  const data = await response.json();

  // Extract the location from the response
  const location = data.display_name;

  return location;
}

function MapLeaflet() {
  useEffect(() => {
    async function x() {
      try {
        const lo = await getLocationFromLatLng(14.195725, 100.485376);
        // console.log(lo);
      } catch (err) {
        console.log("err ka");
      }

      // console.log(lo);
    }
    x();
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      // style={{ height: "100vh" }}
      style={{ height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapLeaflet;
