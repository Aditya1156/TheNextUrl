import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Problems = dynamic(() => import("@/components/Problems"));
const Solutions = dynamic(() => import("@/components/Solutions"));
const Projects = dynamic(() => import("@/components/Projects"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const WhoWeServe = dynamic(() => import("@/components/WhoWeServe"));
const CTA = dynamic(() => import("@/components/CTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Solutions />
      <Projects />
      <WhyUs />
      <TechStack />
      <WhoWeServe />
      <CTA />
    </>
  );
}
