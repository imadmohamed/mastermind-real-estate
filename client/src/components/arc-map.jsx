import React, { useRef } from 'react';

function ArcMap() {
  const mapRef = useRef(null); // Define the ref

  return (
    <div>
      <arcgis-map ref={mapRef} center="55.2606791, 25.0124691" zoom="11.5">
        <arcgis-zoom position="top-left"></arcgis-zoom>
      </arcgis-map>
    </div>
  );
}

export default ArcMap;