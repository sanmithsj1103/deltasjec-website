import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import { prefersReducedMotion } from '../hooks/hooks.js';

export default function Hero() {
  const logoRef = useRef(null);

  // Logo drifts and tilts slightly toward the pointer, then settles when it leaves
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = logoRef.current;
    const reset = () => ['--tx', '--ty', '--rx', '--ry'].forEach((k) => el.style.removeProperty(k));
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty('--tx', (nx * 18).toFixed(1) + 'px');
      el.style.setProperty('--ty', (ny * 12).toFixed(1) + 'px');
      el.style.setProperty('--ry', (nx * 9).toFixed(2) + 'deg');
      el.style.setProperty('--rx', (-ny * 8).toFixed(2) + 'deg');
    };
    const onUp = (e) => { if (e.pointerType === 'touch') setTimeout(reset, 600); };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    document.documentElement.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="ring" aria-hidden="true">
        <svg viewBox="0 0 100 100"><polygon points="50,6 88.1,72 11.9,72" fill="none" stroke="#98A9C4" strokeWidth=".25" strokeDasharray="1.2 1.8" /></svg>
        <svg viewBox="0 0 100 100"><polygon points="50,6 88.1,72 11.9,72" fill="none" stroke="#536684" strokeWidth=".3" /></svg>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-logo" ref={logoRef}>
          <div className="logo-par">
            <div className="logo-float logo-full" role="img" aria-label="Delta logo: a triangle holding a microchip and a gear" />
          </div>
        </div>
        <p className="motto"><span>Engineer</span><i /><span>Innovate</span><i /><span>Evolve</span></p>
        <p className="hero-sub">A student engineering club where mechanical, electronic and software minds build things together, from first sketch to working prototype.</p>
        <div className="hero-cta">
          <a className="btn" href="#join">Join the community <Icon name="arrow" /></a>
        </div>
      </div>
    </section>
  );
}
