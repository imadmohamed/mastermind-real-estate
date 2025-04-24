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


import ArcGISMapNext from '../../../components/ArcGISMapNext';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col h-full">
    

      {/* Map - fills remaining space */}
      <div className="flex-grow">
        <ArcGISMapNext />
      </div>
    </div>
  );
};

export default Page;

