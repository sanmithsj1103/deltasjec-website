import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { TEAM } from '../data.js';
import { photoOf, slug } from '../utils.js';

function Socials({ p }) {
  const email = p.email || `${slug(p.n)}@example.com`;
  return (
    <div className="socials">
      <a href={p.linkedin || 'https://www.linkedin.com/'} target="_blank" rel="noopener" aria-label={`${p.n} on LinkedIn`} title="LinkedIn"><Icon name="linkedin" /></a>
      <a href={p.instagram || 'https://www.instagram.com/'} target="_blank" rel="noopener" aria-label={`${p.n} on Instagram`} title="Instagram"><Icon name="insta" /></a>
      <a href={`mailto:${email}`} aria-label={`Email ${p.n}`} title={email}><Icon name="mail" /></a>
      <a href={p.github || 'https://github.com/'} target="_blank" rel="noopener" aria-label={`${p.n} on GitHub`} title="GitHub"><Icon name="github" /></a>
    </div>
  );
}

const Meta = ({ p }) => (
  <dl className="meta"><dt>Branch</dt><dd>{p.b}</dd></dl>
);

// President / leads card: expands on hover/focus to show extra info
function PersonCard({ p, seed, className = '' }) {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const unfreeze = () => {
      if (cardRef.current?.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    };
    document.addEventListener('visibilitychange', unfreeze);
    window.addEventListener('focus', unfreeze);
    return () => {
      document.removeEventListener('visibilitychange', unfreeze);
      window.removeEventListener('focus', unfreeze);
    };
  }, []);

  return (
    <article ref={cardRef} className={`pcard ${className}`} tabIndex={0} aria-label={`${p.n}, ${p.r}`}>
      <img src={photoOf(p, seed)} alt={`Portrait of ${p.n}`} loading="lazy" />
      <div className="pinfo">
        <h3>{p.n}</h3>
        <p className="role">{p.r}</p>
        <div className="pextra">
          <div>
            <div className="inner">
              <Meta p={p} />
              <p className="quote">{'\u201c'}{p.q}{'\u201d'}</p>
              <Socials p={p} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// Members: tall strip — hovered strip grows; others shrink
function MemberStrip({ p, seed }) {
  const stripRef = useRef(null);

  useEffect(() => {
    const unfreeze = () => {
      if (stripRef.current?.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    };
    document.addEventListener('visibilitychange', unfreeze);
    window.addEventListener('focus', unfreeze);
    return () => {
      document.removeEventListener('visibilitychange', unfreeze);
      window.removeEventListener('focus', unfreeze);
    };
  }, []);

  return (
    <article ref={stripRef} className="strip" tabIndex={0} aria-label={`${p.n}, ${p.r}`}>
      <img src={photoOf(p, seed)} alt={`Portrait of ${p.n}`} loading="lazy" />
      <div className="strip-shade" />
      <div className="strip-tag"><b>{p.n}</b><span>{p.r}</span></div>
      <div className="strip-more">
        <h3>{p.n}</h3>
        <p className="role">{p.r}</p>
        <Meta p={p} />
        <p className="quote">{'\u201c'}{p.q}{'\u201d'}</p>
        <Socials p={p} />
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section className="sec" id="team">
      <div className="wrap">
        <SectionHead eyebrow="Delta team" title="The people building it">
          Hover or tap a card to see who they are, what they study and how to reach them.
        </SectionHead>

        {/* Row 1: Founder & President — 2 cards side by side */}
        <div className="tier">
          <div className="tier-label">Leadership</div>
          <div className="duo">
            {TEAM.row1.map((p, i) => <PersonCard key={p.n} p={p} seed={i + 8} />)}
          </div>
        </div>

        {/* Row 2: Vice Presidents & Department Heads — 4 cards */}
        <div className="tier">
          <div className="tier-label">Department &amp; Team Leads</div>
          <div className="leads">
            {TEAM.leads.map((p, i) => <PersonCard key={p.n} p={p} seed={i + 11} />)}
          </div>
        </div>

        {/* Row 3: Members — accordion strips */}
        <div className="tier">
          <div className="tier-label">Members</div>
          <div className="strips">
            {TEAM.members.map((p, i) => <MemberStrip key={p.n} p={p} seed={i + 20} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
