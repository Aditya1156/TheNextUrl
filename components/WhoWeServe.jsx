"use client";

import { motion } from "framer-motion";
import { StaggerContainer, staggerItem, FadeUp } from "@/components/AnimateOnScroll";

const audiences = [
  { emoji: "\u{1F3EB}", label: "Schools" },
  { emoji: "\u{1F393}", label: "Colleges" },
  { emoji: "\u{1F3DB}\uFE0F", label: "Universities" },
  { emoji: "\u{1F4DA}", label: "Coaching Centres" },
  { emoji: "\u{1F3E2}", label: "Local Businesses" },
  { emoji: "\u{1F680}", label: "Growing Enterprises" },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="section-container">
      <FadeUp className="text-center mb-12">
        <h2 className="section-heading">
          Who We <span className="text-accent-blue">Serve</span>
        </h2>
        <p className="section-subheading mx-auto">
          From schools to enterprises — we build digital systems for
          institutions that want to grow.
        </p>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {audiences.map((item) => (
          <motion.div
            key={item.label}
            variants={staggerItem}
            className="card text-center"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="text-lg font-heading font-medium text-text">
              {item.label}
            </h3>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  );
}
