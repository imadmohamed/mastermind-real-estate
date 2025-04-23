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
      {/* Banner - appears below navigation */}
      <div className="relative w-full h-[25vh] min-h-[200px]">
        <Image
          src="/aboutus-baner.jpg"
          alt="Dubai Properties"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Dubai Real Estate Map
          </h1>
        </div>
      </div>

      {/* Map - fills remaining space */}
      <div className="flex-grow">
        <ArcGISMapNext />
      </div>
    </div>
  );
};

export default Page;

