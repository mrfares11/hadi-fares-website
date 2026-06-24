import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
