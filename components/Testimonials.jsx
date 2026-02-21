"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "@/components/ui/blur-text";

const testimonials = [
  {
    quote:
      "The Next URL completely transformed our school's online presence. Parents and students love the new portal. The team delivered everything on time and beyond expectations.",
    author: "Rajesh Kumar",
    role: "Principal, Sri Vidya School, Shivamogga",
  },
  {
    quote:
      "We needed a full ERP system for our college and The Next URL built exactly what we envisioned. Clean, fast, and incredibly easy for staff to use. Highly recommended.",
    author: "Dr. Meena Patil",
    role: "Director, Sahyadri College of Commerce",
  },
  {
    quote:
      "Our coaching centre's enquiries doubled after the new website launched. The design is modern, the loading speed is excellent, and the support team is always responsive.",
    author: "Suresh Hegde",
    role: "Founder, Apex Academy, Bengaluru",
  },
  {
    quote:
      "From concept to launch in three weeks. The Next URL understood our brand instantly and delivered a website that truly reflects who we are as a business.",
    author: "Anitha Rao",
    role: "Owner, Rao Enterprises, Mangalore",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (i) => setIndex(i);
  const current = testimonials[index];

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-text-muted tracking-wide mb-10"
        >
          Hear from our clients
        </motion.p>

        {/* Quote — BlurText remounts on key change, re-triggering blur animation */}
        <div className="min-h-[260px] flex flex-col items-center justify-center gap-6">
          <BlurText
            key={`quote-${index}`}
            text={`\u201C${current.quote}\u201D`}
            delay={60}
            animateBy="words"
            direction="top"
            stepDuration={0.28}
            threshold={0}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-text leading-tight justify-center text-center"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-text-muted"
            >
              <span className="font-medium text-text">{current.author}</span>
              <span className="text-gray-300">•</span>
              <span>{current.role}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pill dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                background: i === index ? "#2563eb" : "#cbd5e1",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
