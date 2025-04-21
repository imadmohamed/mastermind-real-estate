// "use client";

// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const CallToActionSection = () => {
//   return (
//     <div className="relative py-24 margin-top-10">
//       <Image
//         src="/landing-call-to-action.jpg"
//         alt="Rentiful Search Section Background"
//         fill
//         className="object-cover object-center"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0 md:mr-10">
//             <h2 className="text-2xl font-bold text-white">
//               Find Your Dream Rental Property
//             </h2>
//           </div>
//           <div>
//             <p className="text-white mb-3">
//               Discover a wide range of rental properties in your desired
//               location.
//             </p>
//             <div className="flex justify-center md:justify-start gap-4">
//               <button
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50"
//               >
//                 Search
//               </button>
//               <Link
//                 href="/signup"
//                 className="inline-block text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600"
//                 scroll={false}
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CallToActionSection;


//second change

"use client";

// import { motion } from "framer-motion";
// import React from "react";
// import Image from "next/image";

// const CallToActionSection = () => {
//   return (
//     <section className="relative py-24 px-4 sm:px-6 lg:px-8">
//       {/* Full-width Image Background with Text Overlay */}
//       <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
//         {/* Background Image */}
//         <Image
//           src="/about-us.jpg"
//           alt="Mastermind Real Estate Office"
//           fill
//           className="object-cover"
//           priority
//         />
        
//         {/* Dark Overlay for Text Readability */}
//         <div className="absolute inset-0 bg-black bg-opacity-40" />
        
//         {/* Text Content Centered on Image */}
//         <div className="relative h-full flex items-center justify-center">
//           <div className="max-w-4xl mx-auto p-8 text-center">
//             {/* Section Header */}
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold mb-8 text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               A bit about us
//             </motion.h2>

//             {/* Text Content */}
//             <div className="space-y-6 text-white">
//               {/* First Paragraph */}
//               <motion.p
//                 className="text-lg md:text-xl leading-relaxed"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <strong className="text-xl md:text-2xl font-semibold">
//                   Mastermind Real Estate, Specialist in Lands investments in Dubai.
//                 </strong>
//               </motion.p>

//               {/* Second Paragraph */}
//               <motion.p
//                 className="text-lg leading-relaxed"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 A boutique real estate agency and investment advisory company, dedicated to providing a personal service putting ethics, honesty and professionalism first and foremost. Master Mind Real Estate Broker is Specialized in Lands investments in Dubai.
//               </motion.p>

//               {/* Third Paragraph */}
//               <motion.p
//                 className="text-lg leading-relaxed"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 We have Lands for Sale across Every Location in Dubai, Be it Villa , Building or Industrial Land . We are Connected with Every Major Developer in Dubai and Having Top Relationship with them. As a company that has been in primary existence in Dubai's property sector, we have maintained long-term relationships with our clients and can confidently say, in a position to offer customers with the best source of Lands properties.
//               </motion.p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToActionSection;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const CallToActionSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [1, 0.8, 0.6]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  // Image reveal effect
  const imageClipPath = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section 
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Full-width Image Background with Parallax */}
      <motion.div 
        className="relative w-full h-[600px] rounded-xl overflow-hidden"
        style={{ y: yBg, opacity: opacityBg }}
      >
        {/* Background Image with Reveal Effect */}
        <motion.div style={{ clipPath: imageClipPath }}>
          <Image
            // src="/about-us.jpg"
            // alt="Mastermind Real Estate Office"
            // fill
            // className="object-cover"
            // priority
            src="/hero-i-1.jpg"
            alt="Mastermind Real Estate Office"
           fill
           className="object-cover"
           priority
          />
        </motion.div>
        
        {/* Dark Overlay with Scroll-based Opacity */}
        <motion.div 
          className="absolute inset-0 bg-black"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0.6]) }}
        />
        
        {/* Text Content with Scale Effect */}
        <motion.div 
          className="relative h-full flex items-center justify-center"
          style={{ scale: scaleText }}
        >
          <div className="max-w-4xl mx-auto p-8 text-center">
            {/* Section Header */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              A bit about us
            </motion.h2>

            {/* Text Content with Staggered Animation */}
            <div className="space-y-6 text-white">
              {/* First Paragraph */}
              <motion.p
                className="text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <strong className="text-xl md:text-2xl font-semibold">
                  Mastermind Real Estate, Specialist in Lands investments in Dubai.
                </strong>
              </motion.p>

              {/* Second Paragraph with Scroll-triggered Fade */}
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  delay: 0.3,
                  opacity: { duration: 0.8, ease: "easeOut" }
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                A boutique real estate agency and investment advisory company, dedicated to providing a personal service putting ethics, honesty and professionalism first and foremost. Master Mind Real Estate Broker is Specialized in Lands investments in Dubai.
              </motion.p>

              {/* Third Paragraph with Scroll Progress Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-lg leading-relaxed"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
                  }}
                >
                  We have Lands for Sale across Every Location in Dubai, Be it Villa, Building or Industrial Land. We are Connected with Every Major Developer in Dubai and Having Top Relationship with them.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements that Appear on Scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;