import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { CLUB_EMAIL, CLUB_SOCIAL } from '../data.js';

const HANDLES = [
  { icon: 'linkedin', name: 'LinkedIn', text: 'Delta Club', href: CLUB_SOCIAL.linkedin || 'https://www.linkedin.com/company/deltasjec/', external: true },
  { icon: 'insta', name: 'Instagram', text: '@deltasjec', href: CLUB_SOCIAL.instagram || 'https://www.instagram.com/delta.sjec/', external: true },
  { icon: 'mail', name: 'Email', text: CLUB_EMAIL, href: `mailto:${CLUB_EMAIL}` },
];

export default function Social() {
  return (
    <section className="sec" id="social">
      <div className="wrap">
        <SectionHead eyebrow="Social handles" title="Find us online">
          Project updates, event posters and recruitment announcements go out on these channels first.
        </SectionHead>
        <div className="socials-grid">
          {HANDLES.map((h) => (
            <a key={h.name} className="stile" href={h.href} {...(h.external ? { target: '_blank', rel: 'noopener' } : {})}>
              <span className="disc"><Icon name={h.icon} /></span>
              <div><b>{h.name}</b><span>{h.text}</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
