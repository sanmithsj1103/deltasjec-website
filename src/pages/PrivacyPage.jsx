import TextPageLayout from './shared/TextPageLayout.jsx';
import { PAGES } from '../data.js';

export default function PrivacyPage() {
  return (
    <TextPageLayout id="privacy">
      <div className="legal">
        {PAGES.privacy.items.map(([h, t]) => (<div key={h}><h3>{h}</h3><p>{t}</p></div>))}
      </div>
    </TextPageLayout>
  );
}