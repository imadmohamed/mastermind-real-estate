// "use client";

// import { Bath, Bed, Heart, House, Star } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// type CardProps = {
//   property: any; // If you have a type for property, use it here instead of 'any'
//   isFavorite: boolean;
//   onFavoriteToggle: () => void;
//   showFavoriteButton?: boolean;
//   propertyLink: string;
// };

// const Card = ({
//   property,
//   isFavorite,
//   onFavoriteToggle,
//   showFavoriteButton = true,
//   propertyLink,
// }: CardProps) => {
//   const [imgSrc, setImgSrc] = useState(
//     property.photoUrls?.[0] || "/placeholder.jpg"
//   );

//   useEffect(() => {
//     if (property.photoUrls?.length) {
//       setImgSrc(property.photoUrls[0]);
//     }
//   }, [property.photoUrls]);

//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-full mb-5">
//       <div className="relative group">
//         <div className="w-full h-48 relative overflow-hidden">
//           <Image
//             src={imgSrc}
//             alt={property.name}
//             fill
//             className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             onError={() => setImgSrc("/placeholder.jpg")}
//           />
//         </div>
//         <div className="absolute bottom-4 left-4 flex gap-2">
//           {property.isPetsAllowed && (
//             <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
//               Pets Allowed
//             </span>
//           )}
//           {property.isParkingIncluded && (
//             <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
//               Parking Included
//             </span>
//           )}
//         </div>
//         {showFavoriteButton && (
//           <button
//             className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer shadow-md"
//             onClick={(e) => {
//               e.stopPropagation();
//               onFavoriteToggle();
//             }}
//           >
//             <Heart
//               className={`w-5 h-5 ${
//                 isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
//               }`}
//             />
//           </button>
//         )}
//       </div>

//       <div className="p-4">
//         <h2 className="text-lg font-bold mb-1">
//           {propertyLink ? (
//             <Link
//               href={propertyLink}
//               className="hover:underline hover:text-primary"
//               scroll={false}
//             >
//               {property.name}
//             </Link>
//           ) : (
//             property.name
//           )}
//         </h2>

//         <p className="text-gray-600 text-sm mb-2 truncate">
//           {property?.location?.address}, {property?.location?.city}
//         </p>

//         <div className="flex justify-between items-center">
//           <div className="flex items-center mb-2">
//             <Star className="w-4 h-4 text-yellow-400 mr-1" />
//             <span className="font-semibold">
//               {property.averageRating?.toFixed(1) ?? "0.0"}
//             </span>
//             <span className="text-gray-600 ml-1">
//               ({property.numberOfReviews ?? 0} Reviews)
//             </span>
//           </div>
//           <p className="text-primary text-lg font-bold">
//             AED {property.pricePerMonth?.toFixed(0) ?? 0}
//           </p>
//         </div>

//         <hr className="my-3" />

//         <div className="flex justify-between items-center gap-4 text-gray-600 text-sm">
//           <span className="flex items-center">
//             <Bed className="w-5 h-5 mr-2" />
//             {property.beds} Bed
//           </span>
//           <span className="flex items-center">
//             <Bath className="w-5 h-5 mr-2" />
//             {property.baths} Bath
//           </span>
//           <span className="flex items-center">
//             <House className="w-5 h-5 mr-2" />
//             {property.squareFeet} sqft
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


"use client";

import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type CardProps = {
  property: any;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  showFavoriteButton?: boolean;
  propertyLink: string;
};

const Card = ({
  property,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  propertyLink,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    property.photoUrls?.[0] || "/placeholder.jpg"
  );

  useEffect(() => {
    if (property.photoUrls?.length) {
      setImgSrc(property.photoUrls[0]);
    }
  }, [property.photoUrls]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-[350px] mx-auto mb-6">
      {/* Image section */}
      <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] sm:w-full sm:ml-0 sm:left-0 sm:right-0 h-[250px] sm:h-48">
        <Image
          src={imgSrc}
          alt={property.name}
          fill
          className="object-cover"
          sizes="100vw"
          onError={() => setImgSrc("/placeholder.jpg")}
        />

        <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
          {property.isPetsAllowed && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Pets Allowed
            </span>
          )}
          {property.isParkingIncluded && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking Included
            </span>
          )}
        </div>

        {showFavoriteButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle();
            }}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>

      {/* Text content */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">
          <Link
            href={propertyLink}
            className="hover:underline hover:text-primary"
            scroll={false}
          >
            {property.name}
          </Link>
        </h2>

        <p className="text-gray-600 text-sm mb-2 truncate">
          {property?.location?.address}, {property?.location?.city}
        </p>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {property.averageRating?.toFixed(1) ?? "0.0"}
            </span>
            <span className="text-gray-600 ml-1">
              ({property.numberOfReviews ?? 0} Reviews)
            </span>
          </div>
          <p className="text-primary text-lg font-bold">
            AED {property.pricePerMonth?.toFixed(0) ?? 0}
          </p>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between items-center gap-4 text-gray-600 text-sm flex-wrap">
          <span className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            {property.beds} Bed
          </span>
          <span className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            {property.baths} Bath
          </span>
          <span className="flex items-center">
            <House className="w-5 h-5 mr-2" />
            {property.squareFeet} sqft
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;


