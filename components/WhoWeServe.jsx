"use client";

import { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Building2, Users, Store, TrendingUp } from "lucide-react";
import { FadeUp } from "@/components/AnimateOnScroll";

const options = [
  {
    title: "Schools",
    description: "K-12 websites & digital management",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    icon: <GraduationCap size={20} className="text-white" />,
  },
  {
    title: "Colleges",
    description: "Campus portals & student systems",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    icon: <BookOpen size={20} className="text-white" />,
  },
  {
    title: "Universities",
    description: "ERP & research management platforms",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 size={20} className="text-white" />,
  },
  {
    title: "Coaching Centres",
    description: "Batch management & online classes",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    icon: <Users size={20} className="text-white" />,
  },
  {
    title: "Local Businesses",
    description: "Websites & digital storefronts",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    icon: <Store size={20} className="text-white" />,
  },
  {
    title: "Enterprises",
    description: "Scalable systems built to grow",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: <TrendingUp size={20} className="text-white" />,
  },
];

export default function WhoWeServe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timers = options.map((_, i) =>
      setTimeout(() => setVisible((prev) => [...prev, i]), 180 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="who-we-serve" className="section-container">
      {/* Section Header */}
      <FadeUp className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-text-muted mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          Our Clients
        </span>
        <h2 className="section-heading">
          Who We <span className="text-accent-blue">Serve</span>
        </h2>
        <p className="section-subheading mx-auto">
          From schools to enterprises — we build digital systems for
          institutions that want to grow.
        </p>
      </FadeUp>

      {/* Interactive Selector */}
      <FadeUp delay={0.2}>
        <div
          className="flex w-full h-[400px] overflow-hidden rounded-2xl border border-gray-100 shadow-md"
          style={{ minWidth: 0 }}
        >
          {options.map((option, index) => (
            <div
              key={option.title}
              onClick={() => setActiveIndex(index)}
              className="relative flex flex-col justify-end overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: activeIndex === index ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
                backgroundColor: "#1e293b",
                flex: activeIndex === index ? "7 1 0%" : "1 1 0%",
                opacity: visible.includes(index) ? 1 : 0,
                transform: visible.includes(index) ? "translateX(0)" : "translateX(-60px)",
                transition:
                  "flex 0.7s ease-in-out, box-shadow 0.7s ease-in-out, background-size 0.7s ease-in-out, opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                borderRight:
                  index < options.length - 1
                    ? "2px solid rgba(255,255,255,0.12)"
                    : "none",
                boxShadow:
                  activeIndex === index
                    ? "0 20px 60px rgba(0,0,0,0.45)"
                    : "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-700"
                style={{
                  background:
                    activeIndex === index
                      ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
                }}
              />

              {/* Label */}
              <div className="absolute left-0 right-0 bottom-4 flex items-center gap-3 px-4 z-10">
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-[38px] h-[38px] flex items-center justify-center rounded-full shadow-md"
                  style={{
                    background:
                      activeIndex === index
                        ? "#2563eb"
                        : "rgba(37,99,235,0.75)",
                    backdropFilter: "blur(8px)",
                    transition: "background 0.4s ease",
                  }}
                >
                  {option.icon}
                </div>

                {/* Text */}
                <div className="text-white overflow-hidden">
                  <div
                    className="font-bold text-sm leading-tight"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform:
                        activeIndex === index
                          ? "translateX(0)"
                          : "translateX(20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {option.title}
                  </div>
                  <div
                    className="text-xs text-blue-200 mt-0.5"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform:
                        activeIndex === index
                          ? "translateX(0)"
                          : "translateX(20px)",
                      transition:
                        "opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
