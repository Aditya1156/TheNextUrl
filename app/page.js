import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

export const metadata = {
  title: "The Next URL | Modern Websites & ERP Systems for Schools & Businesses",
  description:
    "The Next URL builds modern websites, school ERP systems, college management platforms, and custom digital solutions for institutions and businesses across India. Based in Shivamogga, Karnataka.",
  alternates: {
    canonical: "https://www.thenexturl.in",
  },
  openGraph: {
    title: "The Next URL | Modern Websites & ERP Systems for Schools & Businesses",
    description:
      "We build modern websites, school ERPs, and custom digital platforms for institutions and businesses across India.",
    url: "https://www.thenexturl.in",
    type: "website",
  },
};

const Problems = dynamic(() => import("@/components/Problems"));
const Solutions = dynamic(() => import("@/components/Solutions"));
const Projects = dynamic(() => import("@/components/Projects"));
const Services = dynamic(() => import("@/components/Services"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const WhoWeServe = dynamic(() => import("@/components/WhoWeServe"));
const StatsShowcase = dynamic(() => import("@/components/StatsShowcase"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const PriceCalculator = dynamic(() => import("@/components/PriceCalculator"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <StatsShowcase />
      <Problems />
      <Solutions />
      <Projects />
      <Portfolio />
      <Services />
      <Pricing />
      <PriceCalculator />
      <WhyUs />
      <TechStack />
      <WhoWeServe />
      <Testimonials />
      <CTA />
    </>
  );
}
