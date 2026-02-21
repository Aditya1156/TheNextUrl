import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

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
