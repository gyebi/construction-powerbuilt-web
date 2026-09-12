import Link from "next/link";
import GhanaAccent from "./GhanaAccent";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-eyebrow">
          Construction • Estimation • Electrical Engineering
        </div>

        <h1>
          WE BUILD.
          <br />
          WE <span>POWER.</span>
          <br />
          WE DELIVER.
        </h1>

        <p>
          Construction, quantity estimation and electrical engineering solutions
          for residential and commercial projects across Ghana.
        </p>

        <div className="hero-actions">
          <Link href="/estimate" className="btn btn-primary">
            Request an Estimate
          </Link>

          <Link href="/estimate" className="btn btn-outline">
            Upload Your Floor Plan
          </Link>
        </div>

        <GhanaAccent />
      </div>
    </section>
  );
}
