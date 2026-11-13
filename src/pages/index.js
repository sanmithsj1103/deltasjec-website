import EngineeringPage from './EngineeringPage.jsx';
import SustainabilityPage from './SustainabilityPage.jsx';
import MediaPage from './MediaPage.jsx';
import FaqPage from './FaqPage.jsx';
import TermsPage from './TermsPage.jsx';
import PrivacyPage from './PrivacyPage.jsx';

// URL hash -> page component. To add a page: create it in src/pages and add one line here.
export const ROUTES = {
  engineering: EngineeringPage,
  sustainability: SustainabilityPage,
  media: MediaPage,
  faq: FaqPage,
  terms: TermsPage,
  privacy: PrivacyPage,
};