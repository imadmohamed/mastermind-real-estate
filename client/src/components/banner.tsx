import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface BannerProps {
  imageUrl: string;
  altText?: string;
  overlayText?: string;
  priority?: boolean; // For above-the-fold banners (optimization)
}

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  altText = "Website Banner",
  overlayText,
  priority = false,
}) => {
  return (
    <>
      {/* Optimize image preload if priority */}
      <Head>
        {priority && (
          <link rel="preload" as="image" href={imageUrl} />
        )}
      </Head>

      <div className="relative w-full h-[25vh] min-h-[200px]">
        <Image
           src="/aboutus-baner.jpg" // Replace with your image path
           alt="Welcome to My Website"
           priority={true}
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Optional text overlay */}
        {overlayText && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {overlayText}
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;