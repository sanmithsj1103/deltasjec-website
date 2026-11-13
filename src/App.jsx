import { useEffect, useRef, useState } from 'react';
import Background from './components/Background.jsx';
import Preloader from './components/Preloader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Departments from './components/Departments.jsx';
import Voices from './components/Voices.jsx';
import Team from './components/Team.jsx';
import Join from './components/Join.jsx';
import Social from './components/Social.jsx';
import Footer from './components/Footer.jsx';
import { useHash, prefersReducedMotion } from './hooks/hooks.js';
import { ROUTES } from './pages/index.js';

export default function App() {
  const hash = useHash();
  const [loading, setLoading] = useState(() => !prefersReducedMotion());
  const Page = ROUTES[hash];
  const isSub = Boolean(Page);
  const wasSub = useRef(false);

  // The hero text animates in once the intro has swiped away
  const reveal = () => document.documentElement.classList.add('ready');
  useEffect(() => { if (!loading) reveal(); }, [loading]);

  // Sub pages open at the top; returning home jumps to the section in the hash
  useEffect(() => {
    if (isSub) {
      window.scrollTo(0, 0);
    } else if (wasSub.current) {
      const el = hash && document.getElementById(hash);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    }
    wasSub.current = isSub;
  }, [hash, isSub]);

  return (
    <>
      <Background />
      {loading && <Preloader onReveal={reveal} onDone={() => setLoading(false)} />}
      <Header />
      {isSub ? (
        <Page />
      ) : (
        <main id="home">
          <Hero />
          <About />
          <Technologies />
          <Departments />
          <Voices />
          <Team />
          <Join />
          <Social />
        </main>
      )}
      <Footer />
    </>
  );
}
