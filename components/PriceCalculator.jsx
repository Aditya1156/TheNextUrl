"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/AnimateOnScroll";
import NumberFlow from "@number-flow/react";
import Link from "next/link";
import {
  Globe,
  LayoutDashboard,
  Database,
  Search,
  Cloud,
  ShieldCheck,
  Users,
  Smartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: "website",
    name: "Website Design & Development",
    description: "Custom-built responsive website with modern UI",
    price: 15000,
    icon: <Globe size={20} />,
  },
  {
    id: "dashboard",
    name: "Admin Dashboard",
    description: "Full control panel for your team to manage content",
    price: 12000,
    icon: <LayoutDashboard size={20} />,
  },
  {
    id: "erp",
    name: "ERP Integration",
    description: "Student management, attendance, admissions module",
    price: 25000,
    icon: <Database size={20} />,
  },
  {
    id: "seo",
    name: "SEO Optimization",
    description: "On-page SEO, meta tags, sitemap, and speed optimization",
    price: 5000,
    icon: <Search size={20} />,
  },
  {
    id: "hosting",
    name: "Cloud Hosting (Yearly)",
    description: "Managed cloud hosting with 99.9% uptime",
    price: 8000,
    icon: <Cloud size={20} />,
  },
  {
    id: "ssl",
    name: "SSL Certificate",
    description: "HTTPS security for your domain",
    price: 2000,
    icon: <ShieldCheck size={20} />,
  },
  {
    id: "portal",
    name: "Custom Student/Staff Portal",
    description: "Login-based portal with role-based access",
    price: 18000,
    icon: <Users size={20} />,
  },
  {
    id: "responsive",
    name: "Mobile-First Responsive Design",
    description: "Optimized for all devices — phones, tablets, desktops",
    price: 6000,
    icon: <Smartphone size={20} />,
  },
  {
    id: "maintenance",
    name: "Monthly Maintenance Plan",
    description: "Regular updates, backups, and security patches",
    price: 4000,
    suffix: "/mo",
    icon: <Wrench size={20} />,
  },
];

export default function PriceCalculator() {
  const [selected, setSelected] = useState([]);

  const toggleService = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const total = services
    .filter((s) => selected.includes(s.id))
    .reduce((sum, s) => sum + s.price, 0);

  return (
    <section className="section-container">
      <FadeUp>
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4">Build Your Custom Package</h2>
          <p className="section-subheading mx-auto">
            Pick the services you need and get an instant estimate. No hidden fees.
          </p>
        </div>
      </FadeUp>

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {services.map((service) => {
              const isActive = selected.includes(service.id);
              return (
                <motion.button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    isActive
                      ? "border-accent-blue bg-blue-50/60 shadow-md shadow-accent-blue/10"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    {/* Checkbox */}
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-accent-blue border-accent-blue"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <AnimatePresence>
                        {isActive && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Icon */}
                    <span className={`shrink-0 ${isActive ? "text-accent-blue" : "text-text-muted"}`}>
                      {service.icon}
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-medium ${isActive ? "text-text" : "text-text"}`}>
                          {service.name}
                        </span>
                        <span className={`text-sm font-heading font-bold whitespace-nowrap ${isActive ? "text-accent-blue" : "text-text-muted"}`}>
                          ₹{service.price.toLocaleString("en-IN")}
                          {service.suffix || ""}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">{service.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </FadeUp>

        {/* Total */}
        <FadeUp>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-text-muted mb-1">Estimated Total</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-heading font-bold text-text">
                  ₹<NumberFlow value={total} className="text-4xl sm:text-5xl font-heading font-bold" />
                </span>
                {selected.includes("maintenance") && (
                  <span className="text-sm text-text-muted ml-1">+ ₹4,000/mo maintenance</span>
                )}
              </div>
              <p className="text-xs text-text-muted mt-1">
                {selected.length} service{selected.length !== 1 ? "s" : ""} selected
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
