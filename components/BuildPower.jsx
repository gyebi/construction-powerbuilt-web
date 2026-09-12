import Link from "next/link";

export default function BuildPowerSection() {
  return (
    <section className="build-power-section" id="electrical">
      <Link className="build-panel" href="/services">
        <div>
          <span>CONSTRUCTION</span>
          <h2>BUILD.</h2>
        </div>
      </Link>

      <Link className="power-panel" href="/electrical">
        <div>
          <span>ELECTRICAL ENGINEERING</span>
          <h2>POWER.</h2>
        </div>
      </Link>
    </section>
  );
}
