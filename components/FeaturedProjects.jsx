import Link from "next/link";
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

          <Link href="/projects" className="text-link">
            View All Projects →
          </Link>
        </div>

        <div className="project-grid">
          <Link className="project-card large-project" href="/projects">
            <span>RESIDENTIAL CONSTRUCTION</span>
          </Link>

          <Link className="project-card project-card-estimation" href="/estimate">
            <span>ESTIMATION &amp; BOQ</span>
          </Link>

          <Link className="project-card project-card-electrical" href="/electrical">
            <span>BUILDING ELECTRICAL WORKS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
