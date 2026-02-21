"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/AnimateOnScroll";
import NumberFlow from "@number-flow/react";
import Link from "next/link";
import {
  Globe,
  Database,
  ShoppingCart,
  Smartphone,
  Zap,
  CheckCircle2,
  MessageCircle,
  Mail,
  ArrowRight,
  Clock,
  Shield,
  Headphones,
  Sparkles,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */

const categories = [
  {
    id: "website",
    label: "Website",
    Icon: Globe,
    color: "#2563eb",
    light: "#EFF6FF",
    border: "#BFDBFE",
    services: [
      {
        id: "landing",
        name: "Landing Page",
        desc: "Single-page site to showcase your product or service",
        price: 4999,
        tag: "Best Starter",
      },
      {
        id: "portfolio",
        name: "Portfolio / Blog Website",
        desc: "Personal or brand site with blog, gallery, and contact form",
        price: 6999,
      },
      {
        id: "business5",
        name: "Business Website (5 pages)",
        desc: "Home, About, Services, Gallery, Contact — fully responsive + SEO",
        price: 9999,
        popular: true,
      },
      {
        id: "multi",
        name: "Multi-page Business Website",
        desc: "Unlimited pages, CMS integration, contact forms, full SEO setup",
        price: 14999,
      },
    ],
  },
  {
    id: "erp",
    label: "ERP & Portals",
    Icon: Database,
    color: "#7c3aed",
    light: "#F5F3FF",
    border: "#DDD6FE",
    services: [
      {
        id: "attendance",
        name: "Attendance Management Module",
        desc: "Biometric-ready attendance tracking for students and staff",
        price: 8000,
      },
      {
        id: "fee",
        name: "Fee Collection Module",
        desc: "Online fee payment, invoices, receipts, and payment history",
        price: 10000,
      },
      {
        id: "portal",
        name: "Student / Staff Portal",
        desc: "Role-based login portal with dashboards and notifications",
        price: 18000,
        popular: true,
      },
      {
        id: "fullerp",
        name: "Full School / College ERP",
        desc: "Complete ERP — admissions, attendance, grades, fees, payroll, HR",
        price: 35000,
        tag: "Most Complete",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    Icon: ShoppingCart,
    color: "#d97706",
    light: "#FFFBEB",
    border: "#FDE68A",
    services: [
      {
        id: "payment",
        name: "Payment Gateway Integration",
        desc: "Razorpay / Stripe / UPI checkout for any existing website",
        price: 5999,
      },
      {
        id: "booking",
        name: "Service Booking System",
        desc: "Slot booking, availability calendar, and appointment management",
        price: 12999,
      },
      {
        id: "store",
        name: "Online Store (E-Commerce)",
        desc: "Product catalog, cart, checkout, order management, seller dashboard",
        price: 19999,
        popular: true,
      },
      {
        id: "pos",
        name: "Restaurant POS System",
        desc: "Table management, billing, kitchen display, and daily reports",
        price: 24999,
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    Icon: Smartphone,
    color: "#059669",
    light: "#ECFDF5",
    border: "#A7F3D0",
    services: [
      {
        id: "android",
        name: "Android App",
        desc: "Native Android app with Firebase backend and Play Store deployment",
        price: 29999,
      },
      {
        id: "crossplatform",
        name: "Cross-Platform App (Android + iOS)",
        desc: "React Native — one codebase, both platforms, App Store ready",
        price: 39999,
        popular: true,
      },
      {
        id: "appwithadmin",
        name: "App + Web Admin Panel",
        desc: "Mobile app paired with a full web management dashboard",
        price: 49999,
        tag: "Best Value",
      },
      {
        id: "pwa",
        name: "Progressive Web App (PWA)",
        desc: "App-like web experience — installable, offline-ready, no app store needed",
        price: 12999,
      },
    ],
  },
  {
    id: "addons",
    label: "Add-ons",
    Icon: Zap,
    color: "#0891b2",
    light: "#F0FDFF",
    border: "#A5F3FC",
    services: [
      {
        id: "analytics",
        name: "Google Analytics + Search Console",
        desc: "Full tracking setup with custom events and GSC integration",
        price: 1999,
      },
      {
        id: "ssl",
        name: "SSL Certificate",
        desc: "HTTPS security certificate setup and configuration for your domain",
        price: 1999,
      },
      {
        id: "whatsapp",
        name: "WhatsApp Integration",
        desc: "Click-to-chat and enquiry forms routed to WhatsApp Business",
        price: 2999,
      },
      {
        id: "maintenance",
        name: "Monthly Maintenance Plan",
        desc: "Updates, backups, bug fixes, and 24/7 WhatsApp priority support",
        price: 3999,
        suffix: "/mo",
      },
      {
        id: "seo",
        name: "SEO Optimization",
        desc: "On-page SEO, meta tags, sitemap, speed and Core Web Vitals",
        price: 4999,
        popular: true,
      },
      {
        id: "hosting",
        name: "Cloud Hosting (1 Year)",
        desc: "Managed hosting on Vercel / AWS with 99.9% uptime and CDN",
        price: 7999,
      },
      {
        id: "dashboard",
        name: "Admin Dashboard",
        desc: "Custom control panel with user management, reports, and exports",
        price: 12000,
      },
      {
        id: "email",
        name: "Business Email Setup",
        desc: "Professional email like you@yourbrand.com via Google Workspace",
        price: 1499,
      },
    ],
  },
];

const allServices = categories.flatMap((c) => c.services);

/* ─── Component ─────────────────────────────────────────────── */

export default function PriceCalculator() {
  const [activeCat, setActiveCat] = useState("website");
  const [selected, setSelected]   = useState([]);

  const toggle = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const currentCategory = categories.find((c) => c.id === activeCat);

  const total = allServices
    .filter((s) => selected.includes(s.id))
    .reduce((sum, s) => sum + s.price, 0);

  const selectedItems   = allServices.filter((s) => selected.includes(s.id));
  const hasMaintenance  = selected.includes("maintenance");

  return (
    <>
      {/* ── Quote Builder ── */}
      <section id="build-package" className="section-container pb-4">

        <FadeUp>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-sm text-text-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              Instant Quote Builder
            </span>
            <h2 className="section-heading mb-4">Build Your Custom Package</h2>
            <p className="section-subheading mx-auto">
              Pick the services you need — prices start from ₹4,999.
              No hidden charges, no surprises.
            </p>
          </div>
        </FadeUp>

        {/* Services grid + tabs share one container */}
        <div className="max-w-4xl mx-auto">

          {/* Category tabs */}
          <FadeUp>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
              {categories.map((cat) => {
                const { Icon } = cat;
                const isActive    = activeCat === cat.id;
                const catSelected = cat.services.filter((s) => selected.includes(s.id)).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 border ${
                      isActive
                        ? "text-white shadow-md border-transparent"
                        : "bg-white border-gray-200 text-text-muted hover:border-gray-300 hover:text-text"
                    }`}
                    style={isActive ? { backgroundColor: cat.color } : {}}
                  >
                    <Icon size={15} />
                    {cat.label}
                    {catSelected > 0 && (
                      <span
                        className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
                        style={
                          isActive
                            ? { backgroundColor: "rgba(255,255,255,0.25)", color: "#fff" }
                            : { backgroundColor: cat.color, color: "#fff" }
                        }
                      >
                        {catSelected}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </FadeUp>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            >
              {currentCategory.services.map((service) => {
                const isChecked = selected.includes(service.id);
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => toggle(service.id)}
                    whileTap={{ scale: 0.985 }}
                    className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      isChecked
                        ? "shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                    style={
                      isChecked
                        ? { borderColor: currentCategory.color, backgroundColor: currentCategory.light }
                        : {}
                    }
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <div
                        className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200"
                        style={
                          isChecked
                            ? { backgroundColor: currentCategory.color, borderColor: currentCategory.color }
                            : { borderColor: "#d1d5db", backgroundColor: "#fff" }
                        }
                      >
                        <AnimatePresence>
                          {isChecked && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.12 }}
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

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        {/* Name + Price row — always on one line */}
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-sm font-semibold text-text leading-snug">
                            {service.name}
                          </span>
                          <span
                            className="text-sm font-bold font-heading whitespace-nowrap shrink-0"
                            style={{ color: isChecked ? currentCategory.color : "#64748b" }}
                          >
                            ₹{service.price.toLocaleString("en-IN")}
                            {service.suffix || ""}
                          </span>
                        </div>
                        {/* Badge — sits below name, above description */}
                        {(service.popular || service.tag) && (
                          <div className="mt-1.5 mb-1">
                            {service.popular && (
                              <span
                                className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
                                style={{ backgroundColor: currentCategory.color }}
                              >
                                Popular
                              </span>
                            )}
                            {service.tag && !service.popular && (
                              <span
                                className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                                style={{
                                  color: currentCategory.color,
                                  backgroundColor: currentCategory.light,
                                  borderColor: currentCategory.border,
                                }}
                              >
                                {service.tag}
                              </span>
                            )}
                          </div>
                        )}
                        <p className="text-xs text-text-muted mt-1 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ── Summary / Total panel ── */}
          <FadeUp>
            <div
              className={`rounded-2xl border-2 bg-white overflow-hidden transition-all duration-300 ${
                selected.length > 0
                  ? "border-accent-blue shadow-lg shadow-blue-500/10"
                  : "border-gray-200"
              }`}
            >
              {/* Selected tags row */}
              <AnimatePresence>
                {selected.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100">
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3">
                        Selected · click to remove
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItems.map((s) => {
                          const cat = categories.find((c) =>
                            c.services.some((srv) => srv.id === s.id)
                          );
                          return (
                            <button
                              key={s.id}
                              onClick={() => toggle(s.id)}
                              className="group flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-all duration-150 hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                              style={{
                                color: cat?.color,
                                borderColor: cat?.border,
                                backgroundColor: cat?.light,
                              }}
                            >
                              {s.name}
                              <span className="text-current/40 group-hover:text-red-400">×</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Total row */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-text-muted font-medium mb-1">
                    {selected.length > 0 ? "Estimated Project Cost" : "Select services above to see your estimate"}
                  </p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-heading font-bold text-text">
                      ₹<NumberFlow value={total} />
                    </span>
                    {hasMaintenance && (
                      <span className="text-sm text-text-muted">+ ₹3,999/mo ongoing</span>
                    )}
                  </div>
                  {selected.length > 0 && (
                    <p className="text-xs text-text-muted mt-1">
                      {selected.length} service{selected.length !== 1 ? "s" : ""} selected
                      {selected.length >= 3 && (
                        <span className="text-green-600 font-medium ml-1.5">
                          · Bundle discount may apply
                        </span>
                      )}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  {selected.length > 0 && (
                    <button
                      onClick={() => setSelected([])}
                      className="text-xs text-text-muted hover:text-text px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-150"
                    >
                      Clear all
                    </button>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-all duration-200 hover:-translate-y-px hover:shadow-md hover:shadow-blue-500/20"
                  >
                    {selected.length > 0 ? "Get a Free Quote" : "Talk to Us"}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Special Deal / Contact Section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, #060f24 0%, #0b2348 40%, #0a1a3d 70%, #060f24 100%)",
          }}
        >
          {/* Glows */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[350px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[250px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(124,58,237,0.16) 0%, transparent 65%)",
            }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left — Copy ── */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-xs mb-6 w-fit">
                <Sparkles size={11} className="text-blue-400" />
                Special bundled pricing available
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-4">
                Need a custom deal<br className="hidden sm:block" /> built just for you?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                Bundle 3 or more services and unlock exclusive package pricing.
                Share your requirements and we&apos;ll send a detailed, transparent
                quote — no obligations, no pressure.
              </p>

              <ul className="flex flex-col gap-3.5">
                {[
                  { Icon: CheckCircle2, text: "Free consultation — understand before you commit" },
                  { Icon: Shield,       text: "No upfront payment — pay in milestones" },
                  { Icon: Clock,        text: "Detailed quote delivered within 24 hours" },
                  { Icon: Headphones,   text: "30-day post-launch support on every project" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-white/70">
                    <Icon size={15} className="text-blue-400 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right — Contact cards ── */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center gap-3 lg:border-l border-white/10">

              {/* WhatsApp */}
              <a
                href="https://wa.me/918852882508?text=Hi%2C%20I%27d%20like%20a%20custom%20quote%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.09)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm mb-0.5">Chat on WhatsApp</p>
                  <p className="text-white/50 text-xs">+91 88528 82508 · Usually replies within 1 hour</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:contact.thenexturl@gmail.com?subject=Custom%20Project%20Quote%20Request"
                className="group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.09)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm mb-0.5">Send an Email</p>
                  <p className="text-white/50 text-xs">contact.thenexturl@gmail.com · Quote in 24 h</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200"
                />
              </a>

              {/* Contact page CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Fill a Detailed Project Brief
                <ArrowRight size={14} />
              </Link>

              {/* Trust bar */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {[
                  { value: "7+",    label: "Projects" },
                  { value: "24h",   label: "Quote Time" },
                  { value: "MSME",  label: "Registered" },
                  { value: "Free",  label: "Consultation" },
                ].map((t) => (
                  <div key={t.label} className="text-center py-3 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <p className="text-white font-heading font-bold text-base leading-none">{t.value}</p>
                    <p className="text-white/35 text-[10px] mt-1">{t.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
