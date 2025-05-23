// "use client";
// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { useAppSelector } from "@/state/redux";
// import { useGetPropertiesQuery } from "@/state/api";
// import { Property } from "@/types/prismaTypes";

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

// const Map = () => {
//   const mapContainerRef = useRef(null);
//   const filters = useAppSelector((state) => state.global.filters);
//   const {
//     data: properties,
//     isLoading,
//     isError,
//   } = useGetPropertiesQuery(filters);

//   useEffect(() => {
//     if (isLoading || isError || !properties) return;

//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current!,
//       style: "mapbox://styles/imadathambawa00/cm99uyfgj000801pcflzfh10o",
//       center: filters.coordinates || [-74.5, 40],
//       zoom: 9,
//     });

//     properties.forEach((property) => {
//       const marker = createPropertyMarker(property, map);
//       const markerElement = marker.getElement();
//       const path = markerElement.querySelector("path[fill='#3FB1CE']");
//       if (path) path.setAttribute("fill", "#000000");
//     });

//     const resizeMap = () => {
//       if (map) setTimeout(() => map.resize(), 700);
//     };
//     resizeMap();

//     return () => map.remove();
//   }, [isLoading, isError, properties, filters.coordinates]);

//   if (isLoading) return <>Loading...</>;
//   if (isError || !properties) return <div>Failed to fetch properties</div>;

//   return (
//     <div className="basis-5/12 grow relative rounded-xl">
//       <div
//         className="map-container rounded-xl"
//         ref={mapContainerRef}
//         style={{
//           height: "100%",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// const createPropertyMarker = (property: Property, map: mapboxgl.Map) => {
//   console.log(property);
//   const marker = new mapboxgl.Marker()
//     .setLngLat([
//       property.location.coordinates.longitude,
//       property.location.coordinates.latitude,
//     ])
//     .setPopup(
//       new mapboxgl.Popup().setHTML(
//         `
//  <div class="marker-popup">
//     <div class="marker-popup-image">
//         ${property.photoUrls && property.photoUrls.length > 0 ? `<img src="${property.photoUrls[0]}" alt="${property.name}" class="marker-popup-image" />` : ''}
//     </div>


//     <div> <a href="/search/${property.id}" target="_blank" class="marker-popup-title">${property.name}  </a>
//       <p class="marker-popup-price"> AED ${property.pricePerMonth}
//       <span class="marker-popup-price-unit"> </span>
//       </p>
//     </div>
//  </div>
// `
//       )
//     )
//     .addTo(map);
//   return marker;
// };

// export default Map;
"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "@/state/redux";
import { useGetPropertiesQuery } from "@/state/api";
import { Property } from "@/types/prismaTypes";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
  const mapContainerRef = useRef(null);
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);

  useEffect(() => {
    if (isLoading || isError || !properties) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/imadathambawa00/cm99uyfgj000801pcflzfh10o",
      center: filters.coordinates || [-74.5, 40],
      zoom: 8.5,
    });

    properties.forEach((property) => {
      const marker = createPropertyMarker(property, map);
      const markerElement = marker.getElement();
      const path = markerElement.querySelector("path[fill='#3FB1CE']");
      if (path) path.setAttribute("fill", "#000000");
    });

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map.remove();
  }, [isLoading, isError, properties, filters.coordinates]);

  if (isLoading) return <>Loading...</>;
  if (isError || !properties) return <div>Failed to fetch properties</div>;

  return (
    <div className="basis-5/12 grow relative rounded-xl hidden md:block">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

const createPropertyMarker = (property: Property, map: mapboxgl.Map) => {
  const marker = new mapboxgl.Marker()
    .setLngLat([
      property.location.coordinates.longitude,
      property.location.coordinates.latitude,
    ])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image">
            ${
              property.photoUrls && property.photoUrls.length > 0
                ? `<img src="${property.photoUrls[0]}" alt="${property.name}" class="marker-popup-image" />`
                : ""
            }
          </div>
          <div>
            <a href="/search/${property.id}" target="_blank" class="marker-popup-title">
              ${property.name}
            </a>
            <p class="marker-popup-price">
              AED ${property.pricePerMonth}
              <span class="marker-popup-price-unit"></span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};

export default Map;
