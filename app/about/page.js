import Link from "next/link";
import styles from "../public-page.module.css";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>ABOUT POWERBUILT</p>
          <h1>Built with precision. Powered by experience.</h1>
          <p>We coordinate construction, quantity estimation and electrical works so clients can move from an idea to a delivered project with clarity.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={`${styles.visual} ${styles.buildingVisual}`} role="img" aria-label="POWERBUILT construction site"><span>ONE COORDINATED TEAM</span></div>
          <div>
            <p className={styles.eyebrow}>OUR APPROACH</p>
            <h2>Planning that holds up on site.</h2>
            <p className={styles.lead}>POWERBUILT brings together the practical disciplines that shape a successful build: scope, quantities, electrical requirements, site coordination and delivery.</p>
            <ul className={styles.list}>
              <li>Clear project information before work begins</li>
              <li>Practical coordination between construction and electrical works</li>
              <li>Service grounded in Ghana&apos;s construction market</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <p className={styles.eyebrow}>WHAT WE STAND FOR</p>
          <div className={styles.cards}>
            {[['01', 'Precision', 'Well-considered quantities and requirements give each project a stronger starting point.'], ['02', 'Coordination', 'Construction, estimating and electrical expertise work together instead of in isolation.'], ['03', 'Delivery', 'We focus on practical next steps, accountable communication and work that moves forward.']].map(([number, title, text]) => <article className={styles.card} key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={styles.actions}><Link className="btn btn-primary" href="/contact">Talk to POWERBUILT</Link><Link className="btn btn-dark" href="/services">Explore Services</Link></div>
        </div>
      </section>
    </main>
  );
}
