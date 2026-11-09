import Icon from './Icon.jsx';
import { ABOUT_IDS, PAGES } from '../data.js';

// Engineering, Sustainability, Media, FAQ, Terms and Privacy all share this layout
export default function SubPage({ id }) {
  const p = PAGES[id];
  let body;
  if (p.kind === 'faq') {
    body = (
      <div className="faq">
        {p.items.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </div>
    );
  } else if (p.kind === 'legal') {
    body = (
      <div className="legal">
        {p.items.map(([h, t]) => (<div key={h}><h3>{h}</h3><p>{t}</p></div>))}
      </div>
    );
  } else {
    body = (
      <>
        <div className="sub-grid">
          {p.items.map(([h, t]) => (
            <article className="sub-item" key={h}>
              <span className="tri" aria-hidden="true" />
              <h3>{h}</h3>
              <p>{t}</p>
            </article>
          ))}
        </div>
        <div className="others">
          <span>Other areas</span>
          {ABOUT_IDS.filter((a) => a !== id).map((a) => (
            <a key={a} className="btn ghost" href={`#${a}`}>{PAGES[a].title}</a>
          ))}
        </div>
      </>
    );
  }

  return (
    <main>
      <div className="wrap sub">
        <a className="back-link" href="#about"><Icon name="arrow" /> Back to Delta</a>
        <div className="sub-head">
          {p.icon && <Icon name={p.icon} className="ic big-ic" />}
          <span className="eyebrow">{p.eyebrow || 'Delta area'}</span>
          <h1 className="title">{p.title}</h1>
          <p className="lead">{p.intro}</p>
        </div>
        {body}
      </div>
    </main>
  );
}
