const SDG_LABELS = {
  1: 'No Poverty', 2: 'Zero Hunger', 3: 'Good Health & Well-being',
  4: 'Quality Education', 5: 'Gender Equality', 6: 'Clean Water & Sanitation',
  7: 'Affordable & Clean Energy', 8: 'Decent Work & Economic Growth',
  9: 'Industry, Innovation & Infrastructure', 10: 'Reduced Inequalities',
  11: 'Sustainable Cities & Communities', 12: 'Responsible Consumption & Production',
  13: 'Climate Action', 14: 'Life Below Water',
  15: 'Life on Land', 16: 'Peace, Justice & Strong Institutions',
  17: 'Partnerships for the Goals',
};

const SDG_ACTIVE = new Set([7, 9, 11, 12, 13, 15, 16, 17]);

function SdgBadge({ number, size = 68 }) {
  const isActive = SDG_ACTIVE.has(number);
  return (
    <div
      className={`sdg-badge-wrap${isActive ? ' sdg-active' : ''}`}
      data-label={`SDG ${number} · ${SDG_LABELS[number] || ''}`}
    >
      <img
        className="sdg-badge"
        src={new URL(`../../assets/sdg/sdg-${String(number).padStart(2, '0')}.jpg`, import.meta.url).href}
        alt={`UN SDG ${number}: ${SDG_LABELS[number] || 'Sustainable Development Goal'}`}
        width={size}
        height={size}
        loading="lazy"
        onError={(e) => { e.currentTarget.closest('.sdg-badge-wrap').style.display = 'none'; }}
      />
    </div>
  );
}

export default function SdgStrip({ sdgs }) {
  const row1 = sdgs.slice(0, 6);
  const row2 = sdgs.slice(6, 12);
  return (
    <div className="sdg-strip">
      <div className="sdg-strip-inner">
        <div className="sdg-strip-header">
          <div className="sdg-strip-title-block">
            <span className="sdg-strip-label">Aligned with UN Sustainable Development Goals</span>
            <span className="sdg-strip-subtitle">Delta Sustainability projects are designed and measured against the UN 2030 Agenda.</span>
          </div>
        </div>

        <div className="sdg-grid-row">
          {row1.map((n) => (
            <SdgBadge key={n} number={n} size={100} />
          ))}
        </div>

        <div className="sdg-grid-row">
          {row2.map((n) => (
            <SdgBadge key={n} number={n} size={100} />
          ))}
        </div>

        <div className="sdg-strip-legend">
          <span className="sdg-strip-hint">Hover a badge to see the goal name</span>
        </div>
      </div>
    </div>
  );
}