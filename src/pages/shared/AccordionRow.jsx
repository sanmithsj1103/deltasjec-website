import { useRef, useEffect } from 'react';
import { useInView } from '../../hooks/hooks.js';

export default function AccordionRow({ area, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [ref, visible] = useInView({ threshold: 0.08, once: true });

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px';
    } else {
      el.style.maxHeight = el.scrollHeight + 'px';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.maxHeight = '0px';
        });
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const el = bodyRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      el.style.maxHeight = el.scrollHeight + 'px';
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <article
      ref={ref}
      className={`acc-row${isOpen ? ' acc-open' : ''}${visible ? ' acc-visible' : ''}`}
      style={{ '--delay': `${index * 60}ms` }}
    >
      <button
        className="acc-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`acc-body-${area.id}`}
        onClick={onToggle}
      >
        <span className="acc-icon" aria-hidden="true">{area.icon}</span>
        <span className="acc-title-wrap">
          <span className="acc-title">{area.title}</span>
          <span className="acc-blurb">{area.blurb}</span>
        </span>
        <span className="acc-toggle" aria-hidden="true">{isOpen ? '×' : '+'}</span>
      </button>

      <div
        id={`acc-body-${area.id}`}
        className="acc-body"
        ref={bodyRef}
        style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.42s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <div className="acc-inner">

          <section className="acc-section">
            <h4 className="acc-section-label">What you will do</h4>
            <ul className="acc-activities">
              {area.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </section>

          <section className="acc-section acc-outcomes">
            <h4 className="acc-section-label">What you will have afterwards</h4>
            <p className="outcomes-text">{area.outcomes}</p>
          </section>

        </div>
      </div>
    </article>
  );
}