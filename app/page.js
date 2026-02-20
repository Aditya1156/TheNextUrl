import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import WhoWeServe from "@/components/WhoWeServe";
import CTA from "@/components/CTA";

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
