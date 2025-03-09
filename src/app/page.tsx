import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Intro />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
