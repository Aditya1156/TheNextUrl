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
                <a href="mailto:hello@thenexturl.in" className="hover:text-accent-blue transition-colors">
                  hello@thenexturl.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <HiPhone className="text-accent-blue shrink-0" />
                <a href="tel:+919999999999" className="hover:text-accent-blue transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-muted text-sm">
                <HiLocationMarker className="text-accent-blue shrink-0 mt-0.5" />
                <span>Shivamogga, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
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
