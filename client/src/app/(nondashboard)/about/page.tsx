// app/about/page.tsx (Next.js 14 App Router)

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute top-0 left-0 w-full h-[80vh] -z-10 bg-fixed bg-center bg-cover bg-no-repeat brightness-50"
        style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
      ></div>

      {/* Intro Section */}
      <section className="h-[80vh] flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white text-center"
        >
          Who We Are
        </motion.h1>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-12">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-gray-300"
        >
          At <span className="text-pink-400 font-semibold">GlowHouse</span>, we blend fashion with soul. We're more than just a brand — we’re a lifestyle. Our mission is to empower the trendsetters, the creators, and the rule-breakers with bold, sustainable, and expressive designs.
        </motion.p>

        {/* CEO Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8"
        >
          <Image
            src="/images/ceo.jpg"
            alt="CEO"
            width={200}
            height={200}
            className="rounded-full object-cover border-4 border-white"
          />
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-bold text-white">Ayla Moreno</h2>
            <p className="text-gray-300">
              Founder & Creative Director. Ayla built GlowHouse from the ground up — turning streetwear into high-art. She believes fashion should be fearless, inclusive, and unforgettable.
            </p>
            <div className="flex items-center text-pink-400 gap-2">
              <FaQuoteLeft />
              <em>"Wear your energy. Not just your outfit."</em>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
