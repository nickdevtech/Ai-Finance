"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto text-center max-w-6xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[105px] font-extrabold pb-6 leading-tight tracking-tight gradient-title">
          Manage Your Finances <br className="hidden md:block" /> with
          Intelligence
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Get Started
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-gray-50"
          >
            Watch Demo
          </Button>
        </div>

        <div className="hero-image-wrapper mt-10 md:mt-14">
          <div
            ref={imageRef}
            className="hero-image transform transition-all duration-700 ease-in-out hover:scale-105"
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
