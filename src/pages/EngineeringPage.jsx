import AreaLayout from './shared/AreaLayout.jsx';

const HERO = {
  image: new URL('../assets/hero/hero-engineering.jpg', import.meta.url).href,
  overlay: 'linear-gradient(105deg,rgba(5,10,18,0.90) 0%,rgba(5,10,18,0.72) 50%,rgba(5,10,18,0.40) 100%)',
  accent: '#7BDFF2',
  glow: 'rgba(123,223,242,0.12)',
  stats: [
    { n: '6', label: 'Focus tracks' },
    { n: '15+', label: 'Tools & platforms' },
  ],
};

export default function EngineeringPage() {
  return <AreaLayout id="engineering" hero={HERO} />;
}