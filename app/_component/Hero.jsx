"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function Hero() {
  const [page, setPage] = useState(1);

  // Memoized interval logic to prevent unnecessary rerenders
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1 > 4 ? 1 : prev + 1)); // Cycles from 1 to 4
    }, 7000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handlers for navigation
  const handlePrev = useCallback(() => {
    setPage((prev) => (prev - 1 < 1 ? 4 : prev - 1)); // Cycles from 4 to 1
  }, []);

  const handleNext = useCallback(() => {
    setPage((prev) => (prev + 1 > 4 ? 1 : prev + 1)); // Cycles from 1 to 4
  }, []);

  return (
    <section className="relative h-[500px] flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          className="object-cover object-center"
          src={`/image_${page}.webp`} // Dynamically loads the image
          fill
          alt={`Slide ${page}`}
          priority
        />
        {/* Overlay Content */}
        <div className="absolute bottom-1/2 left-20 md:left-96 z-10">
          <h2 className="text-3xl font-bold sm:text-xl text-teal-500 drop-shadow-md ">
            Your Favourite Brand
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        onClick={handlePrev}
        className="absolute left-4 md:left-20 bottom-1/2 text-2xl cursor-pointer z-20"
      >
        <span
          className="text-teal-600 hover:text-teal-800 transition-transform transform hover:-translate-x-1"
        >
          &larr;
        </span>
      </div>
      <div
        onClick={handleNext}
        className="absolute right-4 md:right-20 bottom-1/2 text-2xl cursor-pointer z-20"
      >
        <span
          className="text-teal-600 hover:text-teal-800 transition-transform transform hover:translate-x-1"
        >
          &rarr;
        </span>
      </div>
    </section>
  );
}

export default Hero;
