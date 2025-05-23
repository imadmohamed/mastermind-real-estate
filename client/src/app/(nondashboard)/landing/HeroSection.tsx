// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { setFilters } from "@/state";

// const HeroSection = () => {
//   const dispatch = useDispatch();
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [nextSlide, setNextSlide] = useState(1);

//   const slides = [
//     {
//       image: "/hero-i-1.jpg",
//       title: "Ready to find your ideal land investment?",
//       subtitle: "We have sold over 2 billion worth of plots so far."
//     },
//     {
//       image: "/hero-i-2.jpg",
//       title: "Discover your dream rental property",
//       subtitle: "We have sold over 2 billion worth of plots so far."
//     },
//     {
//       image: "/hero-i-3.jpg",
//       title: "Premium properties in prime locations",
//       subtitle: "We have sold over 2 billion worth of plots so far."
//     }
//   ];

//   // Auto slide every 5 seconds with smooth transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNextSlide((currentSlide + 1) % slides.length);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 1000);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentSlide, slides.length]);

//   const handleLocationSearch = async () => {
//     try {
//       const trimmedQuery = searchQuery.trim();
//       if (!trimmedQuery) return;

//       const response = await fetch(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//           trimmedQuery
//         )}.json?access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
//         }&fuzzyMatch=true`
//       );
//       const data = await response.json();
//       if (data.features && data.features.length > 0) {
//         const [lng, lat] = data.features[0].center;
//         dispatch(
//           setFilters({
//             location: trimmedQuery,
//             coordinates: [lat, lng],
//           })
//         );
//         const params = new URLSearchParams({
//           location: trimmedQuery,
//           lat: lat.toString(),
//           lng: lng.toString(),
//         });
//         router.push(`/search?${params.toString()}`);
//       }
//     } catch (error) {
//       console.error("error search location:", error);
//     }
//   };

//   return (
//     <div className="relative h-screen md:h-[100vh] overflow-hidden">
//       {/* Background images with smooth transition */}
//       <div className="absolute inset-0">
//         {/* Current slide */}
//         <motion.div
//           key={`current-${currentSlide}`}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt="Property investment platform"
//             fill
//             className="object-cover object-center"
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-10"></div>
//         </motion.div>

//         {/* Next slide (preloaded) */}
//         {nextSlide !== currentSlide && (
//           <motion.div
//             key={`next-${nextSlide}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[nextSlide].image}
//               alt="Next property slide"
//               fill
//               className="object-cover object-center"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//           </motion.div>
//         )}
//       </div>

//       {/* Content - responsive positioning */}
//       <div className="absolute inset-0 flex items-center px-4 md:px-16 pt-16 md:pt-0">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full max-w-2xl mx-auto md:mx-0"
//         >
//           <motion.div
//             key={`title-${currentSlide}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-center md:text-left"
//           >
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
//               {slides[currentSlide].title}
//             </h1>
//             <p className="text-lg sm:text-xl text-white mb-8">
//               {slides[currentSlide].subtitle}
//             </p>
//           </motion.div>

//           {/* Search form - commented out as per your code */}
        
//         </motion.div>
//       </div>

      
//     </div>
//   );
// };

// export default HeroSection;

// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { setFilters } from "@/state";

// const HeroSection = () => {
//   const dispatch = useDispatch();
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [nextSlide, setNextSlide] = useState(1);

//   const slides = [
//     {
//       image: "/hero-i-1.jpg",
//       titleLine1: "AED 3 Billion",
//       titleLine2: "in Land Sales and Counting",
//       subtitle: "Preferred partner for global investors & elite developers in Dubai",
//       additionalText: "Looking to invest in Dubai's most sought-after plots?",
//       description: "From beachfront luxury in Jumeirah to future-ready zones in Meydan we offer access to opportunities others can't.",
//       tagline: "Your trusted advisor in Dubai land investments for over a decade",
//       cta: "Contact us today"
//     },
//     {
//       image: "/hero-i-2.jpg",
//       titleLine1: "AED 3 Billion",
//       titleLine2: "in Land Sales and Counting",      
//       subtitle: "Preferred partner for global investors & elite developers in Dubai",
//       additionalText: "Looking to invest in Dubai's most sought-after plots?",
//       description: "From beachfront luxury in Jumeirah to future-ready zones in Meydan we offer access to opportunities others can't.",
//       tagline: "Your trusted advisor in Dubai land investments for over a decade",
//       cta: "Contact us today"
//     },
//     {
//       image: "/hero-i-3.jpg",
//       titleLine1: "AED 3 Billion",
//       titleLine2: "in Land Sales and Counting",
//       subtitle: "Preferred partner for global investors & elite developers in Dubai",
//       additionalText: "Looking to invest in Dubai's most sought-after plots?",
//       description: "From beachfront luxury in Jumeirah to future-ready zones in Meydan we offer access to opportunities others can't.",
//       tagline: "Your trusted advisor in Dubai land investments for over a decade",
//       cta: "Contact us today"
//     }
//   ];

//   // Auto slide every 5 seconds with smooth transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNextSlide((currentSlide + 1) % slides.length);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 1000);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentSlide, slides.length]);

//   const handleLocationSearch = async () => {
//     try {
//       const trimmedQuery = searchQuery.trim();
//       if (!trimmedQuery) return;

//       const response = await fetch(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//           trimmedQuery
//         )}.json?access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
//         }&fuzzyMatch=true`
//       );
//       const data = await response.json();
//       if (data.features && data.features.length > 0) {
//         const [lng, lat] = data.features[0].center;
//         dispatch(
//           setFilters({
//             location: trimmedQuery,
//             coordinates: [lat, lng],
//           })
//         );
//         const params = new URLSearchParams({
//           location: trimmedQuery,
//           lat: lat.toString(),
//           lng: lng.toString(),
//         });
//         router.push(`/search?${params.toString()}`);
//       }
//     } catch (error) {
//       console.error("error search location:", error);
//     }
//   };

//   return (
//     <div className="relative h-screen md:h-[100vh] overflow-hidden">
//       {/* Background images with smooth transition */}
//       <div className="absolute inset-0">
//         {/* Current slide */}
//         <motion.div
//           key={`current-${currentSlide}`}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt="Property investment platform"
//             fill
//             className="object-cover object-center"
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//           />
//         </motion.div>

//         {/* Next slide (preloaded) */}
//         {nextSlide !== currentSlide && (
//           <motion.div
//             key={`next-${nextSlide}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[nextSlide].image}
//               alt="Next property slide"
//               fill
//               className="object-cover object-center"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//             />
//           </motion.div>
//         )}
//       </div>

//       {/* Content - centered alignment */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full max-w-4xl text-center"
//         >
//           {/* Title outside the box */}
//           <motion.div
//             // key={`title-${currentSlide}`}
//             // initial={{ opacity: 0 }}
//             // animate={{ opacity: 1 }}
//             // transition={{ duration: 0.5 }}
//           >
//              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
//               {slides[currentSlide].titleLine1}
//             </h1>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//               {slides[currentSlide].titleLine2}
//             </h1>
//           </motion.div>

//           {/* Semi-transparent box for other content */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm mx-auto max-w-2xl"
//           >
//             <p className="text-lg sm:text-xl text-white mb-4">
//               {slides[currentSlide].subtitle}
//             </p>
            
//             <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4 mb-4">
//               {slides[currentSlide].additionalText}
//             </h2>
//             <p className="text-lg text-white mb-4">
//               {slides[currentSlide].description}
//             </p>
//             <p className="text-white italic mb-6">
//               *** {slides[currentSlide].tagline} ***
//             </p>
//             <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
//               {slides[currentSlide].cta}
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

const HeroSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isArabic, setIsArabic] = useState(false);

  const slides = [
    {
      image: "/hero-i-1.jpg",
      en: {
        titleLine1: "AED 3 Billion",
        titleLine2: "in Land Sales and Counting",
        subtitle: "Preferred partner for global investors & elite developers in Dubai",
        additionalText: "Looking to invest in Dubai's most sought-after plots?",
        description: "From beachfront luxury in Jumeirah to future-ready zones in Meydan we offer access to opportunities others can't.",
        tagline: "Your trusted advisor in Dubai land investments for over a decade",
        cta: "Contact us today"
      },
      ar: {
        titleLine1: "٣ مليار درهم",
        titleLine2: "مبيعات أراضٍ وأكثر",
        subtitle: "الشريك المفضل للمستثمرين العالميين والمطورين النخبة في دبي",
        additionalText: "هل ترغب في الاستثمار في أكثر الأراضي طلبًا في دبي؟",
        description: "من الواجهة البحرية الفاخرة في جميرا إلى مناطق المستقبل في ميدان، نقدم فرصًا لا يستطيع الآخرون تقديمها.",
        tagline: "مستشارك الموثوق في استثمارات الأراضي في دبي لأكثر من عقد",
        cta: "تواصل معنا اليوم"
      }
    },
    {
      image: "/hero-i-2.jpg",
      en: {
        titleLine1: "AED 3 Billion",
        titleLine2: "in Land Sales and Counting",
        subtitle: "Preferred partner for global investors & elite developers in Dubai",
        additionalText: "Looking to invest in Dubai's most sought-after plots?",
        description: "From beachfront luxury in Jumeirah to future-ready zones in Meydan we offer access to opportunities others can't.",
        tagline: "Your trusted advisor in Dubai land investments for over a decade",
        cta: "Contact us today"
      },
      ar: {
        titleLine1: "٣ مليار درهم",
        titleLine2: "مبيعات أراضٍ وأكثر",
        subtitle: "الشريك المفضل للمستثمرين العالميين والمطورين النخبة في دبي",
        additionalText: "هل ترغب في الاستثمار في أكثر الأراضي طلبًا في دبي؟",
        description: "من الواجهة البحرية الفاخرة في جميرا إلى مناطق المستقبل في ميدان، نقدم فرصًا لا يستطيع الآخرون تقديمها.",
        tagline: "مستشارك الموثوق في استثمارات الأراضي في دبي لأكثر من عقد",
        cta: "تواصل معنا اليوم"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNextSlide((currentSlide + 1) % slides.length);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handleToggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const t = isArabic ? slides[currentSlide].ar : slides[currentSlide].en;

  return (
    <div className="relative h-screen md:h-[100vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          key={`current-${currentSlide}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Property"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {nextSlide !== currentSlide && (
          <motion.div
            key={`next-${nextSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[nextSlide].image}
              alt="Next slide"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        )}
      </div>

      {/* Language Toggle */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50">
        <Button
          className="bg-black text-white px-4 py-2 text-sm rounded-full"
          onClick={handleToggleLanguage}
        >
          {isArabic ? "EN" : "AR"}
        </Button>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            {t.titleLine1}
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.titleLine2}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm mx-auto max-w-2xl"
          >
            <p className="text-lg sm:text-xl text-white mb-4">{t.subtitle}</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4 mb-4">
              {t.additionalText}
            </h2>
            <p className="text-lg text-white mb-4">{t.description}</p>
            <p className="text-white italic mb-6">*** {t.tagline} ***</p>
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
              {t.cta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
