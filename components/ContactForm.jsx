"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-bg-secondary border border-gray-200 rounded-lg px-4 py-3 text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200";

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
            "Sending..."
          ) : (
            <>
              Send Message <HiPaperAirplane className="rotate-90" />
            </>
          )}
        </button>
      </form>

      {status === "success" && (
        <div className="mt-4 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          <HiCheckCircle className="text-xl shrink-0" />
          <span className="text-sm">Message sent successfully! We&apos;ll get back to you within 24 hours.</span>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <HiExclamationCircle className="text-xl shrink-0" />
          <span className="text-sm">Something went wrong. Please try again or email us directly.</span>
        </div>
      )}
    </div>
  );
}
