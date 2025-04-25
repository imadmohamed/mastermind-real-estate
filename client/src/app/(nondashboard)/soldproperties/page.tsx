"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../landing/FooterSection";

const SoldProperty = () => {
  const categories = [
    {
      title: "MAJAN",
      image: "/pexels-apasaric-325193.jpg",
      link: "/https://www.propertyfinder.ae/blog/wp-content/uploads/2023/05/5-92.jpg"
    },
    {
      title: "PALM JEBEL ALI",
      image: "/2024-02-04.jpg",
      link: "/properties?type=waterfront"
    },
    {
      title: "JEBEL ALI HILLS",
      image: "/como-residencesba2d50b8-c2c1-4897-9ca6-c26cdba91c08.webp",
      link: "/properties?type=private"
    },
    {
      title: "DAMAC agoons MOROCCO.",
      image: "/images.jpeg",
      link: "/properties?type=community"
    },
    {
      title: "MAJAN",
      image: "/licensed-image.jpeg",
      link: "/properties?type=golf"
    },
    {
      title: "DUBAI STUDIO CITY",
      image: "/wallpaperflare.com_wallpaper.jpg",
      link: "/properties?type=branded"
    },
    {
      title: "MAJAN",
      image: "/licensed-image.jpeg",
      link: "/properties?type=golf"
    },
    {
      title: "DUBAI STUDIO CITY",
      image: "/wallpaperflare.com_wallpaper.jpg",
      link: "/properties?type=branded"
    },
    {
      title: "MAJAN",
      image: "/pexels-apasaric-325193.jpg",
      link: "/https://www.propertyfinder.ae/blog/wp-content/uploads/2023/05/5-92.jpg"
    },
    {
      title: "PALM JEBEL ALI",
      image: "/2024-02-04.jpg",
      link: "/properties?type=waterfront"
    },
    {
      title: "JEBEL ALI HILLS",
      image: "/como-residencesba2d50b8-c2c1-4897-9ca6-c26cdba91c08.webp",
      link: "/properties?type=private"
    },
    {
      title: "DUBAI STUDIO CITY",
      image: "/wallpaperflare.com_wallpaper.jpg",
      link: "/properties?type=branded"
    },
    {
      title: "MAJAN",
      image: "/pexels-apasaric-325193.jpg",
      link: "/https://www.propertyfinder.ae/blog/wp-content/uploads/2023/05/5-92.jpg"
    },
    {
      title: "PALM JEBEL ALI",
      image: "/2024-02-04.jpg",
      link: "/properties?type=waterfront"
    },
    {
      title: "JEBEL ALI HILLS",
      image: "/como-residencesba2d50b8-c2c1-4897-9ca6-c26cdba91c08.webp",
      link: "/properties?type=private"
    },
    {
      title: "DAMAC agoons MOROCCO.",
      image: "/images.jpeg",
      link: "/properties?type=community"
    },
    {
      title: "MAJAN",
      image: "/licensed-image.jpeg",
      link: "/properties?type=golf"
    },
    {
      title: "DUBAI STUDIO CITY",
      image: "/wallpaperflare.com_wallpaper.jpg",
      link: "/properties?type=branded"
    },
    {
      title: "MAJAN",
      image: "/licensed-image.jpeg",
      link: "/properties?type=golf"
    },
    {
      title: "DUBAI STUDIO CITY",
      image: "/wallpaperflare.com_wallpaper.jpg",
      link: "/properties?type=branded"
    },
    {
      title: "MAJAN",
      image: "/pexels-apasaric-325193.jpg",
      link: "/https://www.propertyfinder.ae/blog/wp-content/uploads/2023/05/5-92.jpg"
    },
    {
      title: "PALM JEBEL ALI",
      image: "/2024-02-04.jpg",
      link: "/properties?type=waterfront"
    },
    {
      title: "JEBEL ALI HILLS",
      image: "/como-residencesba2d50b8-c2c1-4897-9ca6-c26cdba91c08.webp",
      link: "/properties?type=private"
    },
    {
      title: "DUBAI STUDIO CITY",
      image: "/wallpaperflare.com_wallpaper.jpg",
      link: "/properties?type=branded"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recently Sold Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          WE HAVE SOLD OVER 3 BILLION AED WORTH OF POLOTS SO FAR.

          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-white font-medium hover:text-primary-300 transition-colors"
                  >
                    Explore Properties
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <FooterSection/>
    </section>
  );
};

export default SoldProperty;