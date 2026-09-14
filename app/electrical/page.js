import Link from "next/link";
import styles from "../public-page.module.css";

export const metadata = { title: "Electrical Services" };
const capabilities = [
  ["01", "House Wiring", "Safe, practical wiring solutions for new homes, extensions and renovations."],
  ["02", "CCTV / DSTV", "CCTV and DSTV installation planned around how you use your home or premises."],
  ["03", "Telephone Systems", "Telephone-system installation and coordination for residential and commercial spaces."],
  ["04", "Electrical Materials Supply", "Supply of electrical materials for projects, installations and upgrades."],
];

export default function ElectricalPage() {
  return <main className={styles.page}><section className={styles.hero}><div className="container"><p className={styles.eyebrow}>ELECTRICAL ENGINEERING</p><h1>Reliable power starts with a considered plan.</h1><p>House wiring, CCTV / DSTV, telephone systems and electrical-material supply for residential and commercial projects across Ghana.</p></div></section><section className={styles.section}><div className={`container ${styles.grid}`}><div><p className={styles.eyebrow}>BUILD + POWER</p><h2>Electrical work that belongs in the full project picture.</h2><p className={styles.lead}>We help clients account for electrical needs early, coordinate the work with construction, and move toward a safe, practical finished installation.</p><div className={styles.actions}><Link className="btn btn-primary" href="/estimate">Request an Electrical Estimate</Link></div></div><div className={`${styles.visual} ${styles.electricalVisual}`} role="img" aria-label="Building electrical installation"><span>DESIGN · INSTALL · DELIVER</span></div></div></section><section className={`${styles.section} ${styles.sectionAlt}`}><div className="container"><p className={styles.eyebrow}>SPECIALTIES</p><div className={styles.cards}>{capabilities.map(([number, title, text]) => <article className={styles.card} key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section></main>;
}
