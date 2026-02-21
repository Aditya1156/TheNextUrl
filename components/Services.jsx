"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/AnimateOnScroll";

export default function Services() {
  return (
    <section id="services" className="section-container">
      <FadeUp>
        {/* ── Banner Card ── */}
        <div className="relative overflow-visible">
          <div
            className="relative overflow-hidden rounded-2xl px-8 sm:px-14 py-14 sm:py-16"
            style={{
              background:
                "linear-gradient(135deg, #060f24 0%, #0b2348 35%, #0a3d3d 65%, #060f24 100%)",
            }}
          >
            {/* Teal center glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[500px] h-[260px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(20,184,166,0.22) 0%, transparent 70%)",
              }}
            />
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              {/* Badge */}
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Our services
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight flex-1 text-center sm:text-left">
                Digital services to<br />grow your business
              </h2>
            </div>

            {/* Bottom spacer for the protruding button */}
            <div className="h-6" />
          </div>

          {/* Protruding "View All Services" button — links to /services page */}
          <div className="flex justify-center -mt-5 relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.13), 0 1.5px 4px rgba(0,0,0,0.07)",
              }}
            >
              {/* Icon block */}
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-blue text-white flex-shrink-0">
                <ArrowRight size={17} />
              </span>
              {/* Label */}
              <span className="text-sm font-medium text-text">
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
