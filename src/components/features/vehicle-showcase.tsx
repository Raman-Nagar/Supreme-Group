"use client";

import React from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import Video from "@/ui/video";
import { MenuItem } from "@/types/menu";
import { useVehicle, VehicleProvider } from "@/context/vehicle-context";

interface VehicleShowcaseProps {
  items: MenuItem[];
}

function VehicleContent({ items }: { items: MenuItem[] }) {
  const { active, setActive, videoRef, isPlaying, togglePlayPause, progress } =
    useVehicle();

  const { videoSrc } = items[active];

  return (
    <div className="grid grid-rows-7 justify-center items-center gap-1 w-full">
      <div className="row-span-5">
        <Video videoRef={videoRef} src={videoSrc} className="" />
      </div>

      <div className="row-span-2 flex flex-wrap justify-center gap-4">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`overflow-hidden rounded-md transition-shadow 
              ${
                idx === active
                  ? "ring-1 ring-[#FFFFFF] shadow-lg"
                  : "hover:shadow-md"
              }`}
            aria-label={`Show ${item.alt}`}
          >
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={50}
              height={50}
              className="block"
            />
          </button>
        ))}

        <button
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-black/50 text-white"
          style={{
            background: `conic-gradient(#10b981 ${progress}%, #333 ${progress}%)`,
          }}
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>
    </div>
  );
}

export default function VehicleShowcase({ items }: VehicleShowcaseProps) {
  return (
    <VehicleProvider>
      <VehicleContent items={items} />
    </VehicleProvider>
  );
}
