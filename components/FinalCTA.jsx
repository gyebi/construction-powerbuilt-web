import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <SectionLabel light>LET&apos;S BUILD</SectionLabel>

        <h2>Have a project in mind?</h2>

        <p>Let&apos;s price it properly before you build.</p>

        <div className="hero-actions">
          <Link href="/estimate" className="btn btn-primary">
            Upload Your Floor Plan
          </Link>

          <Link href="/contact" className="btn btn-outline">
            Contact Powerbuilt
          </Link>
        </div>
      </div>
    </section>
  );
}
