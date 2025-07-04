"use client";
import { MenuItem } from "@/types/menu";
import VehicleShowcase from "./vehicle-showcase";

const menuItems: MenuItem[] = [
  {
    imgSrc: "/assets/Cabin0.svg",
    videoSrc: "assets/media/Commercial Alpha.mp4",
    alt: "Trunk View",
  },
  {
    imgSrc: "/assets/Cabin1.svg",
    videoSrc: "/assets/media/Front.mp4",
    alt: "Exterior View",
  },
  {
    imgSrc: "/assets/Cabin2.svg",
    videoSrc: "/assets/media/Cabin.mp4",
    alt: "Front View",
  },
  {
    imgSrc: "/assets/Cabin3.svg",
    videoSrc: "/assets/media/Trunk.mp4",
    alt: "Commercial Alpha",
  },
  {
    imgSrc: "/assets/Cabin4.svg",
    videoSrc: "/assets/media/Exterior.mp4",
    alt: "Cabin View",
  },
];

export default function Commercial() {
  return <VehicleShowcase items={menuItems} />;
}
