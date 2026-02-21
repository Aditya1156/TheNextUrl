import {
  Globe,
  LayoutDashboard,
  Database,
  Search,
  Cloud,
  ShieldCheck,
  Smartphone,
  Wrench,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Code2,
  Lightbulb,
  Rocket,
  Headphones,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | The Next URL",
  description:
    "Full-range digital services by The Next URL — custom websites, school ERP systems, e-commerce platforms, mobile apps, admin dashboards, SEO, cloud hosting, and ongoing maintenance. Serving institutions and businesses across India.",
  alternates: { canonical: "https://www.thenexturl.in/services" },
  openGraph: {
    title: "Services by The Next URL",
    description:
      "Custom websites, ERP systems, e-commerce platforms, mobile apps, and ongoing support for schools, businesses, and institutions across India.",
    url: "https://www.thenexturl.in/services",
  },
};

/* ─── Data ─────────────────────────────────────────────────── */

const coreServices = [
  {
    number: "01",
    Icon: Globe,
    accent: "#2563eb",
    accentAlpha: "rgba(37,99,235,0.12)",
    accentBorder: "#BFDBFE",
    accentBg: "#EFF6FF",
    label: "Web Design & Development",
    title: "Custom websites that rank, load fast, and convert",
    desc: "We design and build modern websites tailored to your brand — from multi-page business sites and school portals to landing pages and booking platforms. Built with Next.js for SEO, speed, and scalability.",
    includes: [
      "Custom UI/UX design from scratch",
      "Mobile-first responsive development",
      "Next.js / React for blazing performance",
      "Contact forms & WhatsApp integration",
      "Google Analytics & Search Console setup",
      "On-page SEO & meta tag optimization",
      "Image optimization & Core Web Vitals",
      "CMS integration for easy content updates",
    ],
    for: ["Schools & Colleges", "Local Businesses", "Startups", "Restaurants"],
    timeline: "2–4 weeks",
  },
  {
    number: "02",
    Icon: Database,
    accent: "#7c3aed",
    accentAlpha: "rgba(124,58,237,0.10)",
    accentBorder: "#DDD6FE",
    accentBg: "#F5F3FF",
    label: "ERP & Management Systems",
    title: "End-to-end ERP platforms for schools, colleges & businesses",
    desc: "From student attendance to fee management and payroll — we build fully integrated ERP systems that automate your daily operations and give real-time visibility across your institution or enterprise.",
    includes: [
      "Student & staff management portals",
      "Attendance tracking (biometric-ready)",
      "Fee collection & payment history",
      "Report card & grade management",
      "Parent notification & communication system",
      "Payroll & HR management module",
      "Custom workflow & process automation",
      "Role-based access control (RBAC)",
    ],
    for: ["Schools", "Colleges", "Universities", "Coaching Centres"],
    timeline: "6–10 weeks",
  },
  {
    number: "03",
    Icon: ShoppingCart,
    accent: "#d97706",
    accentAlpha: "rgba(217,119,6,0.10)",
    accentBorder: "#FDE68A",
    accentBg: "#FFFBEB",
    label: "E-Commerce & Booking Platforms",
    title: "Online stores and booking systems built to sell",
    desc: "We build high-converting e-commerce stores and service booking apps — with smooth checkout flows, payment gateway integration, and intuitive dashboards so you can manage your business with ease.",
    includes: [
      "Product catalog with search & filters",
      "Razorpay / Stripe / UPI payment checkout",
      "Order management & real-time tracking",
      "Inventory & stock management system",
      "Seller & admin management dashboard",
      "Slot booking & availability calendar",
      "Customer accounts & order history",
      "Promo codes & discount engine",
    ],
    for: ["Retail & D2C Brands", "Hotels & Hospitality", "Service Businesses", "Local Shops"],
    timeline: "4–8 weeks",
  },
  {
    number: "04",
    Icon: Smartphone,
    accent: "#059669",
    accentAlpha: "rgba(5,150,105,0.10)",
    accentBorder: "#A7F3D0",
    accentBg: "#ECFDF5",
    label: "Mobile App Development",
    title: "Cross-platform mobile apps for Android & iOS",
    desc: "Using React Native, we build native-feel mobile apps that work seamlessly on both platforms — whether it's a customer-facing app, an internal field tool, or a service booking platform.",
    includes: [
      "Cross-platform React Native development",
      "Android & iOS from a single codebase",
      "Push notifications & in-app alerts",
      "Offline mode with background data sync",
      "Firebase / REST API backend integration",
      "OTP, email & social login authentication",
      "Play Store & App Store deployment",
      "30-day post-launch bug-fix support",
    ],
    for: ["Startups", "Service Businesses", "Schools", "Enterprises"],
    timeline: "6–12 weeks",
  },
];

const additionalServices = [
  {
    Icon: LayoutDashboard,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Admin Dashboards & Portals",
    desc: "Custom role-based dashboards with live data, user management, and exportable reports — built for any business type.",
    features: [
      "Role-based access control (RBAC)",
      "Real-time data visualizations",
      "User & content management",
      "PDF / Excel export support",
    ],
  },
  {
    Icon: Search,
    color: "text-orange-600",
    bg: "bg-orange-50",
    title: "SEO & Digital Marketing",
    desc: "Get found on Google with technical SEO, local search optimization, and content strategy tailored for Indian businesses.",
    features: [
      "Technical SEO audit & fixes",
      "Local SEO for Karnataka businesses",
      "Google Search Console setup",
      "Keyword research & content planning",
    ],
  },
  {
    Icon: Cloud,
    color: "text-sky-600",
    bg: "bg-sky-50",
    title: "Cloud Hosting & Deployment",
    desc: "Reliable infrastructure on Vercel, AWS, or DigitalOcean — 99.9% uptime, global CDN, and daily automated backups.",
    features: [
      "Vercel / AWS / DigitalOcean setup",
      "Global CDN for fast delivery",
      "SSL & custom domain management",
      "Daily automated backups",
    ],
  },
  {
    Icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-50",
    title: "Security & Compliance",
    desc: "Every project ships with SSL, OWASP-hardened code, CSP headers, and encrypted data storage — security as a default.",
    features: [
      "SSL certificate setup & renewal",
      "OWASP top-10 hardening",
      "Content Security Policy headers",
      "Encrypted data (at rest & in transit)",
    ],
  },
  {
    Icon: Wrench,
    color: "text-slate-600",
    bg: "bg-slate-50",
    title: "Maintenance & Support",
    desc: "Monthly maintenance, performance monitoring, and priority WhatsApp support — so your platform stays fast and secure.",
    features: [
      "Monthly performance audits",
      "Bug fixes & feature updates",
      "24/7 WhatsApp emergency support",
      "Uptime monitoring & alert system",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    Icon: Lightbulb,
    title: "Discovery & Planning",
    desc: "We learn your goals, users, and requirements. You receive a detailed project scope, feature list, and delivery timeline before any work begins.",
    cardBg: "bg-blue-50/60",
    iconWrap: "bg-blue-100 text-blue-600",
  },
  {
    number: "02",
    Icon: Code2,
    title: "Design & Prototype",
    desc: "Our designers create wireframes and high-fidelity mockups. You review and approve the design before a single line of code is written.",
    cardBg: "bg-violet-50/60",
    iconWrap: "bg-violet-100 text-violet-600",
  },
  {
    number: "03",
    Icon: Rocket,
    title: "Build & Test",
    desc: "We develop with modern tech, run thorough cross-device testing, and do a full pre-launch walkthrough with you before going live.",
    cardBg: "bg-emerald-50/60",
    iconWrap: "bg-emerald-100 text-emerald-600",
  },
  {
    number: "04",
    Icon: Headphones,
    title: "Launch & Support",
    desc: "We deploy to production, set up analytics and monitoring, and provide hands-on training. 30-day post-launch support is always included.",
    cardBg: "bg-amber-50/60",
    iconWrap: "bg-amber-100 text-amber-600",
  },
];

const techStack = [
  { name: "Next.js", cat: "Frontend" },
  { name: "React", cat: "Frontend" },
  { name: "React Native", cat: "Mobile" },
  { name: "Tailwind CSS", cat: "Frontend" },
  { name: "Framer Motion", cat: "Frontend" },
  { name: "Node.js", cat: "Backend" },
  { name: "Express", cat: "Backend" },
  { name: "Python", cat: "Backend" },
  { name: "PostgreSQL", cat: "Database" },
  { name: "MongoDB", cat: "Database" },
  { name: "MySQL", cat: "Database" },
  { name: "Firebase", cat: "Database" },
  { name: "Vercel", cat: "Infrastructure" },
  { name: "AWS", cat: "Infrastructure" },
  { name: "DigitalOcean", cat: "Infrastructure" },
  { name: "Razorpay", cat: "Payments" },
  { name: "Stripe", cat: "Payments" },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
        style={{
          background:
            "linear-gradient(135deg, #060f24 0%, #0b2348 35%, #0a3d3d 65%, #060f24 100%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[600px] h-[320px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(20,184,166,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            9 services · one team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
            Everything you need to build<br className="hidden sm:block" /> your digital presence
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
            From custom websites and ERP systems to mobile apps and ongoing maintenance —
            we build what your institution or business needs to grow online.
          </p>

          {/* Stats pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: "9+", label: "Projects Delivered" },
              { value: "9", label: "Service Areas" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="font-heading font-bold text-white text-lg leading-none">
                  {s.value}
                </span>
                <span className="text-white/40 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Core Services ── */}
      <section className="section-container">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-text-muted mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Core offerings
          </span>
          <h2 className="section-heading">
            What we <span className="text-accent-blue">build</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-xl">
            Four specializations that cover the full digital needs of schools,
            businesses, and institutions — in detail.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {coreServices.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.number}
                className="rounded-2xl border overflow-hidden hover:shadow-2xl hover:shadow-black/6 transition-all duration-500"
                style={{
                  borderColor: service.accentBorder,
                  backgroundColor: service.accentBg,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">

                  {/* ── Left — info ── */}
                  <div className="p-8 sm:p-10">
                    {/* Number + icon row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: service.accentAlpha }}
                      >
                        <Icon size={22} style={{ color: service.accent }} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: service.accent }}
                        >
                          {service.label}
                        </span>
                        <p
                          className="font-heading font-bold text-5xl leading-none select-none"
                          style={{ color: service.accentAlpha }}
                        >
                          {service.number}
                        </p>
                      </div>
                    </div>

                    <h2 className="font-heading font-bold text-text text-xl sm:text-2xl mb-3 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-text-muted text-sm leading-relaxed mb-7 max-w-lg">
                      {service.desc}
                    </p>

                    {/* Meta chips */}
                    <div className="flex flex-wrap gap-5">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-text-muted flex-shrink-0" />
                        <span className="text-xs text-text-muted">
                          Timeline:{" "}
                          <span className="font-semibold text-text">{service.timeline}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-text-muted flex-shrink-0" />
                        <span className="text-xs text-text-muted">
                          For:{" "}
                          <span className="font-semibold text-text">
                            {service.for.join(", ")}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── Right — what's included ── */}
                  <div
                    className="bg-white border-t lg:border-t-0 lg:border-l p-8 flex flex-col"
                    style={{ borderColor: service.accentBorder }}
                  >
                    <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-5">
                      What&apos;s included
                    </p>
                    <ul className="flex flex-col gap-3 flex-1">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                          <CheckCircle2
                            size={14}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: service.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="mt-6 pt-5 border-t"
                      style={{ borderColor: service.accentBorder }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                        style={{ color: service.accent }}
                      >
                        Get a free quote <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Additional Services ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-text-muted mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Supporting services
          </span>
          <h2 className="section-heading">
            More of what <span className="text-accent-blue">we offer</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-xl">
            Beyond the core builds, we cover everything it takes to keep your
            platform visible, secure, and running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {additionalServices.map((s) => {
            const { Icon } = s;
            return (
              <div
                key={s.title}
                className="group p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-black/5 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.bg}`}>
                  <Icon size={20} className={s.color} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle2
                          size={13}
                          className="text-accent-blue mt-0.5 flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Our Process ── */}
      <section
        className="py-20 sm:py-28"
        style={{
          background:
            "linear-gradient(135deg, #060f24 0%, #0b2348 50%, #0a3d3d 80%, #060f24 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/60 text-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              How we work
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              Our process
            </h2>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              A clear, transparent process from kickoff to launch — so you always
              know exactly what&apos;s happening and when.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => {
              const { Icon } = step;
              return (
                <div
                  key={step.number}
                  className="relative p-7 rounded-2xl bg-white/5 border border-white/10"
                >
                  {/* Connector (desktop) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-white/15 z-10" />
                  )}

                  {/* Big number watermark */}
                  <span
                    className="text-7xl font-heading font-bold select-none leading-none mb-3 block"
                    style={{ color: "rgba(255,255,255,0.05)" }}
                  >
                    {step.number}
                  </span>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${step.iconWrap}`}
                  >
                    <Icon size={18} />
                  </div>

                  <h3 className="font-heading font-semibold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-text-muted mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Technologies
          </span>
          <h2 className="section-heading">
            Built with the <span className="text-accent-blue">best stack</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-lg mx-auto">
            We use modern, battle-tested technologies that deliver performance,
            scalability, and long-term maintainability.
          </p>
        </div>

        {/* Grouped tech badges */}
        {[
          { cat: "Frontend", color: "border-blue-200 text-blue-700 bg-blue-50" },
          { cat: "Backend", color: "border-violet-200 text-violet-700 bg-violet-50" },
          { cat: "Database", color: "border-emerald-200 text-emerald-700 bg-emerald-50" },
          { cat: "Infrastructure", color: "border-sky-200 text-sky-700 bg-sky-50" },
          { cat: "Payments", color: "border-amber-200 text-amber-700 bg-amber-50" },
          { cat: "Mobile", color: "border-green-200 text-green-700 bg-green-50" },
        ].map((group) => {
          const items = techStack.filter((t) => t.cat === group.cat);
          if (!items.length) return null;
          return (
            <div key={group.cat} className="mb-6">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">
                {group.cat}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t.name}
                    className={`px-4 py-2 rounded-xl border text-sm font-mono font-medium ${group.color}`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── FAQ strip ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              q: "Do you work with clients outside Karnataka?",
              a: "Yes — we work with clients across India. All communication, design reviews, and delivery happen online via WhatsApp, Zoom, and email.",
            },
            {
              q: "How much does a typical project cost?",
              a: "Projects start at ₹14,999 for a simple website. ERP systems and mobile apps are scoped individually. Visit our pricing page for detailed plans.",
            },
            {
              q: "What after-launch support do you offer?",
              a: "Every project includes 30 days of free bug-fix support. After that, we offer affordable monthly maintenance plans with 24/7 WhatsApp availability.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="p-7 rounded-2xl border border-gray-100 bg-white"
            >
              <p className="font-heading font-semibold text-text text-base mb-3 leading-snug">
                {item.q}
              </p>
              <p className="text-text-muted text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #060f24 0%, #0b2348 50%, #0a3d3d 80%, #060f24 100%)",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Free consultation · No obligations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
              Not sure which service you need?
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
              Tell us about your project and we&apos;ll recommend the right solution —
              with a transparent quote and zero pressure.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-all duration-200 hover:-translate-y-px"
              >
                Get a Free Consultation <ArrowRight size={15} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 transition-all duration-200"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
