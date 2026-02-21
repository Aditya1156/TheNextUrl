"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/AnimateOnScroll";

export default function Services() {
  return (
    <section id="services" className="section-container">
      <FadeUp>
        <div className="relative overflow-visible">

          {/* ── Main Banner ── */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #060f24 0%, #0b2348 35%, #0a3d3d 65%, #060f24 100%)",
            }}
          >
            {/* Teal centre glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(20,184,166,0.20) 0%, transparent 70%)",
              }}
            />
            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* ── Split content ── */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

              {/* Left — text */}
              <div className="px-8 sm:px-14 py-14 sm:py-16 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Our services
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                  Digital services to<br />grow your business
                </h2>

                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  From custom websites and ERP systems to app development and
                  ongoing maintenance — everything you need under one roof.
                </p>

                {/* Service tags */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "App Development",
                    "Web Development",
                    "ERP Solutions",
                    "Management Tools",
                    "Custom Software",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-3 py-1 rounded-full border border-white/10 text-white/50 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom spacer for protruding button on mobile */}
                <div className="lg:hidden h-2" />
              </div>

              {/* Right — services image */}
              <div className="hidden lg:flex items-center justify-center px-8 py-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="relative w-full max-w-[380px]"
                >
                  {/* Glow behind image */}
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                    style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
                  />
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                    <Image
                      src="/services.png"
                      alt="Our Services — App Development, Web Development, ERP Solutions, Management Tools, Custom Software"
                      width={760}
                      height={760}
                      className="w-full h-auto object-contain"
                      priority={false}
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ── Protruding "View All Services" button ── */}
          <div className="flex justify-center -mt-5 relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.13), 0 1.5px 4px rgba(0,0,0,0.07)",
              }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-blue text-white flex-shrink-0">
                <ArrowRight size={17} />
              </span>
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
