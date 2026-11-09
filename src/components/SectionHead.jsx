export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="title">{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}
