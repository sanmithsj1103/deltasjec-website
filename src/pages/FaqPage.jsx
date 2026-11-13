import TextPageLayout from './shared/TextPageLayout.jsx';
import { PAGES } from '../data.js';

export default function FaqPage() {
  return (
    <TextPageLayout id="faq">
      <div className="faq">
        {PAGES.faq.items.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </div>
    </TextPageLayout>
  );
}