import { useLayoutEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { DEPTS } from '../data.js';

const clamp = (v) => Math.min(1, Math.max(0, v));
const ease = (t) => t * t * (3 - 2 * t);
const seg = (p, a, b) => ease(clamp((p - a) / (b - a)));

export default function Departments() {
  const secRef = useRef(null);
  const stackRef = useRef(null);

  useLayoutEffect(() => {
    const sec = secRef.current;
    const stack = stackRef.current;
    const pinned = window.matchMedia('(min-width: 861px) and (prefers-reduced-motion: no-preference)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const apply = (p) => {
      stack.style.setProperty('--rise', seg(p, 0, 0.25).toFixed(4));
      stack.style.setProperty('--split', seg(p, 0.25, 0.5).toFixed(4));
      DEPTS.forEach((_, i) => stack.style.setProperty(`--f${i}`, seg(p, 0.5 + i * 0.1, 0.75 + i * 0.1).toFixed(4)));
    };
    const fade = (on) => {
      const vh = window.innerHeight;
      stack.querySelectorAll('.slot').forEach((el) => {
        if (!on) return el.style.removeProperty('--fade');
        const r = el.getBoundingClientRect();
        const o = Math.min(clamp((vh - r.top) / (vh * 0.35)), clamp(r.bottom / (vh * 0.3)));
        el.style.setProperty('--fade', o.toFixed(3));
      });
    };
    const update = () => {
      raf = 0;
      if (reduce.matches) { apply(1); fade(false); return; }
      if (pinned.matches) {
        const r = sec.getBoundingClientRect();
        apply(clamp(-r.top / Math.max(1, r.height - window.innerHeight)));
        fade(false);
      } else {
        apply(1);
        fade(true);
      }
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    pinned.addEventListener('change', queue);
    reduce.addEventListener('change', queue);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
      pinned.removeEventListener('change', queue);
      reduce.removeEventListener('change', queue);
    };
  }, []);

  return (
    <section className="sec dept" id="departments" ref={secRef}>
      <div className="dept-sticky">
        <div className="wrap">
          <SectionHead eyebrow="Departments" title="Where each project lives">
            Every member belongs to one department. Projects pull people from all three.
          </SectionHead>
          <div className="stack" ref={stackRef}>
            {DEPTS.map((d, i) => (
              <div className="slot" key={d.n} style={{ '--i': i, '--flip': `var(--f${i})` }}>
                <div className="zoom">
                  <div className="mover">
                    <div className="card">
                      <div className="face front">
                        <Icon name={d.icon} />
                        <b>{d.n}</b>
                      </div>
                      <div className="face back">
                        <div className="back-top"><Icon name={d.icon} /><b>{d.n}</b></div>
                        <p>{d.d}</p>
                        <ul>{d.f.map((f) => <li key={f}>{f}</li>)}</ul>
                        <div className="lead-by">Led by <b>{d.lead}</b></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
