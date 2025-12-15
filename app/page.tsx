import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-pbs-background selection:bg-pbs-accent selection:text-white">
      <Hero />
      <About />
      <Research />
      <Contact />
    </main>
  );
}
