import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-20">
      <Hero />
      <About />
      <Projects />
      <Help />
      <Gallery />
      <Join />
    </main>
  );
}
