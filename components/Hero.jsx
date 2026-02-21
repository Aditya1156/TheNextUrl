"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { Play } from "lucide-react";
import { YellowGlowBackground } from "@/components/ui/background-components";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};


export default function Hero() {
  return (
    <YellowGlowBackground
      className="min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: text content ── */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.05}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                         border border-gray-200 text-text-muted text-sm mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              Now accepting projects for 2026
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold
                         text-text leading-[1.08] mb-6"
            >
              Building the Digital<br />
              Backbone of{" "}
              <span className="text-accent-blue">Modern<br />Institutions</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.28}
              className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed"
            >
              We build websites, management systems, and ERP platforms for schools,
              colleges, and businesses. Your digital era starts here.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
              className="flex flex-col sm:flex-row items-start gap-3 mb-12"
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

            {/* Mini stats row */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.52}
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {[
                { value: "50+", label: "Projects delivered" },
                { value: "100%", label: "Custom built" },
                { value: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-heading font-bold text-text">{s.value}</div>
                  <div className="text-xs text-text-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: video card ── */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
            className="relative"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent-blue/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-violet-300/20 blur-2xl pointer-events-none" />

            {/* Card */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              style={{ aspectRatio: "4/3" }}
            >
              {/* ── VIDEO — replace src with your actual file ── */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/1st.mp4" type="video/mp4" />
              </video>

              {/* Fallback gradient shown when no video loads */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, #0f2057 0%, #1e3a8a 40%, #0e7490 100%)",
                }}
              >
                {/* Dot grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Play icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm
                                  flex items-center justify-center border border-white/20">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-20 left-0 right-0 text-center">
                  <p className="text-white/40 text-xs tracking-widest font-mono">
                    /public/1st.mp4
                  </p>
                </div>
              </div>

              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* ── Floating tag — top right ── */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
              className="absolute -top-4 -right-4 sm:top-4 sm:right-4
                         bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100
                         flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-text">Available for projects</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </YellowGlowBackground>
  );
}
