import GhanaAccent from "./GhanaAccent";

export default function SectionLabel({ children, light = false }) {
  return (
    <div className="section-label-group">
      <div className={`section-label${light ? " light-label" : ""}`}>
        {children}
      </div>
      <GhanaAccent />
    </div>
  );
}
