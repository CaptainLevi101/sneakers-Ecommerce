"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const images = ["/assets/images/1.jpg", "/assets/images/2.jpg"];
  const [currImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleButtonClick = () => {
    router.push("/home");
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg">
            Welcome to Our Store
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium drop-shadow-md">
            Discover amazing products at unbeatable prices.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-blue-500
           hover:bg-blue-600
            text-white rounded-full 
            shadow-lg transition-transform transform 
            hover:scale-105"
            onClick={handleButtonClick}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 bg-fixed"
        style={{
          backgroundImage: `url(${images[currImageIndex]})`,
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }}
      ></div>
    </div>
  );
}
