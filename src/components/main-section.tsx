"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";

export function SpotlightNew() {
  return (
    <div
      id="home-section"
      className="min-h-[100vh] w-full rounded-md flex flex-col md:flex-row items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      style={{ zIndex: 1 }} 
    >
      {/* Spotlight background effect */}
      <Spotlight />

      {/* Content wrapper */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-10 md:pt-0 flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src="/logo.jpg"
            alt="img"
            width={300}
            height={300}
            className="rounded-full w-32 sm:w-40 md:w-48"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Building Digital <br className="hidden md:block" />
          Products, Brand and <br className="hidden md:block" />
          Experience.
        </h1>

        {/* Button placed below text */}
        <div className="mt-6">
          <p>Try out this bot</p>
        </div>
      </div>
    </div>
  );
}