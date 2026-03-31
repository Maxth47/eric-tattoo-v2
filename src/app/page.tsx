import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutMe from "@/components/AboutMe";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/HomeWrapper";

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <ProjectsGrid />
      <AboutMe />
      <Process />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </HomeWrapper>
  );
}
