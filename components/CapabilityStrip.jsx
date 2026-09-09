const capabilities = [
  ["01", "Construction"],
  ["02", "Quantity Estimation"],
  ["03", "Electrical Engineering"],
  ["04", "Project Management"],
];

export default function CapabilityStrip() {
  return (
    <section className="capability-strip">
      <div className="container capability-grid">
        {capabilities.map(([number, name]) => (
          <div key={number}>
            <strong>{number}</strong>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
