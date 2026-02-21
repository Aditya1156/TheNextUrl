import Image from "next/image";
import Link from "next/link";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

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

        {/* ── Divider ── */}
        <div className="border-t border-gray-100 mt-10" />

        {/* ── MSME strip — minimalist ── */}
        <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Left: logo + verified label */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-gray-200 bg-white shrink-0 flex items-center justify-center p-0.5">
              <Image
                src="/msme.png"
                alt="MSME"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[11px] font-semibold text-text tracking-wide uppercase">
                  Govt. of India · MSME Registered
                </span>
              </div>
              <p className="text-[10px] text-text-muted/60 mt-0.5">
                Ministry of Micro, Small &amp; Medium Enterprises
              </p>
            </div>
          </div>

          {/* Right: key details inline */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-text-muted">
            <span className="font-mono text-text font-medium">UDYAM-BR-06-0060805</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>Micro Enterprise · Services</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>NIC 62013</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href="https://udyamregistration.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted/50 hover:text-accent-blue transition-colors underline underline-offset-2"
            >
              Verify
            </a>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
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
