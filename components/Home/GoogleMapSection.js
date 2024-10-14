"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function GoogleMapSection() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: innerWidth * 0.45,
  };

  const center = {
    lat: 43.604,

    lng: 1.444,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",

    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    const bounds = new window.google.maps.LatLngBounds(center);

    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "4299f14a503d0e1a" }}
    >
      {/* Child components, such as markers, info windows, etc. */}

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMapSection;
