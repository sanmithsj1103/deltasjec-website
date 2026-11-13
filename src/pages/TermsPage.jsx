import TextPageLayout from './shared/TextPageLayout.jsx';
import { PAGES } from '../data.js';

export default function TermsPage() {
  return (
    <TextPageLayout id="terms">
      <div className="legal">
        {PAGES.terms.items.map(([h, t]) => (<div key={h}><h3>{h}</h3><p>{t}</p></div>))}
      </div>
    </TextPageLayout>
  );
}