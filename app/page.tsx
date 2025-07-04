import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import Achievements from '@/components/Achievements';
import News from '@/components/News';
import Media from '@/components/Media';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Biography />
      <Achievements />
      <News />
      <Media />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}