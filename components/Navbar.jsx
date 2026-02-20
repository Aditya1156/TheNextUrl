"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Technology", href: "/#tech-stack" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    const hash = href.includes("#") ? "#" + href.split("#")[1] : null;
    const targetPath = href.split("#")[0] || "/";

    if (pathname === targetPath || (pathname === "/" && targetPath === "/")) {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (hash) {
        router.push(targetPath + hash);
      } else {
        router.push(targetPath);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 lg:h-24">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/#hero")}
          className="relative group flex items-center"
        >
          <Image
            src="/brandlogo.png"
            alt="The Next URL"
            width={360}
            height={120}
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href === "/contact" ? (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-text-muted hover:text-text transition-colors duration-200 text-sm font-medium
                           after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-text-muted hover:text-text transition-colors duration-200 text-sm font-medium
                           after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            )
          )}
          <Link href="/contact" className="btn-primary text-sm">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-text p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.href === "/contact" ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-muted hover:text-accent-blue hover:bg-accent-blue/5 transition-all py-3 px-3 rounded-lg text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-muted hover:text-accent-blue hover:bg-accent-blue/5 transition-all py-3 px-3 rounded-lg text-lg font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-center justify-center mt-3"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
