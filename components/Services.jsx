import Link from "next/link";
import SectionLabel from "./SectionLabel";

const services = [
  [
    "01",
    "Construction",
    "Residential and commercial building projects from foundation through completion.",
    "/services",
  ],
  [
    "02",
    "Quantity Estimation",
    "Material takeoffs, cost estimates and bills of quantities for better project planning.",
    "/estimate",
  ],
  [
    "03",
    "Electrical Engineering",
    "Electrical design, installation, testing, upgrades and consulting.",
    "/electrical",
  ],
  [
    "04",
    "Renovations",
    "Building extensions, remodelling and upgrades for residential and commercial spaces.",
    "/services",
  ],
  [
    "05",
    "Project Management",
    "Site supervision, coordination, planning and cost monitoring.",
    "/services",
  ],
  [
    "06",
    "Pre-Construction Consulting",
    "Early-stage advice to help clients understand feasibility, requirements and budgets.",
    "/contact",
  ],
];

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2>One team. Multiple disciplines.</h2>
        </div>

        <div className="services-grid">
          {services.map(([number, title, description, href]) => (
            <Link className="service-card" href={href} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-card-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
