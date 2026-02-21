"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CTA() {
  return (
    <section className="section-container">
      <div className="relative overflow-hidden bg-accent-blue rounded-2xl px-6 sm:px-12 py-12 md:py-24 text-center">

        {/* Staggered content */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 text-xs font-semibold text-white/80 tracking-wide uppercase"
          >
            Get Started
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-2xl"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-blue-100 text-lg max-w-xl"
          >
            We don&apos;t just build websites — we build your next URL.
            Bold. Scalable. Built to last.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-blue font-medium
                         rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us <HiArrowRight />
            </Link>
            <a
              href="https://wa.me/91885288250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white
                         font-medium rounded-lg transition-all duration-300
                         hover:bg-white/10 hover:-translate-y-0.5"
            >
              <SiWhatsapp /> WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Blue glow effect */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow:
              "0 -16px 128px 0 rgba(147, 197, 253, 0.45) inset, 0 -16px 32px 0 rgba(96, 165, 250, 0.3) inset",
          }}
        />
      </div>
    </section>
  );
}
