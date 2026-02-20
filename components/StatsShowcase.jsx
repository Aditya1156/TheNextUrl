"use client";

import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

function BentoCard({ title, value, subtitle, colors, delay }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-white border border-gray-100 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-5 sm:p-6 md:p-8 backdrop-blur-sm"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-sm sm:text-base text-text-muted font-medium"
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text mt-2 mb-3"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p className="text-sm text-text-muted" variants={item}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function StatsShowcase() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <BentoCard
            title="Projects Delivered"
            value="50+"
            subtitle="Custom websites, ERPs, and management systems"
            colors={["#2563eb", "#3b82f6", "#93c5fd"]}
            delay={0}
          />
        </div>
        <BentoCard
          title="Client Satisfaction"
          value="4.9/5"
          subtitle="Based on client reviews"
          colors={["#3b82f6", "#06b6d4", "#67e8f9"]}
          delay={0.15}
        />
        <BentoCard
          title="Uptime Guarantee"
          value="99.9%"
          subtitle="Reliable hosting & infrastructure"
          colors={["#f59e0b", "#a78bfa", "#fcd34d"]}
          delay={0.3}
        />
        <div className="md:col-span-2">
          <BentoCard
            title="Institutions Served"
            value="25+"
            subtitle="Schools, colleges, and businesses across India"
            colors={["#2563eb", "#a78bfa", "#c4b5fd"]}
            delay={0.45}
          />
        </div>
        <div className="md:col-span-3">
          <BentoCard
            title="Support Response Time"
            value="< 2 Hours"
            subtitle="Dedicated support team available for all clients — because your digital presence never sleeps"
            colors={["#0891b2", "#06b6d4", "#2563eb"]}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
