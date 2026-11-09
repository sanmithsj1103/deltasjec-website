import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/hooks.js';

// Fixed, site-wide network of drifting nodes. Nodes near the pointer light up and are pushed away.
export default function Background() {
  const fxRef = useRef(null);
  const cvRef = useRef(null);

  useEffect(() => {
    const fx = fxRef.current;
    const cv = cvRef.current;
    const ctx = cv.getContext('2d');
    const reduce = prefersReducedMotion();
    const cs = getComputedStyle(document.documentElement);
    const C = {
      mist: cs.getPropertyValue('--mist').trim() || '#98A9C4',
      steel: cs.getPropertyValue('--steel').trim() || '#536684',
      ice: cs.getPropertyValue('--ice').trim() || '#DCE3EF',
    };
    let w = 0, h = 0, pts = [], mx = -9999, my = -9999, run = false, raf = 0;
    const make = () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.3 + 0.9,
    });

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const L = 135, M = 210, P = 120;
      ctx.lineWidth = 1;
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < P && d > 0) { const f = (1 - d / P) * 1.1; p.x += (dx / d) * f; p.y += (dy / d) * f; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < L) {
            ctx.globalAlpha = (1 - d / L) * 0.32; ctx.strokeStyle = C.steel;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mx, a.y - my), near = dm < M;
        if (near) {
          ctx.globalAlpha = (1 - dm / M) * 0.8; ctx.strokeStyle = C.mist;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke();
        }
        ctx.globalAlpha = near ? 0.9 : 0.5;
        ctx.fillStyle = near ? C.ice : C.mist;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r * (near ? 1.7 : 1), 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function resize() {
      const nw = window.innerWidth, nh = window.innerHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (!nw || !nh) return;
      if (w && h) pts.forEach((p) => { p.x *= nw / w; p.y *= nh / h; });
      w = nw; h = nh;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(120, Math.max(36, (w * h) / 12000)));
      while (pts.length < n) pts.push(make());
      pts.length = n;
      if (reduce) frame();
    }
    function tick() { if (!run) return; frame(); raf = requestAnimationFrame(tick); }
    const set = (v) => { cancelAnimationFrame(raf); run = v && !document.hidden; if (run) tick(); };

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      fx.style.setProperty('--mx', mx + 'px'); fx.style.setProperty('--my', my + 'px');
    };
    const onLeave = () => { mx = my = -9999; fx.style.removeProperty('--mx'); fx.style.removeProperty('--my'); };
    const onUp = (e) => { if (e.pointerType === 'touch') setTimeout(onLeave, 600); };
    const onVis = () => set(true);

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVis);
    if (!reduce) set(true);

    return () => {
      cancelAnimationFrame(raf); run = false;
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="bgfx" ref={fxRef} aria-hidden="true">
      <canvas ref={cvRef} />
      <div className="spot" />
    </div>
  );
}
