"use client";

import { motion } from "framer-motion";
import { solutions } from "@/data/solutions";
import { StaggerContainer, staggerItem, FadeUp } from "@/components/AnimateOnScroll";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-bg-secondary">
      <div className="section-container">
      <FadeUp className="text-center mb-12">
        <h2 className="section-heading">
          Everything Your Institution Needs,{" "}
          <span className="text-accent-blue">Built Right</span>
        </h2>
        <p className="section-subheading mx-auto">
          From modern websites to full ERP systems — we build solutions that
          actually work for your institution.
        </p>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            variants={staggerItem}
            className="card relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-6xl font-bold text-accent-blue/10 font-heading leading-none">
              {solution.id}
            </span>
            <div className="relative z-10">
              <h3 className="text-xl font-heading font-semibold text-text mb-3">
                {solution.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-accent-blue/10 text-accent-blue text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
      </div>
    </section>
  );
}
