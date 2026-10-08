export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="sh">
      <span className="eb">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
