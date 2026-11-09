import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { useInView, prefersReducedMotion } from '../hooks/hooks.js';
import { DEPTS } from '../data.js';

// Three cards rise stacked, split apart, then flip to show what each department does.
// Each department's name and icon sit behind its card.
export default function Departments() {
  const [ref, seen] = useInView({ threshold: 0.3, once: true });
  const [stage, setStage] = useState(() => (prefersReducedMotion() ? 3 : 0)); // 1 rise, 2 split, 3 flip

  useEffect(() => {
    if (!seen || stage > 0) return;
    setStage(1);
    const t1 = setTimeout(() => setStage(2), 950);
    const t2 = setTimeout(() => setStage(3), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [seen]); // eslint-disable-line react-hooks/exhaustive-deps

  const cls = ['stack', stage >= 1 && 'rise', stage >= 2 && 'split', stage >= 3 && 'flip'].filter(Boolean).join(' ');

  return (
    <section className="sec" id="departments">
      <div className="wrap">
        <SectionHead eyebrow="Departments" title="Where each project lives">
          Every member belongs to one department. Projects pull people from all three.
        </SectionHead>
        <div className={cls} ref={ref}>
          {DEPTS.map((d) => (
            <div className="slot" key={d.n}>
              <div className="zoom">
                <div className="ghost" aria-hidden="true"><Icon name={d.icon} /><b>{d.n}</b></div>
                <div className="mover">
                  <div className="card">
                    <div className="face front"><div className="mk" aria-hidden="true" /><span>{d.n}</span></div>
                    <div className="face back">
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
    </section>
  );
}
