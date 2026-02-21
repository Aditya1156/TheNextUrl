"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { YellowGlowBackground } from "@/components/ui/background-components";

const stats = [
  { value: "100%", label: "Custom Built" },
  { value: "ERP", label: "Ready Architecture" },
  { value: "24/7", label: "Support Available" },
  { value: "\u221E", label: "Scalable Systems" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <YellowGlowBackground className="flex items-center overflow-hidden" id="hero">
      <div className="section-container relative z-10 w-full">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6"
          >
            Building the Digital Backbone of{" "}
            <span className="text-accent-blue">Modern Institutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="text-lg md:text-xl text-text-muted max-w-2xl mb-10"
          >
            We build modern websites, management systems, and ERP platforms for
            schools, colleges, institutions, and businesses. Your digital era starts here.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary">
              Start Your Project <HiArrowRight />
            </Link>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
            >
              See Our Work
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                className="bg-bg-secondary border border-gray-100 rounded-xl px-5 py-4 text-center
                           hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-accent-blue font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </YellowGlowBackground>
  );
}
