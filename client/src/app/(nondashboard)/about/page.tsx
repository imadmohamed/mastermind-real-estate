// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import FooterSection from "../landing/FooterSection";

// export default function AboutPage() {
//   return (
//     <main className="bg-white text-black">
//       {/* 🔥 Top Banner Image - with bottom-focused view */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="w-full h-[50vh] relative -mt-20"
//       >
//         <Image
//           src="/aboutus-baner.jpg" // <-- your banner image
//           alt="About Banner"
//           fill
//           className="object-cover object-[center_80%] brightness-75" // 👈 focuses on bottom
//           priority
//         />
//         {/* ✅ Text centered over the banner */}
//         <div className="hidden md:flex absolute inset-0 bg-black/20 items-center justify-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
//                 About Mastermind Real Estate
//             </h1>
//         </div>

//       </motion.div>

//       {/* Content Section */}
//       <div className="pt-16 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
//         {/* Left Column */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1 space-y-6"
//         >
//           <h4 className="text-lg font-medium text-gray-500">About Us</h4>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-black">
//             Mastermind Real Estate
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             A boutique real estate agency and investment advisory company,
//             dedicated to providing a personal service putting ethics, honesty and
//             professionalism first and foremost. Master Mind Real Estate Broker is
//             specialized in land investments in Dubai. We have lands for sale across
//             every location in Dubai, be it villa, building, or industrial land.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             We are connected with every major developer in Dubai and have top
//             relationships with them. As a company that has been a primary presence
//             in Dubai's property sector, we have maintained long-term relationships
//             with our clients and can confidently say we're in a position to offer
//             customers the best source of land properties.
//           </p>
//         </motion.div>

//         {/* Right Column: CEO Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1 flex flex-col items-center"
//         >
//           <Image
//             src="/CEO-Picture.jpeg"
//             alt="Rahul Manuja"
//             width={400}
//             height={500}
//             className="rounded-xl shadow-lg object-cover"
//           />
//           <p className="mt-4 text-lg font-semibold text-center">
//             Rahul Manuja, CEO
//           </p>
//         </motion.div>
//       </div>
//       <FooterSection />
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FooterSection from "../landing/FooterSection";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const content = {
    en: {
      heading: "About Mastermind Real Estate",
      about: "About Us",
      title: "Mastermind Real Estate",
      para1: `A boutique real estate agency and investment advisory company,
      dedicated to providing a personal service putting ethics, honesty and
      professionalism first and foremost. Master Mind Real Estate Broker is
      specialized in land investments in Dubai. We have lands for sale across
      every location in Dubai, be it villa, building, or industrial land.`,
      para2: `We are connected with every major developer in Dubai and have top
      relationships with them. As a company that has been a primary presence
      in Dubai's property sector, we have maintained long-term relationships
      with our clients and can confidently say we're in a position to offer
      customers the best source of land properties.`,
      ceo: "Rahul Manuja, CEO",
    },
    ar: {
      heading: "عن شركة ماسترمايند العقارية",
      about: "معلومات عنا",
      title: "ماسترمايند العقارية",
      para1: `شركة عقارية متخصصة في تقديم خدمات استشارية واستثمارية بأسلوب راقٍ، نضع الأخلاق
      والصدق والاحترافية في مقدمة أولوياتنا. نحن متخصصون في بيع الأراضي في جميع مناطق
      دبي سواء كانت فلل، مباني أو أراضي صناعية.`,
      para2: `نحن على اتصال بجميع المطورين الرئيسيين في دبي ولدينا علاقات قوية معهم. لقد
      حافظنا على علاقات طويلة الأمد مع عملائنا ونفخر بقدرتنا على توفير أفضل العروض
      العقارية لهم.`,
      ceo: "راهول مانوجا، المدير التنفيذي",
    },
  };

  return (
    <main className={`bg-white text-black ${language === "ar" ? "text-right" : "text-left"}`}>
      {/* 🔥 Top Banner Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[50vh] relative -mt-20"
      >
        <Image
          src="/aboutus-baner.jpg"
          alt="About Banner"
          fill
          className="object-cover object-[center_80%] brightness-75"
          priority
        />
        <div className="hidden md:flex absolute inset-0 bg-black/20 items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            {content[language].heading}
          </h1>
        </div>
      </motion.div>

      {/* Content */}
      <div className="pt-16 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h4 className="text-lg font-medium text-gray-500">{content[language].about}</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            {content[language].title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">{content[language].para1}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{content[language].para2}</p>
        </motion.div>

        {/* Right Column: CEO Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center"
        >
          <Image
            src="/CEO-Picture.jpeg"
            alt="Rahul Manuja"
            width={400}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
          <p className="mt-4 text-lg font-semibold text-center">
            {content[language].ceo}
          </p>
        </motion.div>
      </div>

      {/* Floating Toggle Button (left-center) */}
      <button
        onClick={toggleLanguage}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        {language === "en" ? "AR" : "EN"}
      </button>
      

      <FooterSection />
    </main>
  );
}
