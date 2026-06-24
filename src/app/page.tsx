import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Achievements } from "@/components/achievements";
import { Gallery } from "@/components/gallery";
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
        <Publications />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
