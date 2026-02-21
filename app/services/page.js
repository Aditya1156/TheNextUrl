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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | The Next URL",
  description:
    "Full range of digital services by The Next URL — web design, school ERP systems, admin dashboards, SEO, cloud hosting, SSL, and ongoing website maintenance. Serving institutions across India.",
  alternates: {
    canonical: "https://www.thenexturl.in/services",
  },
  openGraph: {
    title: "Services by The Next URL",
    description:
      "Web design, ERP systems, SEO, cloud hosting, and ongoing support for schools, businesses, and institutions.",
    url: "https://www.thenexturl.in/services",
  },
};

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "Modern, fast, responsive websites built to convert visitors into clients.",
    details: [
      "Custom UI/UX design tailored to your brand",
      "Mobile-first, pixel-perfect development",
      "Next.js / React for blazing-fast performance",
      "CMS integration for easy content management",
    ],
    accent: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    desc: "Custom management dashboards for schools, colleges, and businesses.",
    details: [
      "Role-based access control (RBAC)",
      "Real-time analytics and reporting",
      "Student, staff, and parent portals",
      "Attendance, grades, and fee management",
    ],
    accent: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Database,
    title: "ERP & Backend Systems",
    desc: "Full-stack ERP platforms with robust, scalable database architecture.",
    details: [
      "Inventory, HR, and payroll modules",
      "Custom workflow and process automation",
      "REST API development and integration",
      "PostgreSQL / MongoDB database design",
    ],
    accent: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Get found online with on-page SEO, analytics, and content strategy.",
    details: [
      "Technical SEO audit and optimization",
      "Google Search Console & Analytics setup",
      "Keyword research and content planning",
      "Local SEO for Karnataka businesses",
    ],
    accent: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    desc: "Reliable cloud deployment with 99.9% uptime and global CDN delivery.",
    details: [
      "Vercel, AWS, and DigitalOcean deployment",
      "Global CDN for fast load times worldwide",
      "Auto-scaling and load balancing",
      "Daily backups and disaster recovery",
    ],
    accent: "from-sky-500/10 to-blue-500/10",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "SSL, data protection, and security best practices baked into every build.",
    details: [
      "SSL certificate installation and renewal",
      "OWASP top-10 vulnerability prevention",
      "Data encryption at rest and in transit",
      "Regular security audits and pen testing",
    ],
    accent: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "Team Collaboration Tools",
    desc: "Internal portals and communication platforms built for your team.",
    details: [
      "Intranet and internal knowledge base",
      "Task management and workflow boards",
      "Notice boards, announcements, and alerts",
      "Document management and sharing",
    ],
    accent: "from-pink-500/10 to-fuchsia-500/10",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    desc: "Pixel-perfect mobile experiences across all screen sizes and devices.",
    details: [
      "Responsive design tested on 50+ devices",
      "Progressive Web App (PWA) support",
      "Touch-friendly UI/UX patterns",
      "Core Web Vitals optimization",
    ],
    accent: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing support, updates, and performance monitoring after launch.",
    details: [
      "Monthly performance and uptime reports",
      "Bug fixes and feature updates",
      "24/7 emergency support via WhatsApp",
      "Proactive monitoring with alerts",
    ],
    accent: "from-slate-500/10 to-gray-500/10",
    iconColor: "text-slate-500",
    iconBg: "bg-slate-500/10",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div
        className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
        style={{
          background:
            "linear-gradient(135deg, #060f24 0%, #0b2348 35%, #0a3d3d 65%, #060f24 100%)",
        }}
      >
        {/* Teal glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[600px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(20,184,166,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Our services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
            Digital services to<br />grow your business
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything you need to build, scale, and maintain your digital
            presence — all under one roof.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-5 p-7 rounded-2xl border border-gray-100 bg-white
                           hover:border-gray-200 hover:shadow-xl hover:shadow-black/5
                           transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.iconBg} flex-shrink-0`}
                >
                  <Icon size={21} className={service.iconColor} />
                </div>

                {/* Title + desc */}
                <div>
                  <h2 className="font-heading font-semibold text-text text-lg mb-2">
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <CheckCircle2
                          size={15}
                          className="text-accent-blue mt-0.5 flex-shrink-0"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div
          className="rounded-2xl px-8 py-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, #060f24 0%, #0b2348 50%, #060f24 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Ready to get started?
          </h2>
          <p className="text-white/50 text-sm mb-7 max-w-md mx-auto">
            Tell us what you need and we&apos;ll build the right solution for your
            institution or business.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-all duration-200 hover:-translate-y-px"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
