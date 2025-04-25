// import Banner from '@/components/banner'
// import React from 'react'
// import ArcGISMapNext from '../../../components/ArcGISMapNext'

// const page = () => {
//   return (
//     <div>
//         <ArcGISMapNext/>
        
//     </div>
//   )
// }

// export default page;

"use client";
import { useEffect, useState } from 'react';
import ArcGISMapNext from '../../../components/ArcGISMapNext';

const Page = () => {
  const [markerValues, setMarkerValues] = useState<any>([])
  useEffect(() => {
    const getData = async () => {
      // const response = await fetch('https://api.example.com/data');
      // const data = await response.json();
      // console.log(data);
      setMarkerValues(
        [
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

          [55.249004, 25.178062],
          [55.263420, 25.167568],
          [55.243151, 25.122533],
          [55.218897, 25.138381],
          [55.249004, 25.178062],

          
          
          
      ] 
      
      )
    }
    getData();
  },[] );
  return (
    <div className="flex flex-col h-full">
    

      {/* Map - fills remaining space */}
      <div className="flex-grow">
    {markerValues.length>0 && <ArcGISMapNext markerValues={markerValues}/>}

      </div>
    </div>
  );
};

export default Page;

