import SectionLabel from "./SectionLabel";

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container two-column">
        <div className="image-placeholder">
          <span>PROJECT IMAGE</span>
        </div>

        <div className="section-copy">
          <SectionLabel>ABOUT POWERBUILT</SectionLabel>

          <h2>
            Built with precision.
            <br />
            Powered by experience.
          </h2>

          <p>
            J. A. POWERBUILT CONSTRUCTION provides coordinated construction,
            estimating and electrical engineering solutions designed to take
            projects from planning through delivery.
          </p>

          <div className="mini-services">
            <span>Residential</span>
            <span>Commercial</span>
            <span>Electrical</span>
            <span>Renovations</span>
          </div>

          <a href="#services" className="text-link">
            Explore Our Services →
          </a>
        </div>
      </div>
    </section>
  );
}
