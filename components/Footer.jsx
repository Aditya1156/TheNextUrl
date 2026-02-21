import Image from "next/image";
import Link from "next/link";
import { HiMail, HiPhone, HiLocationMarker, HiBadgeCheck } from "react-icons/hi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Technology", href: "/#tech-stack" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/brandlogo.png"
                alt="The Next URL"
                width={200}
                height={70}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-text-muted leading-relaxed text-sm">
              We don&apos;t just build websites — we build your next URL.
              Bold. Scalable. Built to last.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-blue transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <HiMail className="text-accent-blue shrink-0" />
                <a href="mailto:contact.thenexturl@gmail.com" className="hover:text-accent-blue transition-colors">
                  contact.thenexturl@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <HiPhone className="text-accent-blue shrink-0" />
                <a href="tel:+918852882508" className="hover:text-accent-blue transition-colors">
                  +91 88528 82508
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-muted text-sm">
                <HiLocationMarker className="text-accent-blue shrink-0 mt-0.5" />
                <span>Shivamogga, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── MSME Certification strip ── */}
        <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/70 to-white overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-6">

            {/* Certificate thumbnail */}
            <div className="shrink-0 w-28 sm:w-32 rounded-xl overflow-hidden border border-blue-100 shadow-sm bg-white">
              <Image
                src="/msme.png"
                alt="MSME Udyam Registration Certificate"
                width={128}
                height={90}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <HiBadgeCheck className="text-green-600 text-base" />
                  <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
                    MSME Registered Enterprise
                  </span>
                </span>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-text-muted mb-2">
                <span>
                  Udyam No:{" "}
                  <span className="font-semibold text-text font-mono">UDYAM-BR-06-0060805</span>
                </span>
                <span>
                  Enterprise:{" "}
                  <span className="font-semibold text-text">THENEXTURL</span>
                </span>
                <span>
                  Classification:{" "}
                  <span className="font-semibold text-text">Micro (2025–26)</span>
                </span>
                <span>
                  Activity:{" "}
                  <span className="font-semibold text-text">Services · NIC 62013</span>
                </span>
                <span>
                  Registered:{" "}
                  <span className="font-semibold text-text">22 Feb 2026</span>
                </span>
              </div>

              <p className="text-[11px] text-text-muted/60 leading-relaxed">
                Ministry of Micro, Small &amp; Medium Enterprises, Government of India ·{" "}
                <a
                  href="https://udyamregistration.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-accent-blue transition-colors"
                >
                  udyamregistration.gov.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="border-t border-gray-100 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} The Next URL. All rights reserved.
          </p>
          <p className="text-text-muted/60 text-xs">
            Your Digital Era Starts Here
          </p>
        </div>

      </div>
    </footer>
  );
}
