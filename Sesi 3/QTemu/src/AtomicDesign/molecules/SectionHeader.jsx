import SectionLink from "../atoms/SectionLink.jsx";

export default function SectionHeader({ title, linkText }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <SectionLink>{linkText}</SectionLink>
    </div>
  );
}
