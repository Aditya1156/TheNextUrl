"use client";

import { motion } from "framer-motion";
import { problems } from "@/data/problems";
import { StaggerContainer, staggerItem } from "@/components/AnimateOnScroll";
import { FadeUp } from "@/components/AnimateOnScroll";

export default function Problems() {
  return (
    <section id="problems" className="section-container">
      <FadeUp className="text-center mb-12">
        <h2 className="section-heading">
          Why Most Institution Websites Are{" "}
          <span className="text-red-500">Failing</span>
        </h2>
        <p className="section-subheading mx-auto">
          These are the problems we see every day — and exactly what we solve.
        </p>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {problems.map((problem) => (
          <motion.div key={problem.id} variants={staggerItem} className="card">
            <problem.icon className="text-3xl text-accent-blue mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text mb-2">
              {problem.title}
            </h3>
            <p className="text-text-muted leading-relaxed">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  );
}
