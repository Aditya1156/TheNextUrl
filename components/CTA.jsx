"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { FadeUp } from "@/components/AnimateOnScroll";

export default function CTA() {
  return (
    <section className="section-container">
      <FadeUp>
        <div className="relative overflow-hidden bg-accent-blue rounded-2xl px-6 sm:px-12 py-12 md:py-16 text-center">
          {/* Subtle light overlay */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              We don&apos;t just build websites — we build your next URL.
              Bold. Scalable. Built to last.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-blue font-medium
                           rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us <HiArrowRight />
              </Link>
              <a
                href="https://wa.me/91885288250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white
                           font-medium rounded-lg transition-all duration-300
                           hover:bg-white/10 hover:-translate-y-0.5"
              >
                <SiWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
