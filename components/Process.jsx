import SectionLabel from "./SectionLabel";

const steps = [
  ["01", "Tell us about your project"],
  ["02", "Upload your plans"],
  ["03", "We review & estimate"],
  ["04", "Consultation & proposal"],
  ["05", "Construction"],
  ["06", "Project delivery"],
];

export default function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading">
          <SectionLabel>OUR PROCESS</SectionLabel>
          <h2>From plan to completion.</h2>
        </div>

        <div className="process-grid">
          {steps.map(([number, text]) => (
            <div className="process-item" key={number}>
              <strong>{number}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
