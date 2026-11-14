import AreaLayout from './shared/AreaLayout.jsx';
import SdgStrip from './shared/SdgStrip.jsx';
import { PAGES } from '../data.js';

const HERO = {
  image: new URL('../assets/hero/hero-sustainability.jpeg', import.meta.url).href,
  overlay: 'linear-gradient(105deg,rgba(4,18,10,0.92) 0%,rgba(6,24,14,0.74) 50%,rgba(10,30,18,0.42) 100%)',
  accent: '#B2F7EF',
  glow: 'rgba(100,220,160,0.12)',
  stats: [
    { n: '4', label: 'Focus tracks' },
    { n: '12', label: 'UN SDGs addressed' },
  ],
};

export default function SustainabilityPage() {
  return (
    <AreaLayout id="sustainability" hero={HERO}>
      <SdgStrip sdgs={PAGES.sustainability.sdgs} />
    </AreaLayout>
  );
}