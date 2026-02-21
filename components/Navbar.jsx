"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";

/* ─── Nav data ──────────────────────────────────────────────── */

const desktopLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
];

const mobileMenuSections = [
  {
    number: "01",
    label: "Solutions",
    links: [
      { label: "Web Development", href: "/#solutions" },
      { label: "ERP Systems",     href: "/#why-us" },
      { label: "All Services",    href: "/services" },
    ],
  },
  {
    number: "02",
    label: "Work",
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "Who We Serve", href: "/#who-we-serve" },
    ],
  },
  {
    number: "03",
    label: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "WhatsApp",   href: "https://wa.me/918852882508", external: true },
    ],
  },
];

/* ─── Framer variants ───────────────────────────────────────── */

const panelVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: "easeInOut" } },
};

const colVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: 0.08 + i * 0.06, ease: "easeOut" },
  }),
};

/* ─── Component ─────────────────────────────────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();
  const router                  = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const hash       = href.includes("#") ? "#" + href.split("#")[1] : null;
    const targetPath = href.split("#")[0] || "/";
    if (pathname === targetPath || (pathname === "/" && targetPath === "/")) {
      const lenis = window.__lenis;
      if (hash) {
        lenis
          ? lenis.scrollTo(hash, { offset: -80, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
          : document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        lenis
          ? lenis.scrollTo(0, { duration: 1.0, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
          : window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(hash ? targetPath + hash : targetPath);
    }
  };

  const isActive = (href) => {
    if (href === "/")         return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gray-100 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center gap-6">

        {/* ── Brand — always left ── */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <Image
            src="/brandlogo.png"
            alt="The Next URL"
            width={130}
            height={44}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
            unoptimized
          />
          {/* Wordmark — hidden on very small screens where logo alone suffices */}
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-heading font-extrabold text-text text-[15px] tracking-tight">
              The Next <span className="text-accent-blue">URL</span>
            </span>
            <span className="text-[9px] text-text-muted/60 tracking-widest uppercase font-medium mt-0.5">
              Digital Agency
            </span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {desktopLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-accent-blue"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {link.label}
              {/* Active underline dot */}
              {isActive(link.href) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue" />
              )}
            </a>
          ))}
        </nav>

        {/* ── Right: CTA + hamburger ── */}
        <div className="flex items-center gap-2 ml-auto shrink-0">

          {/* CTA button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl
                       bg-accent-blue text-white hover:bg-accent-blue/90 transition-all duration-200
                       hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-px"
          >
            <span className="hidden sm:inline">Get in Touch</span>
            <span className="sm:hidden text-xs">Contact</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl
                       hover:bg-gray-100 transition-colors duration-200"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={20} strokeWidth={1.75} className="text-text" />
                </motion.span>
              ) : (
                <motion.span key="open"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={20} strokeWidth={1.75} className="text-text" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

      </div>

      {/* ── Mobile / tablet menu panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="bg-white">

              {/* 3-column link grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3">
                {mobileMenuSections.map((section, i) => (
                  <motion.div
                    key={section.label}
                    custom={i}
                    variants={colVariants}
                    initial="hidden"
                    animate="visible"
                    className={`py-2 px-0 sm:px-8 ${
                      i > 0 ? "sm:border-l border-gray-100" : ""
                    } ${i < mobileMenuSections.length - 1 ? "mb-7 sm:mb-0" : ""}`}
                  >
                    <div className="flex items-baseline gap-2.5 mb-5">
                      <span className="text-[10px] font-mono text-accent-blue tracking-widest">
                        {section.number}
                      </span>
                      <span className="text-text font-heading font-semibold text-lg tracking-tight">
                        {section.label}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      {section.links.map((link) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="group flex items-center gap-2 text-text-muted hover:text-text
                                       text-sm py-2 transition-all duration-200 hover:translate-x-0.5"
                          >
                            <ArrowUpRight size={13}
                              className="text-accent-blue/40 group-hover:text-accent-blue
                                         group-hover:-translate-y-px group-hover:translate-x-px
                                         transition-all duration-200" />
                            {link.label}
                          </a>
                        ) : (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="group flex items-center gap-2 text-text-muted hover:text-text
                                       text-sm py-2 transition-all duration-200 hover:translate-x-0.5"
                          >
                            <ArrowUpRight size={13}
                              className="text-accent-blue/40 group-hover:text-accent-blue
                                         group-hover:-translate-y-px group-hover:translate-x-px
                                         transition-all duration-200" />
                            {link.label}
                          </a>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom strip */}
              <div className="border-t border-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                              py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <a
                  href="mailto:contact.thenexturl@gmail.com"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-text
                             text-xs transition-colors duration-200"
                >
                  <Mail size={12} />
                  contact.thenexturl@gmail.com
                </a>
                <span className="text-text-muted/50 text-xs">
                  © 2026 The Next URL · Shivamogga, Karnataka
                </span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
