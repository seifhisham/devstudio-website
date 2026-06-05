import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <HowWeWork />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
