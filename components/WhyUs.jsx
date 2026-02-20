"use client";

import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { FadeUp } from "@/components/AnimateOnScroll";

const advantages = [
  "Structured system design, not templates",
  "Long-term partnership, not build & disappear",
  "Deep understanding of education ecosystems",
  "Modern tech stack used by global companies",
  "Full-stack: frontend, backend, and DevOps",
  "SEO and performance optimized from day one",
];

const comparison = [
  { feature: "Custom Design", others: false, us: true },
  { feature: "Admin Dashboard", others: false, us: true },
  { feature: "Ongoing Support", others: false, us: true },
  { feature: "Scalable Architecture", others: false, us: true },
  { feature: "Cloud + SSL + Backup", others: false, us: true },
  { feature: "SEO Optimized", others: false, us: true },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-container">
      <FadeUp className="text-center mb-12">
        <h2 className="section-heading">
          We&apos;re Not Just Another{" "}
          <span className="text-accent-blue">Web Agency</span>
        </h2>
        <p className="section-subheading mx-auto">
          Here&apos;s what makes The Next URL different from the rest.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left — Advantages */}
        <FadeUp>
          <div className="space-y-4">
            {advantages.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <HiCheckCircle className="text-accent-blue text-xl mt-0.5 shrink-0" />
                <span className="text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Right — Comparison Table */}
        <FadeUp delay={0.2}>
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-bg-tertiary px-4 py-3">
              <span className="text-sm font-medium text-text-muted">Feature</span>
              <span className="text-sm font-medium text-text-muted text-center">Others</span>
              <span className="text-sm font-medium text-accent-blue text-center">The Next URL</span>
            </div>
            {/* Rows */}
            {comparison.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 px-4 py-3 border-t border-gray-100"
              >
                <span className="text-sm text-text">{row.feature}</span>
                <div className="flex justify-center">
                  <HiXCircle className="text-red-400 text-lg" />
                </div>
                <div className="flex justify-center">
                  <HiCheckCircle className="text-accent-blue text-lg" />
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
