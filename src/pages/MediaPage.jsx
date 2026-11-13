import AreaLayout from './shared/AreaLayout.jsx';

const HERO = {
  image: new URL('../assets/hero/hero-media.jpg', import.meta.url).href,
  overlay: 'linear-gradient(105deg,rgba(10,4,18,0.92) 0%,rgba(14,6,24,0.74) 50%,rgba(20,10,30,0.40) 100%)',
  accent: '#F2B5D4',
  glow: 'rgba(242,181,212,0.12)',
  stats: [
    { n: '4', label: 'Creative tracks' },
  ],
};

export default function MediaPage() {
  return <AreaLayout id="media" hero={HERO} />;
}