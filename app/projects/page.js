import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Projects | The Next URL",
  description:
    "Explore all projects built by The Next URL — restaurant POS systems, school ERPs, e-commerce platforms, hotel booking sites, coaching portals, and service booking apps.",
  alternates: { canonical: "https://www.thenexturl.in/projects" },
  openGraph: {
    title: "Projects by The Next URL",
    description:
      "See what we've built — from restaurant POS systems and school ERPs to e-commerce and service booking platforms.",
    url: "https://www.thenexturl.in/projects",
  },
};

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

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
            {projects.length} projects delivered
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
            Our finished<br />projects
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real solutions built for real clients — from schools and restaurants
            to e-commerce stores and booking platforms.
          </p>
        </div>
      </div>

      <section className="section-container space-y-8">

        {/* ── Featured card (first project — full width) ── */}
        <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-2xl hover:shadow-black/8 hover:border-gray-200 transition-all duration-500">

          {/* Image */}
          <div className={`relative h-64 sm:h-80 lg:h-full min-h-[320px] bg-gradient-to-br ${featured.gradient} overflow-hidden`}>
            <Image
              src={featured.images[0]}
              alt={featured.title}
              fill
              className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Number */}
            <span className="absolute top-5 left-5 text-white/10 font-heading font-bold text-8xl leading-none select-none">
              01
            </span>
            {/* Categories */}
            <div className="absolute bottom-5 left-5 flex gap-2">
              {featured.categories.map((cat) => (
                <span key={cat} className="text-xs text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold text-accent-blue tracking-wide uppercase mb-3">
              {featured.client}
            </span>
            <h2 className="font-heading font-bold text-text text-2xl sm:text-3xl mb-4 leading-tight">
              {featured.title}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {featured.desc}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
              {featured.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                  <CheckCircle2 size={14} className="text-accent-blue mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-100">
              {featured.tech.map((t) => (
                <span key={t} className="text-xs text-text-muted bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Rest: 2-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-black/6 hover:border-gray-200 transition-all duration-400 hover:-translate-y-1 flex flex-col"
            >
              {/* Image area */}
              <div className={`relative h-52 sm:h-60 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 font-heading font-bold leading-none select-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "rgba(255,255,255,0.08)" }}
                >
                  {String(i + 2).padStart(2, "0")}
                </span>

                {/* Categories */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.categories.map((cat) => (
                    <span key={cat} className="text-[11px] text-white/75 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-0.5 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Hover overlay arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/15 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-accent-blue tracking-wide uppercase mb-2">
                  {project.client}
                </span>
                <h2 className="font-heading font-bold text-text text-xl mb-2 leading-tight group-hover:text-accent-blue transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-3 mb-4">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-text-muted">
                      <CheckCircle2 size={12} className="text-accent-blue mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] text-text-muted bg-gray-50 border border-gray-200 px-2 py-0.5 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-14 text-center"
          style={{
            background: "linear-gradient(135deg, #060f24 0%, #0b2348 50%, #0a3d3d 80%, #060f24 100%)",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Ready to build?
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              Want something like this?
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
              Tell us about your project and we&apos;ll build the right solution
              for your business or institution.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/90 transition-all duration-200 hover:-translate-y-px"
              >
                Start a Project <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
