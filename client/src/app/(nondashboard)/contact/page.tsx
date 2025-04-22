"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ContactUsPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [showPopup, setShowPopup] = useState(true);

  const labels = {
    en: {
      heading: "Contact Us",
      sub: "Whether you're looking to invest or have questions about our services, reach out below.",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      submit: "Send Message",
    },
    ar: {
      heading: "اتصل بنا",
      sub: "سواء كنت ترغب في الاستثمار أو لديك أسئلة، تواصل معنا أدناه.",
      name: "الاسم الكامل",
      email: "عنوان البريد الإلكتروني",
      message: "رسالتك",
      submit: "إرسال الرسالة",
    },
  };

  const isArabic = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // slight delay on page load
    return () => clearTimeout(timer);
  }, []);

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="bg-white text-black relative">

      {/* 🌍 Language Popup Selector */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-xs w-full relative text-center">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              <IoClose />
            </button>
            <h3 className="text-lg font-semibold mb-4">Choose Your Language</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setLanguage("en");
                  setShowPopup(false);
                }}
                className="px-4 py-2 bg-black text-white rounded-md"
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("ar");
                  setShowPopup(false);
                }}
                className="px-4 py-2 bg-black text-white rounded-md"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🌍 Floating Language Toggle (left-center after popup) */}
      {!showPopup && (
        <div className="fixed top-1/2 left-2 -translate-y-1/2 z-40">
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="bg-black text-white px-4 py-2 rounded-full shadow-md text-sm hover:bg-gray-800"
          >
            {language === "en" ? "AR" : "EN"}
          </button>
        </div>
      )}

      {/* 🔝 Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[50vh] relative -mt-20"
      >
        <Image
          src="/contact-banner.jpg"
          alt="Contact Banner"
          fill
          className="object-cover object-[center_80%] brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            {language === "en"
              ? "Get in Touch with Mastermind"
              : "تواصل مع ماستر مايند العقارية"}
          </h1>
        </div>
      </motion.div>

      {/* 📞 Contact Section */}
      <div className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg border border-gray-300/30 rounded-2xl shadow-2xl p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">{labels[language].heading}</h2>
          <p className="text-gray-600">{labels[language].sub}</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder={labels[language].name}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder={labels[language].email}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              rows={4}
              placeholder={labels[language].message}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition"
            >
              {labels[language].submit}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/contact-side.jpg"
            alt="Contact Visual"
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-cover"
          />
        </motion.div>
      </div>

      {/* 💬 WhatsApp Floating Icon */}
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </main>
  );
}
