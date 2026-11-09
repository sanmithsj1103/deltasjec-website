import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

// Current location.hash without the '#'
export function useHash() {
  const read = () => decodeURIComponent(window.location.hash.slice(1));
  const [hash, setHash] = useState(read);
  useEffect(() => {
    const on = () => setHash(read());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return hash;
}

// Returns [ref, visible]. With `once` it stays true after the first time it enters the viewport.
export function useInView({ threshold = 0.2, rootMargin = '0px', once = false } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => prefersReducedMotion() || typeof IntersectionObserver === 'undefined');
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) setVisible(false);
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);
  return [ref, visible];
}
