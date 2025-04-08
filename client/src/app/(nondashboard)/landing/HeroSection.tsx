"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  const slides = [
    {
      image: "/hero-i-1.jpg",
      title: "Ready to find your ideal land investment?",
      subtitle: "We have sold over 2 billion worth of plots so far."
    },
    {
      image: "/hero-i-2.jpg",
      title: "Discover your dream rental property",
      subtitle: "We have sold over 2 billion worth of plots so far."
    },
    {
      image: "/hero-i-3.jpg",
      title: "Premium properties in prime locations",
      subtitle: "We have sold over 2 billion worth of plots so far."
    }
  ];

  // Auto slide every 5 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setNextSlide((currentSlide + 1) % slides.length);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          })
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng.toString(),
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  return (
    <div className="relative h-screen md:h-[100vh] overflow-hidden">
      {/* Background images with smooth transition */}
      <div className="absolute inset-0">
        {/* Current slide */}
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
            alt="Property investment platform"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </motion.div>

        {/* Next slide (preloaded) */}
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
              alt="Next property slide"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </motion.div>
        )}
      </div>

      {/* Content - responsive positioning */}
      <div className="absolute inset-0 flex items-center px-4 md:px-16 pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl mx-auto md:mx-0"
        >
          <motion.div
            key={`title-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>

          {/* Search form - commented out as per your code */}
          <div className="flex flex-col space-y-4 max-w-md mx-auto md:mx-0">
  <div className="relative flex items-center">
    <Input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search by city, neighborhood or address"
      className="w-full rounded-full border-0 bg-white/95 backdrop-blur-sm h-14 md:h-16 px-6 pr-16 text-base md:text-lg focus-visible:ring-2 focus-visible:ring-black shadow-lg"
    />
    <Button
      onClick={handleLocationSearch}
      className="absolute right-1 bg-black hover:bg-black text-white rounded-full h-12 w-12 md:h-14 md:w-14 flex items-center justify-center shadow-md transition-all hover:scale-105"
      aria-label="Search properties"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </Button>
  </div>
</div>
        </motion.div>
      </div>

      {/* Slide indicators - centered on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setNextSlide(index);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white md:w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;