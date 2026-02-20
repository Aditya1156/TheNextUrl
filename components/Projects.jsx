"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/AnimateOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      {/* Header */}
      <FadeUp>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-text-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              Latest works
            </span>
            <h2 className="section-heading">
              Our finished
              <br />
              projects
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xs lg:text-right lg:pb-1">
            Read how we&apos;ve helped some of the biggest brands transform their business.
          </p>
        </div>
      </FadeUp>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={staggerItem}
            className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
          >
            {/* Gradient background with emoji */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-[120px] select-none">
                {project.emoji}
              </div>
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16">
              <h3 className="text-white font-heading font-semibold text-lg mb-1.5">
                {project.title}
              </h3>
              <div className="flex gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs text-white/70 bg-white/10 px-2.5 py-0.5 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300" />
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  );
}
