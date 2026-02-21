"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";

const navSections = [
  {
    number: "01",
    label: "Solutions",
    links: [
      { label: "Web Development", href: "/#solutions" },
      { label: "ERP Systems",     href: "/#why-us" },
      { label: "Tech Stack",      href: "/#tech-stack" },
    ],
  },
  {
    number: "02",
    label: "Work",
    links: [
      { label: "All Projects",      href: "/projects" },
      { label: "Featured Projects", href: "/#projects" },
      { label: "Pricing Plans",     href: "/#pricing" },
      { label: "Who We Serve",      href: "/#who-we-serve" },
    ],
  },
  {
    number: "03",
    label: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "WhatsApp",   href: "https://wa.me/91885288250", external: true },
    ],
  },
];

const panelVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.08 + i * 0.06, ease: "easeOut" },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const hash = href.includes("#") ? "#" + href.split("#")[1] : null;
    const targetPath = href.split("#")[0] || "/";
    if (pathname === targetPath || (pathname === "/" && targetPath === "/")) {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(hash ? targetPath + hash : targetPath);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white ${
        open
          ? "shadow-none border-b border-gray-100"
          : scrolled
          ? "shadow-sm border-b border-gray-100"
          : "border-b border-transparent"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">

        {/* Hamburger — Menu / X icon */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 w-9 h-9 flex items-center justify-center rounded-lg
                     hover:bg-gray-100 transition-colors duration-200"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X size={20} strokeWidth={1.75} className="text-text" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0,  opacity: 1 }}
                exit={{   rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu size={20} strokeWidth={1.75} className="text-text" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Logo — centered */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/#hero")}
          className="absolute left-1/2 -translate-x-1/2 z-10"
        >
          <Image
            src="/brandlogo.png"
            alt="The Next URL"
            width={260}
            height={88}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* CTA */}
        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2
                     bg-text text-white rounded-lg hover:bg-text/80 transition-all duration-200
                     hover:shadow-lg hover:shadow-black/10 hover:-translate-y-px"
        >
          Get in Touch <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* ── Expanded Menu Panel — white theme ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-gray-100"
          >
            <div className="bg-white">

              {/* Columns */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3">
                {navSections.map((section, i) => (
                  <motion.div
                    key={section.label}
                    custom={i}
                    variants={colVariants}
                    initial="hidden"
                    animate="visible"
                    className={`py-2 px-0 sm:px-8 ${
                      i > 0 ? "sm:border-l border-gray-100" : ""
                    } ${i < navSections.length - 1 ? "mb-7 sm:mb-0" : ""}`}
                  >
                    {/* Number + label */}
                    <div className="flex items-baseline gap-2.5 mb-5">
                      <span className="text-[10px] font-mono text-accent-blue tracking-widest">
                        {section.number}
                      </span>
                      <span className="text-text font-heading font-semibold text-lg tracking-tight">
                        {section.label}
                      </span>
                    </div>

                    {/* Links */}
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
                            <ArrowUpRight
                              size={13}
                              className="text-accent-blue/40 group-hover:text-accent-blue
                                         group-hover:-translate-y-px group-hover:translate-x-px
                                         transition-all duration-200"
                            />
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
                            <ArrowUpRight
                              size={13}
                              className="text-accent-blue/40 group-hover:text-accent-blue
                                         group-hover:-translate-y-px group-hover:translate-x-px
                                         transition-all duration-200"
                            />
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
