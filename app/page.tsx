import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Architecture } from "@/components/architecture";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Homelab } from "@/components/homelab";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <Experience />
        <Skills />
        <Homelab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
