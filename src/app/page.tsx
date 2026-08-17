import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Statement } from "@/components/statement";
import { About } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Achievements } from "@/components/achievements";
import { Community } from "@/components/community";
import { Gallery } from "@/components/gallery";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Statement />
        <About />
        <ExperienceSection />
        <Projects />
        <Publications />
        <Achievements />
        <Community />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
