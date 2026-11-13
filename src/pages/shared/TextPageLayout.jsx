import Icon from '../../components/Icon.jsx';
import { PAGES } from '../../data.js';

// Shared shell of the simple text pages (FAQ, Terms, Privacy): back link + heading, then the page's own body
export default function TextPageLayout({ id, children }) {
  const p = PAGES[id];
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
        {children}
      </div>
    </main>
  );
}