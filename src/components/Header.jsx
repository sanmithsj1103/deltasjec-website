import { useState } from 'react';
import Icon from './Icon.jsx';
import { NAV } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Delta, back to top">
          <span className="mark" aria-hidden="true" />
          DELTA
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Primary" onClick={(e) => e.target.closest('a') && setOpen(false)}>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
            <li><a className="cta" href="#join">Join us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
