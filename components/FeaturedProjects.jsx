import SectionLabel from "./SectionLabel";

export default function ProjectsSection() {
  return (
    <section className="section project-section" id="projects">
      <div className="container">
        <div className="section-heading horizontal-heading">
          <div>
            <SectionLabel>OUR WORK</SectionLabel>
            <h2>Selected Projects</h2>
          </div>

          <a href="#projects" className="text-link">
            View All Projects →
          </a>
        </div>

        <div className="project-grid">
          <div className="project-card large-project">
            <span>FEATURED PROJECT</span>
          </div>

          <div className="project-card">
            <span>PROJECT</span>
          </div>

          <div className="project-card">
            <span>PROJECT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
