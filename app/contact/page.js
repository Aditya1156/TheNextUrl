import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Contact Us | The Next URL",
  description:
    "Get in touch with The Next URL. We build modern websites, school ERP systems, and digital platforms for institutions and businesses across India. Based in Shivamogga, Karnataka.",
  alternates: {
    canonical: "https://www.thenexturl.in/contact",
  },
  openGraph: {
    title: "Contact The Next URL",
    description: "Reach out to start your digital transformation project.",
    url: "https://www.thenexturl.in/contact",
  },
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
