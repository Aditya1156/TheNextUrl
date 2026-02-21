"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import projects from "@/data/projects";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/AnimateOnScroll";

/* ─── Desktop helpers ─────────────────────────────────────── */
function ProjectDots({ scrollYProgress, total }) {
  const [active, setActive] = useState(0);
  const activeRaw = useTransform(scrollYProgress, [0, 1], [0, total - 1]);
  useMotionValueEvent(activeRaw, "change", (v) => setActive(Math.round(v)));

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width:  i === active ? "24px" : "6px",
            height: "6px",
            background: i === active ? "#2563eb" : "#e2e8f0",
          }}
        />
      ))}
    </div>
  );
}

function CounterLabel({ scrollYProgress, total }) {
  const [active, setActive] = useState(0);
  const activeRaw = useTransform(scrollYProgress, [0, 1], [0, total - 1]);
  useMotionValueEvent(activeRaw, "change", (v) => setActive(Math.round(v)));

  return (
    <span className="text-text-muted text-sm font-mono tracking-widest">
      <span className="text-text font-bold">{String(active + 1).padStart(2, "0")}</span>
      /{String(total).padStart(2, "0")}
    </span>
  );
}

/* ─── Desktop: sticky horizontal scroll ───────────────────── */
function DesktopProjects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(projects.length - 1) * 100}vw`]
  );

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
      className="hidden lg:block"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">

        {/* Header */}
        <div
          className="absolute top-0 left-0 right-0 z-20 border-b border-gray-100"
          style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-[76px] pb-4 flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-text-muted text-xs mb-2">
                <span className="w-1 h-1 rounded-full bg-accent-blue" />
                Latest works
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text leading-tight">
                Our finished projects
              </h2>
            </div>
            <CounterLabel scrollYProgress={scrollYProgress} total={projects.length} />
          </div>
        </div>

        {/* Horizontal strip */}
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="w-screen h-full flex-shrink-0 bg-white"
              style={{ paddingTop: "150px", paddingBottom: "68px" }}
            >
              <div className="flex h-full max-w-7xl mx-auto px-6 lg:px-10 gap-10">

                {/* Left: info */}
                <div className="w-[36%] flex flex-col justify-center">
                  <span
                    className="font-heading font-bold text-gray-100 leading-none mb-1 select-none"
                    style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-heading font-bold text-text leading-tight mb-4"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs text-text-muted bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-0.5 bg-accent-blue rounded-full" />
                </div>

                {/* Right: gradient card */}
                <div
                  className={`flex-1 rounded-2xl overflow-hidden relative bg-gradient-to-br ${project.gradient}`}
                  style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-transparent to-black/25" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span
                      className="opacity-[0.15] select-none leading-none"
                      style={{ fontSize: "clamp(120px, 18vw, 220px)" }}
                    >
                      {project.emoji}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-100">
          <div className="h-[2px] bg-gray-100 w-full -mt-[2px]">
            <motion.div style={{ width: barWidth }} className="h-full bg-accent-blue" />
          </div>
          <div className="flex justify-center py-3.5">
            <ProjectDots scrollYProgress={scrollYProgress} total={projects.length} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile: simple stacked cards ────────────────────────── */
function MobileProjects() {
  return (
    <section id="projects" className="lg:hidden section-container">
      {/* Header */}
      <FadeUp>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-text-muted text-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          Latest works
        </span>
        <h2 className="section-heading">Our finished<br />projects</h2>
      </FadeUp>

      {/* Cards */}
      <StaggerContainer className="flex flex-col gap-4 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={staggerItem}
            className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.gradient}`}
          >
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Emoji */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[22vw] opacity-[0.15] select-none leading-none">
                {project.emoji}
              </span>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
              <div className="flex gap-2 mb-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-[11px] text-white/70 bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h3 className="text-white font-heading font-bold text-xl leading-tight">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ─── Export ──────────────────────────────────────────────── */
export default function Projects() {
  return (
    <>
      <DesktopProjects />
      <MobileProjects />
    </>
  );
}
