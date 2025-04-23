import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const soldproperties = () => {
  return (
    <div><motion.div
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
      </h1>
    </div>
  </motion.div></div>
  )
}

export default soldproperties