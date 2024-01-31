import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";

import "@maptiler/sdk/dist/maptiler-sdk.css";
import "@maptiler/geocoding-control/style.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | maptilersdk.Map>(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);

  maptilersdk.config.apiKey = `${import.meta.env.VITE_MAPTILER_API_KEY}`;
  maptilersdk.config.primaryLanguage = maptilersdk.Language.ENGLISH;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current as HTMLDivElement,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });
    // const gc = new GeocodingControl();

    // map.current.addControl(gc, "top-left");
  }, [tokyo.lng, tokyo.lat, zoom]);

  return <div ref={mapContainer} className="map" />;
}
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// function Map() {
//   return (
//     <MapContainer
//       center={[51.505, -0.09]}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: "400px" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default Map;
