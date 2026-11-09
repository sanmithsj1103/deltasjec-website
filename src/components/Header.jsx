import { useState } from 'react';
import Icon from './Icon.jsx';
import { NAV } from '../data.js';
import { useTheme } from '../hooks/hooks.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="hdr">
      <div className="pill">
        <a className="brand" href="#top" aria-label="Delta, back to top">
          <span className="mark" aria-hidden="true" />
          DELTA
        </a>

        <nav
          className={`nav${open ? ' open' : ''}`}
          id="nav"
          aria-label="Primary"
          onClick={(e) => e.target.closest('a') && setOpen(false)}
        >
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
            <li className="nav-join"><a href="#join">Join us</a></li>
          </ul>
        </nav>

        <div className="hdr-actions">
          <button
            className="icon-btn theme-btn"
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${next} mode`}
            title={`Switch to ${next} mode`}
          >
            <Icon key={theme} name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className="join-btn" href="#join">Join us</a>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
