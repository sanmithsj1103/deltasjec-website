import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import AccordionRow from './AccordionRow.jsx';
import { ABOUT_IDS, PAGES } from '../../data.js';

function AreaHero({ page, hero }) {
  return (
    <div
      className="area-hero"
      style={{ '--hero-accent': hero.accent, '--hero-glow': hero.glow }}
      role="banner"
    >
      {hero.image && (
        <img src={hero.image} alt="" aria-hidden="true" className="area-hero-bg" />
      )}

      <div className="area-hero-overlay" style={{ background: hero.overlay }} aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />

      <div className="area-hero-inner wrap">
        <span className="area-eyebrow">{page.title}</span>
        <h1 className="area-headline">{page.headline || page.title}</h1>
        <p className="area-lead">{page.intro}</p>

        <div className="hero-stats" aria-label="Key numbers">
          {hero.stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-n">{s.n}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelatedAreas({ currentId }) {
  const others = ABOUT_IDS.filter((id) => id !== currentId);
  return (
    <div className="related-areas">
      <span className="related-label">Other areas</span>
      <div className="related-links">
        {others.map((id) => (
          <a key={id} href={`#${id}`} className="related-link">
            <Icon name={PAGES[id].icon} className="ic" />
            {PAGES[id].title}
          </a>
        ))}
      </div>
    </div>
  );
}

// Shared layout of the Engineering / Sustainability / Media pages.
// Props: id (key in PAGES), hero ({ image, overlay, accent, glow, stats }),
// children (optional extra block shown above the accordion, e.g. the SDG strip)
export default function AreaLayout({ id, hero, children }) {
  const page = PAGES[id];
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <main className="area-page">
      <AreaHero page={page} hero={hero} />

      <div className="area-sheet">
        <div className="wrap">
          {children}

          <div
            id={`acc-list-${id}`}
            className="acc-list"
            role="list"
            aria-label={`${page.title} focus areas`}
          >
            {page.focusAreas.map((area, i) => (
              <AccordionRow
                key={area.id}
                area={area}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>

          <RelatedAreas currentId={id} />

          <div className="join-banner">
            <div>
              <p className="join-banner-eyebrow">Ready to contribute?</p>
              <h2 className="join-banner-headline">Join the {page.title} team.</h2>
            </div>
            <a href="#join" className="btn-join-banner">Apply now →</a>
          </div>
        </div>
      </div>
    </main>
  );
}