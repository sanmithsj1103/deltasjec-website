import { useEffect, useRef, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import { TECHNOLOGIES } from '../data.js';
import { LOGOS } from '../techLogos.js';

const ITEM_W = 130; // rough width of one logo plus its gap, used to decide how many copies fill the row
const SPEED = 45;   // pixels per second

// Row 1 uses the first half of the list and slides left; row 2 uses the rest and slides right.
const mid = Math.ceil(TECHNOLOGIES.length / 2);
const ROW_A = TECHNOLOGIES.slice(0, mid);
const ROW_B = TECHNOLOGIES.slice(mid);

function Logo({ t }) {
  const src = LOGOS[t.file];
  return (
    <div className="tl">
      {src ? (
        <>
          <img className="tl-img" src={src} alt={t.n} draggable="false" />
          <span className="tl-name">{t.n}</span>
        </>
      ) : (
        <span className="tl-text">{t.n}</span>
      )}
    </div>
  );
}

// Two identical halves side by side; sliding by exactly one half makes the loop seamless.
function LogoRow({ items, reverse }) {
  const boxRef = useRef(null);
  const [reps, setReps] = useState(2);

  useEffect(() => {
    const calc = () => {
      const w = boxRef.current?.clientWidth || 1200;
      setReps(Math.max(1, Math.ceil(w / (items.length * ITEM_W))));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [items.length]);

  const half = Array.from({ length: reps }).flatMap((_, r) =>
    items.map((t) => <Logo key={`${r}-${t.file}`} t={t} />)
  );
  const dur = Math.round((reps * items.length * (ITEM_W + 40)) / SPEED);

  return (
    <div className="tl-row" ref={boxRef}>
      <div className={`tl-track${reverse ? ' rev' : ''}`} style={{ '--dur': `${dur}s` }}>
        <div className="tl-half">{half}</div>
        <div className="tl-half" aria-hidden="true">{half}</div>
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="sec alt" id="technologies">
      <div className="wrap">
        <SectionHead eyebrow="Technologies" title="Technologies we use">
          The software and platforms our members use every day to design, simulate, write, build and publish.
        </SectionHead>
      </div>
      <div className="logo-rows" aria-label="Technologies we use">
        <LogoRow items={ROW_A} />
        <LogoRow items={ROW_B} reverse />
      </div>
    </section>
  );
}