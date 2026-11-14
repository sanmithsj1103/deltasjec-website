import { CLUB_EMAIL, CLUB_SOCIAL } from '../data.js';

export default function Footer() {
  return (
    <footer className="ftr" id="footer">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="brand-block">
            <div className="logo-full" role="img" aria-label="Delta logo" />
            <div className="m">Engineer | Innovate | Evolve</div>
            <p>A student engineering club building across mechanical, electronic and software disciplines.</p>
          </div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#departments">Department</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#join">Join Community</a></li>
              <li><a href="#social">Social media</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#social">Contact</a></li>
              <li><a href="#faq">Help &amp; FAQ</a></li>
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={CLUB_SOCIAL.linkedin || 'https://www.linkedin.com/company/deltasjec/'} target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href={`mailto:${CLUB_EMAIL}`}>{CLUB_EMAIL}</a></li>
              <li><a href={CLUB_SOCIAL.instagram || 'https://www.instagram.com/delta.sjec/'} target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>&copy; 2026 Delta. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
