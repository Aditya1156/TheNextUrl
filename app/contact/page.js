import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Contact Us | The Next URL",
  description:
    "Get in touch with The Next URL for your digital transformation needs. We build modern websites, ERP systems, and managed infrastructure.",
};

export default function ContactPage() {
  return (
    <section className="section-container min-h-screen flex items-center justify-center pt-24">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-blue transition-colors mb-8"
        >
          <HiArrowLeft /> Back to Home
        </Link>
        <h1 className="section-heading mb-2">Get in Touch</h1>
        <p className="section-subheading mb-10">
          Tell us about your institution and we&apos;ll get back to you within 24
          hours.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
