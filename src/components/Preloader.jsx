import { useEffect, useRef, useState } from 'react';

const WORDS = ['ENGINEER', 'INNOVATE', 'EVOLVE', 'DELTA'];
const STEP = 780;

// Words flash in turn, then the logo appears, then the whole layer swipes up to reveal the hero.
export default function Preloader({ onReveal, onDone }) {
  const [k, setK] = useState(0);
  const [phase, setPhase] = useState('show'); // show -> out
  const [showWord, setShowWord] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef([]);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    timers.current.push(setTimeout(onReveal, 380), setTimeout(onDone, 1300));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('lock');
    const at = (fn, ms) => timers.current.push(setTimeout(fn, ms));
    WORDS.forEach((_, i) => {
      at(() => { setK(i); setPhase('show'); setProgress(((i + 1) / (WORDS.length + 1)) * 100); }, i * STEP);
      at(() => setPhase('out'), i * STEP + STEP - 150);
    });
    const t = WORDS.length * STEP;
    at(() => { setShowWord(false); setShowLogo(true); setProgress(100); }, t);
    at(finish, t + 1500);
    // Safety net: never trap the visitor behind the intro
    at(() => { root.classList.remove('lock'); onReveal(); }, 10000);
    return () => {
      timers.current.forEach(clearTimeout);
      root.classList.remove('lock');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (leaving) document.documentElement.classList.remove('lock');
  }, [leaving]);

  const skip = () => {
    timers.current.forEach(clearTimeout);
    finish();
  };

  return (
    <div className={`preloader${leaving ? ' leave' : ''}`} role="status" aria-label="Loading Delta">
      <div className="pl-stage">
        {showWord && (
          <div key={k} className={`pl-word${phase === 'out' ? ' out' : ''}`} aria-hidden="true">
            {WORDS[k]}
          </div>
        )}
        <div className={`pl-logo logo-full${showLogo ? ' show' : ''}`} role="img" aria-label="Delta logo" />
      </div>
      <div className="pl-bar"><i style={{ width: `${progress}%` }} /></div>
      <button className="pl-skip" type="button" onClick={skip}>Skip intro</button>
    </div>
  );
}
