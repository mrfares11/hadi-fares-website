import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Achievements } from "@/components/achievements";
import { Contact, Footer } from "@/components/contact";
import { ScrollProgress } from "@/components/motion-primitives";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <ExperienceSection />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
