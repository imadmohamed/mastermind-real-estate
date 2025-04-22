"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FooterSection from "../landing/FooterSection";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* 🔥 Top Banner Image - with bottom-focused view */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[50vh] relative -mt-20"
      >
        <Image
          src="/aboutus-baner.jpg" // <-- your banner image
          alt="About Banner"
          fill
          className="object-cover object-[center_80%] brightness-75" // 👈 focuses on bottom
          priority
        />
        {/* ✅ Text centered over the banner */}
        <div className="hidden md:flex absolute inset-0 bg-black/20 items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
                About Mastermind Real Estate
            </h1>
        </div>

      </motion.div>

      {/* Content Section */}
      <div className="pt-16 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h4 className="text-lg font-medium text-gray-500">About Us</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Mastermind Real Estate
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            A boutique real estate agency and investment advisory company,
            dedicated to providing a personal service putting ethics, honesty and
            professionalism first and foremost. Master Mind Real Estate Broker is
            specialized in land investments in Dubai. We have lands for sale across
            every location in Dubai, be it villa, building, or industrial land.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are connected with every major developer in Dubai and have top
            relationships with them. As a company that has been a primary presence
            in Dubai's property sector, we have maintained long-term relationships
            with our clients and can confidently say we're in a position to offer
            customers the best source of land properties.
          </p>
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
            Rahul Manuja, CEO
          </p>
        </motion.div>
      </div>
      <FooterSection />
    </main>
  );
}
