import { useEffect, useRef, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import { PARTNERS } from '../data.js';

const CARD_W = 320; // card width (300) + gap (20)

// Infinite strip sliding right to left. Two identical halves keep the loop seamless.
export default function Partners() {
  const boxRef = useRef(null);
  const [reps, setReps] = useState(2);

  useEffect(() => {
    const calc = () => {
      const w = boxRef.current?.clientWidth || 1200;
      setReps(Math.max(2, Math.ceil(w / (PARTNERS.length * CARD_W)) + 1));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const half = Array.from({ length: reps }).flatMap((_, r) =>
    PARTNERS.map((p) => (
      <article className="pc" key={`${r}-${p.n}`}>
        <span className="tag">{p.t}</span>
        <h3>{p.n}</h3>
        <span className="sub">{p.s}</span>
        <p>{p.d}</p>
      </article>
    ))
  );

  return (
    <section className="sec alt" id="partners">
      <div className="wrap">
        <SectionHead eyebrow="Our partners" title="Tools we build with">
          Industry software and platforms our members learn on and use in every project.
        </SectionHead>
      </div>
      <div className="marquee" ref={boxRef} aria-label="Partner list">
        <div className="track" style={{ '--dur': `${Math.round((reps * PARTNERS.length * CARD_W) / 55)}s` }}>
          <div className="half">{half}</div>
          <div className="half" aria-hidden="true">{half}</div>
        </div>
      </div>
    </section>
  );
}
