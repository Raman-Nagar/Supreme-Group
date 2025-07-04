"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#00000099] overflow-hidden">
      <div className=" bg-opacity-50 z-10">
        <div className="z-20 text-center px-4 max-w-3xl">
          <p className="text-lg md:text-[22px] mb-2 ">Driven by performance</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:font-semibold leading-tight">
            Soft trims and NVH solutions
            <span className="md:block font-light">for seamless rides</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
