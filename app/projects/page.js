import projects from "@/data/projects";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Projects | The Next URL",
  description:
    "Explore all projects built by The Next URL — from restaurant POS systems and school ERPs to e-commerce platforms and service booking apps.",
};

export default function ProjectsPage() {
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
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/60 text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Latest works
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

      {/* ── Projects Grid ── */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden
                         hover:shadow-xl hover:shadow-black/5 hover:border-gray-200
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Visual banner */}
              <div
                className={`relative h-52 sm:h-60 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Dot grid */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-transparent to-black/30" />

                {/* Emoji watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[100px] sm:text-[120px] opacity-[0.15] select-none leading-none">
                    {project.emoji}
                  </span>
                </div>

                {/* Project number */}
                <span className="absolute top-4 right-5 text-white/10 font-heading font-bold text-6xl leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Categories */}
                <div className="absolute bottom-4 left-5 flex gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs text-white/70 bg-white/10 backdrop-blur-sm
                                 border border-white/15 px-2.5 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Client tag */}
                <span className="text-xs text-accent-blue font-medium tracking-wide">
                  {project.client}
                </span>

                {/* Title */}
                <h2 className="font-heading font-bold text-text text-xl sm:text-2xl mt-1.5 mb-3">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2
                        size={14}
                        className="text-accent-blue mt-0.5 flex-shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-text-muted bg-gray-50 border border-gray-200
                                 px-2.5 py-1 rounded-lg font-mono"
                    >
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
          className="rounded-2xl px-8 py-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, #060f24 0%, #0b2348 50%, #060f24 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Want something like this?
          </h2>
          <p className="text-white/50 text-sm mb-7 max-w-md mx-auto">
            Tell us about your project and we&apos;ll build the right solution
            for your business or institution.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue
                         text-white text-sm font-medium hover:bg-accent-blue/90
                         transition-all duration-200 hover:-translate-y-px"
            >
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10
                         text-white/80 text-sm font-medium hover:bg-white/15
                         transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
