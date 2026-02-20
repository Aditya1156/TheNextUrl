"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/techstack";
import { FadeUp } from "@/components/AnimateOnScroll";

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-bg-secondary">
      <div className="section-container">
        <FadeUp className="text-center mb-12">
          <h2 className="section-heading">
            Professional-Grade{" "}
            <span className="text-accent-blue">Technology</span>
          </h2>
          <p className="section-subheading mx-auto">
            The same stack that powers modern global products — not outdated tools
            from a decade ago.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-gray-100 rounded-full px-5 py-2.5 shadow-sm
                           flex items-center gap-2.5 text-text-muted cursor-default
                           hover:border-accent-blue/30 hover:text-accent-blue hover:shadow-md transition-all duration-200"
              >
                <tech.icon className="text-lg" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
