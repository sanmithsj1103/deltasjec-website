import SectionHead from './SectionHead.jsx';
import { VOICES } from '../data.js';
import { photoOf } from '../utils.js';

export default function Voices() {
  return (
    <section className="sec alt" id="voices">
      <div className="wrap">
        <SectionHead eyebrow="Voice behind Delta" title="Guided by the faculty">
          The people who back the club, in their own words.
        </SectionHead>
        <div className="voices">
          {VOICES.map((v, i) => (
            <article className="voice" key={v.n}>
              <img src={photoOf(v, i + 3)} alt={`Portrait of ${v.n}`} loading="lazy" />
              <div>
                <div className="who">
                  <h3>{v.n}</h3>
                  <span className="desig">{v.desig}</span>
                  <span className="inst">{v.inst}</span>
                </div>
                <blockquote>{v.m}</blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
