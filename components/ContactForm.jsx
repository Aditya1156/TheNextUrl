"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane, HiExclamationCircle } from "react-icons/hi";

function SuccessScreen({ onReset }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: -20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center text-center py-10 px-4 gap-6"
    >
      {/* Animated checkmark circle */}
      <div className="relative w-24 h-24">
        {/* Green filled bg */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 rounded-full bg-green-50 border-2 border-green-200"
        />
        {/* SVG tick */}
        <svg
          viewBox="0 0 96 96"
          fill="none"
          className="absolute inset-0 w-full h-full"
        >
          {/* Outer circle draw */}
          <motion.circle
            cx="48"
            cy="48"
            r="44"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          />
          {/* Checkmark path */}
          <motion.path
            d="M28 49 L42 63 L68 35"
            stroke="#16a34a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.55 }}
          />
        </svg>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        className="space-y-2"
      >
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text">
          Message Sent!
        </h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
          Thank you for reaching out. We&apos;ll review your message and get
          back to you within{" "}
          <span className="text-text font-medium">24 hours</span>.
        </p>
      </motion.div>

      {/* Info chips */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.35 }}
        className="flex flex-wrap justify-center gap-2"
      >
        <span className="text-xs px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 font-medium">
          ✓ Confirmation email sent to you
        </span>
        <span className="text-xs px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium">
          ✓ Our team has been notified
        </span>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.35 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-xs"
      >
        <a
          href="https://wa.me/918852882508"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors duration-200"
        >
          WhatsApp us
        </a>
        <button
          onClick={onReset}
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 text-text-muted hover:text-text text-sm font-medium transition-colors duration-200"
        >
          Send another
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(
        serviceId,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        publicKey
      );

      emailjs
        .sendForm(serviceId, "template_hilrgyg", formRef.current, publicKey)
        .catch(() => {});

      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-bg-secondary border border-gray-200 rounded-lg px-4 py-3 text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200";

  return (
    <div className="min-h-[420px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <SuccessScreen key="success" onReset={() => setStatus("idle")} />
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm text-text-muted mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-text-muted mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-text-muted mb-1.5">
                Institution / Organization
              </label>
              <input
                type="text"
                name="institution"
                placeholder="Your school, college, or business name"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-sm text-text-muted mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project or requirements..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  Send Message <HiPaperAirplane className="rotate-90" />
                </>
              )}
            </button>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                <HiExclamationCircle className="text-xl shrink-0" />
                <span className="text-sm">
                  Something went wrong. Please try again or email us directly.
                </span>
              </div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
