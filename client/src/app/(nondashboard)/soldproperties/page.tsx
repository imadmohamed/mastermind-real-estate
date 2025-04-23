"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  altText: string;
  heading: string;
}

const SoldPropertiesBanner = ({ imageSrc, altText, heading }: BannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[50vh] relative -mt-20"
    >
      {/* Full-width banner image */}
      <Image
          src="/aboutus-baner.jpg"
          alt="Rahul Manuja"
          width={400}
          height={500}
          className="rounded-xl shadow-lg object-cover"
          />

      {/* Overlay with heading */}
      <div className="hidden md:flex absolute inset-0 bg-black/20 items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
          {heading}
        </h1>
      </div>
      

     
    </motion.div>
  );
};

export default SoldPropertiesBanner;

