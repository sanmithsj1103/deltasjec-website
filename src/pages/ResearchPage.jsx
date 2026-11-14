import AreaLayout from './shared/AreaLayout.jsx';

const HERO = {
  image: new URL('../assets/hero/hero-research.png', import.meta.url).href,
  overlay: 'linear-gradient(105deg,rgba(8,10,24,0.92) 0%,rgba(10,14,32,0.74) 50%,rgba(14,18,40,0.42) 100%)',
  accent: '#C3B5F7',
  glow: 'rgba(160,140,240,0.12)',
  stats: [
    { n: '5', label: 'Focus tracks' },
  ],
};

export default function ResearchPage() {
  return <AreaLayout id="research" hero={HERO} />;
}