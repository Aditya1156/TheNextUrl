"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { FadeUp } from "@/components/AnimateOnScroll";

const portfolioItems = [
  {
    id: 1,
    title: "SDMIT College Website",
    category: "College · Web",
    description: "Full institutional website with department pages, faculty directory, events calendar, and student portal.",
    tags: ["Next.js", "Tailwind CSS"],
    image: null, // add image path here later e.g. "/portfolio/sdmit.png"
    accent: "#2563eb",
    light: "#eff6ff",
  },
  {
    id: 2,
    title: "Engineering Dept. Portal",
    category: "College · Web",
    description: "Dedicated portal for an engineering department — notices, timetable, results, and staff login.",
    tags: ["React", "Node.js"],
    image: null,
    accent: "#7c3aed",
    light: "#f5f3ff",
  },
  {
    id: 3,
    title: "College Fest Landing Page",
    category: "College · Event",
    description: "High-energy landing page for annual college fest with event schedule, registration, and gallery.",
    tags: ["Next.js", "Framer Motion"],
    image: null,
    accent: "#0891b2",
    light: "#ecfeff",
  },
  {
    id: 4,
    title: "Alumni Network Platform",
    category: "College · Web",
    description: "Alumni connect platform with profiles, job board, reunion announcements, and donation gateway.",
    tags: ["Next.js", "MongoDB"],
    image: null,
    accent: "#059669",
    light: "#ecfdf5",
  },
  {
    id: 5,
    title: "Library Management System",
    category: "College · Web",
    description: "Digital library portal for book search, issue/return tracking, fine management, and student history.",
    tags: ["React", "PostgreSQL"],
    image: null,
    accent: "#d97706",
    light: "#fffbeb",
  },
  {
    id: 6,
    title: "Hostel Management Portal",
    category: "College · Web",
    description: "Room allotment, fee collection, complaint tracking, and warden dashboard for college hostels.",
    tags: ["Next.js", "MySQL"],
    image: null,
    accent: "#e11d48",
    light: "#fff1f2",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-container">

      {/* ── Header ── */}
      <FadeUp className="mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-text-muted text-xs mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          Portfolio
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-tight">
              College &amp; Institution<br />
              <span className="text-accent-blue">Projects</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed mt-3 max-w-xl">
              Real projects delivered for colleges and institutions. Images coming soon.
            </p>
          </div>
          <span className="text-xs text-text-muted/50 border border-dashed border-gray-200 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
            Photos uploading soon
          </span>
        </div>
      </FadeUp>

      {/* ── Featured banner image ── */}
      <FadeUp className="mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
        >
          <Image
            src="/Portfolio.png"
            alt="What We Build For You — Academic & College Projects and Business Solutions"
            width={1200}
            height={630}
            className="w-full h-auto object-contain"
            priority={false}
          />
        </motion.div>
      </FadeUp>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 overflow-hidden"
          >
            {/* Image area */}
            <div
              className="relative w-full aspect-video flex items-center justify-center overflow-hidden"
              style={{ background: item.image ? undefined : item.light }}
            >
              {item.image ? (
                // Real image — swap null for path when ready
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Placeholder */
                <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: item.accent + "18" }}
                  >
                    <ImageIcon size={22} style={{ color: item.accent }} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: item.accent + "99" }}>
                    Image coming soon
                  </span>
                </div>
              )}

              {/* Category badge */}
              <span
                className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: item.accent + "18", color: item.accent }}
              >
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-heading font-semibold text-text text-base mb-1.5 group-hover:text-accent-blue transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-text-muted bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Left accent bar on hover */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full"
              style={{ background: item.accent }}
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}
