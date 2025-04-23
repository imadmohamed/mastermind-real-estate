// 'use client';

// import { useEffect, useRef } from 'react';
// import Script from 'next/script';

// // Type declarations for the window object
// declare global {
//   interface Window {
//     esriConfig: any;
//     require: any;
//   }
// }

// const ArcGISMapNext = () => {
//   const mapRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.esriConfig = {
//         apiKey: 'YOUR_API_KEY_HERE',
//       };
//     }
//   }, []);

//   const handleArcGISLoad = () => {
//     if (typeof window !== 'undefined' && window.require) {
//       window.require(
//         ['esri/Graphic', 'esri/Map', 'esri/layers/GraphicsLayer'],
//         (Graphic: any, Map: any, GraphicsLayer: any) => {
//           const arcgisMap = document.querySelector('arcgis-map') as any;
//           if (!arcgisMap) return;

//           const graphicsLayer = new GraphicsLayer();

//           arcgisMap.map = new Map({
//             basemap: 'arcgis/topographic',
//             layers: [graphicsLayer],
//           });

//           // Point
//           const point = {
//             type: 'point',
//             longitude: -118.80657463861,
//             latitude: 34.0005930608889,
//           };

//           const simpleMarkerSymbol = {
//             type: 'simple-marker',
//             color: [226, 119, 40],
//             outline: {
//               color: [255, 255, 255],
//               width: 1,
//             },
//           };

//           const pointGraphic = new Graphic({
//             geometry: point,
//             symbol: simpleMarkerSymbol,
//           });
//           graphicsLayer.add(pointGraphic);

//           // Polyline
//           const polyline = {
//             type: 'polyline',
//             paths: [
//               [-118.821527826096, 34.0139576938577],
//               [-118.814893761649, 34.0080602407843],
//               [-118.808878330345, 34.0016642996246],
//             ],
//           };

//           const simpleLineSymbol = {
//             type: 'simple-line',
//             color: [226, 119, 40],
//             width: 2,
//           };

//           const polylineGraphic = new Graphic({
//             geometry: polyline,
//             symbol: simpleLineSymbol,
//           });
//           graphicsLayer.add(polylineGraphic);

//           // Polygon
//           const polygon = {
//             type: 'polygon',
//             rings: [
//               [-118.818984489994, 34.0137559967283],
//               [-118.806796597377, 34.0215816298725],
//               [-118.791432890735, 34.0163883241613],
//               [-118.79596686535, 34.008564864635],
//               [-118.808558110679, 34.0035027131376],
//             ],
//           };

//           const simpleFillSymbol = {
//             type: 'simple-fill',
//             color: [227, 139, 79, 0.8],
//             outline: {
//               color: [255, 255, 255],
//               width: 1,
//             },
//           };

//           const popupTemplate = {
//             title: '{Name}',
//             content: '{Description}',
//           };

//           const attributes = {
//             Name: 'Graphic',
//             Description: 'I am a polygon',
//           };

//           const polygonGraphic = new Graphic({
//             geometry: polygon,
//             symbol: simpleFillSymbol,
//             attributes,
//             popupTemplate,
//           });

//           graphicsLayer.add(polygonGraphic);
//         }
//       );
//     }
//   };

//   return (
//     <>
//       <Script
//         src="https://js.arcgis.com/calcite-components/3.0.3/calcite.esm.js"
//         type="module"
//         strategy="afterInteractive"
//       />
//       <Script
//         src="https://js.arcgis.com/map-components/4.32/arcgis-map-components.esm.js"
//         type="module"
//         strategy="afterInteractive"
//       />
//       <Script
//         src="https://js.arcgis.com/4.32/"
//         strategy="afterInteractive"
//         onLoad={handleArcGISLoad}
//       />

//       {/* External CSS */}
//       <style jsx global>{`
//         @import url('https://js.arcgis.com/4.32/esri/themes/light/main.css');
//         arcgis-map {
//           width: 100%;
//           height: 100%;
//           display: block;
//           padding: 0;
//           margin: 0;
//         }
//       `}</style>

//       <arcgis-map ref={mapRef} center="-118.805, 34.027" zoom="13">
//         <arcgis-zoom position="top-left"></arcgis-zoom>
//       </arcgis-map>
//     </>
//   );
// };

// export default ArcGISMapNext;


'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import ArcMap from "../components/arc-map"
import Banner from "../components/banner"

// Type declarations for custom ArcGIS web components
declare global {
  interface Window {
    esriConfig: any;
    require: any;
  }

  namespace JSX {
    interface IntrinsicElements {
      'arcgis-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        center?: string;
        zoom?: string;
        ref?: React.Ref<HTMLElement>;
        map?: any; // Add this property to support dynamic map assignment
      };
      'arcgis-zoom': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: string;
      };
    }
  }
}

const ArcGISMapNext = () => {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.esriConfig = {
        apiKey: 'AAPTxy8BH1VEsoebNVZXo8HurDYlwQfsui3QcFubojHCp0BRFrQ8g5utzySCpv2At8MclB-Re8Ur0PBmv-mX_QGt9sZerw6I8rLkwFBYRwGPez0Kkii1ljdT7xSwv0oNrHiq2UmX5119mxVo-Es2LpS23G5RZjXBBuxWCMOsi2OmMUMhWIzjTDpFm9vh_F5dgHeqpzenyeCpwHLAJmZh1I4D8Qw3J7S7dKT9jQ5Y7DOmlIE.AT1_5KOrYQj0',
      };
    }
  }, []);

  const handleArcGISLoad = () => {
    if (typeof window !== 'undefined' && window.require) {
      window.require(
        ['esri/Graphic', 'esri/Map', 'esri/layers/GraphicsLayer'],
        (Graphic: any, Map: any, GraphicsLayer: any) => {
          const arcgisMap = document.querySelector('arcgis-map') as any;
          if (!arcgisMap) return;

          const graphicsLayer = new GraphicsLayer();

          arcgisMap.map = new Map({
            basemap: 'arcgis/topographic',
            layers: [graphicsLayer],
          });

          // Point
          const point = {
            type: 'point',
            longitude: 55.296249,
            latitude: 25.2048,
          };

          const simpleMarkerSymbol = {
            type: 'simple-marker',
            color: [226, 119, 40],
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          };

          const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
          });
          graphicsLayer.add(pointGraphic);

          // Polyline
          const polyline = {
            type: 'polyline',
            paths: [
              [55.296249, 25.2048],
              [55.296249, 25.2048],
              [55.296249, 25.2048],
            ],
          };

          const simpleLineSymbol = {
            type: 'simple-line',
            color: [226, 119, 40],
            width: 2,
          };

          const polylineGraphic = new Graphic({
            geometry: polyline,
            symbol: simpleLineSymbol,
          });
          graphicsLayer.add(polylineGraphic);

          // Polygon
          const polygon = {
            type: 'polygon',
            rings: [
              [55.181742, 25.096216],
              [55.179549, 25.094907],
              [55.177455, 25.092876],
              [55.176259, 25.090980],
              [55.173966, 25.087278],

              [55.172874, 25.085438],
              [55.172689, 25.084671],
              [55.173019, 25.083699],
              [55.173267, 25.082932],
              [55.173700, 25.082259],

              [55.174320, 25.081604],
              [55.175084, 25.081062],
              [55.175826, 25.080648],
              [55.186530, 25.091263],
              [55.181742, 25.096216],

              
            ],
          };

          const simpleFillSymbol = {
            type: 'simple-fill',
            color: [227, 139, 79, 0.8],
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          };

          const popupTemplate = {
            title: '{Master Mind Real Estate}',
            content: '{Description}',
          };

          const attributes = {
            Name: 'Graphic',
            Description: 'I am a polygon',
          };

          const polygonGraphic = new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes,
            popupTemplate,
          });

          graphicsLayer.add(polygonGraphic);
        }
      );
    }
  };

  return (
    <>
    
      
      <Script
        src="https://js.arcgis.com/map-components/4.32/arcgis-map-components.esm.js"
        type="module"
        strategy="afterInteractive"
      />
      <Script
        src="https://js.arcgis.com/4.32/"
        strategy="afterInteractive"
        onLoad={handleArcGISLoad}
      />

      <style jsx global>{`
        @import url('https://js.arcgis.com/4.32/esri/themes/light/main.css');
        arcgis-map {
          width: 100%;
          height: 100vh;
          display: block;
          margin: 0;
          padding: 0;
        }
      `}</style>
        <ArcMap/>
     
    </>
  );
};

export default ArcGISMapNext;
