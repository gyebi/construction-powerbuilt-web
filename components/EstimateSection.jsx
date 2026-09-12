import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function EstimateSection() {
  return (
    <section className="estimate-section" id="estimate">
      <div className="container estimate-layout">
        <div>
          <SectionLabel light>START YOUR PROJECT</SectionLabel>

          <h2>Have a floor plan?</h2>

          <p>
            Upload your drawings and tell us what you need. Our team can review
            your project and prepare the appropriate estimate.
          </p>
        </div>

        <div className="estimate-card">
          <div className="estimate-card-top">
            <span>UPLOAD YOUR PLAN</span>
          </div>

          <div className="upload-box" aria-hidden="true">
            <strong>Plans, BOQs & drawings</strong>
            <small>PDF • JPG • PNG · Up to 5 files</small>
          </div>

          <Link className="btn btn-primary full-button" href="/estimate">
            Start Your Estimate Request
          </Link>
        </div>
      </div>
    </section>
  );
}
