"use client";
import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import Commercial from "./commercial";
import { motion } from "motion/react";
import Passenger from "./passenger";

const features = [
  {
    title: "Passenger vehicles",
    description: "Revving up Nonwoven innovation from interior to exterior.",
    content: (
      <div className="flex items-center justify-center h-full">
        <Passenger />
      </div>
    ),
  },
  {
    title: "Commercial vehicles",
    description: "Advancing Nonwoven engineering for heavy-duty vehicles.",
    content: (
      <div className="flex items-center justify-center h-full">
        <Commercial />
      </div>
    ),
  },
];

export default function Features() {
  return (
    <motion.section className="py-16 bg-black ">
      <motion.div className="flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug"
        >
          Evolving the drive with
          <motion.span className="font-semibold"> 360-degree</motion.span>
          <motion.br />
          nonwoven solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg text-gray-400 mt-10"
        >
          Click anywhere for next slide <br />
          (Only written for prototype)
        </motion.p>
      </motion.div>

      <StickyScroll content={features} contentClassName="" />
    </motion.section>
  );
}
