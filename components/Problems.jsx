"use client";

import { motion } from "framer-motion";
import { Monitor, Settings, Database, Lightbulb, AlertTriangle, WifiOff, FileX, BarChart2 } from "lucide-react";
import { FadeUp } from "@/components/AnimateOnScroll";

const problems = [
  {
    number: "01",
    icon: Monitor,
    badge: AlertTriangle,
    title: "Outdated Design",
    description: "2008-era layouts that aren't mobile-friendly. They break trust before visitors even read a word.",
    color: "#ef4444",
    light: "#fef2f2",
  },
  {
    number: "02",
    icon: Settings,
    badge: WifiOff,
    title: "No Maintenance",
    description: "Expired notices, broken links, no IT staff. Security holes pile up while no one's watching.",
    color: "#f97316",
    light: "#fff7ed",
  },
  {
    number: "03",
    icon: Database,
    badge: FileX,
    title: "No Backend Structure",
    description: "Static templates with no admin control. The original developer disappeared — and so did the source code.",
    color: "#a855f7",
    light: "#faf5ff",
  },
  {
    number: "04",
    icon: Lightbulb,
    badge: BarChart2,
    title: "No Digital Strategy",
    description: "No online admissions, no analytics, no SEO. A website without a plan is just a digital brochure collecting dust.",
    color: "#3b82f6",
    light: "#eff6ff",
  },
];

/* CSS browser mockup — pure JSX, no assets */
function BrokenBrowserMockup() {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
      {/* Chrome bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 flex items-center gap-2 border border-gray-200">
          <span className="text-gray-300 text-xs">🔒</span>
          <span className="text-[11px] text-gray-400 truncate">http://old-school-website.in</span>
        </div>
      </div>

      {/* "Broken" page body */}
      <div className="bg-white p-5 space-y-3">
        {/* Broken nav */}
        <div className="flex gap-2 pb-3 border-b border-gray-100">
          <div className="h-3 w-16 rounded bg-gray-200" />
          <div className="h-3 w-12 rounded bg-gray-200" />
          <div className="h-3 w-20 rounded bg-gray-200" />
          <div className="h-3 w-10 rounded bg-gray-200 opacity-40" />
        </div>

        {/* Hero placeholder with broken image */}
        <div className="h-28 rounded-lg bg-gray-100 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-gray-200">
          <FileX size={22} className="text-gray-300" />
          <span className="text-[10px] text-gray-400 font-mono">Image not found (404)</span>
        </div>

        {/* Broken text lines */}
        <div className="space-y-2">
          <div className="h-3 rounded bg-gray-200 w-full" />
          <div className="h-3 rounded bg-gray-200 w-5/6" />
          <div className="h-3 rounded bg-gray-200 w-3/4 opacity-60" />
        </div>

        {/* Broken table rows */}
        <div className="rounded-lg border border-gray-100 divide-y divide-gray-100 overflow-hidden">
          {["Student Records", "Fee Receipts", "Timetable"].map((row, i) => (
            <div key={row} className="flex items-center justify-between px-3 py-2">
              <span className="text-[10px] text-gray-400">{row}</span>
              <span className="text-[9px] text-red-400 font-mono flex items-center gap-1">
                <AlertTriangle size={9} /> Error
              </span>
            </div>
          ))}
        </div>

        {/* Last updated badge */}
        <div className="flex items-center gap-1.5 pt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-[10px] text-red-400 font-mono">Last updated: 2011 · Not mobile friendly</span>
        </div>
      </div>
    </div>
  );
}

export default function Problems() {
  return (
    <section id="problems" className="section-container">

      {/* ── Header ── */}
      <FadeUp className="text-center mb-16 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                         border border-gray-200 text-text-muted text-xs mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          Pain points
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-tight mb-4">
          Why Most Institution<br />
          Websites Are{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-red-500">Failing</span>
            {/* Wavy underline */}
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              viewBox="0 0 200 8" preserveAspectRatio="none" height="8"
            >
              <path
                d="M0,4 C25,0 50,8 75,4 C100,0 125,8 150,4 C175,0 195,8 200,4"
                fill="none" stroke="#ef4444" strokeWidth="2.5"
                strokeLinecap="round" opacity="0.6"
              />
            </svg>
          </span>
        </h2>
        <p className="text-text-muted text-base leading-relaxed">
          These are the problems we see every day — and exactly what we solve.
        </p>
      </FadeUp>

      {/* ── Split layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: browser mockup */}
        <FadeUp className="flex flex-col items-center gap-4">
          {/* Label */}
          <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
            <AlertTriangle size={13} className="text-red-400" />
            <span>Your current website might look like this</span>
          </div>

          <BrokenBrowserMockup />

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {[
              { label: "73% of users leave slow sites", color: "bg-red-50 text-red-500 border-red-100" },
              { label: "68% of traffic is mobile", color: "bg-amber-50 text-amber-600 border-amber-100" },
              { label: "Page 1 SEO = 92% of clicks", color: "bg-blue-50 text-blue-500 border-blue-100" },
            ].map((s) => (
              <span key={s.label}
                className={`text-[11px] font-medium px-3 py-1.5 rounded-full border ${s.color}`}>
                {s.label}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Right: problem cards */}
        <div className="flex flex-col gap-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="relative group flex items-start gap-4 p-5 rounded-2xl border border-gray-100
                           bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-black/5
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Colored icon block */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: p.light }}
                >
                  <Icon size={20} style={{ color: p.color }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-heading font-semibold text-text text-base">
                      {p.title}
                    </h3>
                    {/* Number badge */}
                    <span
                      className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: p.light, color: p.color }}
                    >
                      {p.number}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Left accent bar on hover */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-0
                             group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: p.color }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
