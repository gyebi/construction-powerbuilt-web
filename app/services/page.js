import Link from "next/link";
import styles from "../public-page.module.css";

export const metadata = { title: "Services" };

const services = [
  ["01", "Building Construction", "Residential and commercial construction coordinated from foundation through completion.", "/estimate", "Request an estimate"],
  ["02", "Quantity Estimation & BOQ", "Material, labour and bill-of-quantities support for better project planning.", "/estimate", "Start an estimate request"],
  ["03", "Electrical Engineering", "Building electrical design, installations, testing, upgrades and consulting.", "/electrical", "Explore electrical services"],
  ["04", "Renovations", "Extensions, remodelling and upgrades for homes, commercial spaces and existing buildings.", "/contact", "Discuss a renovation"],
  ["05", "Project Management", "Site coordination, planning, supervision and cost monitoring for a more controlled delivery.", "/contact", "Discuss your project"],
  ["06", "Pre-Construction Consulting", "Early-stage guidance on feasibility, scope, quantities and project requirements.", "/contact", "Get in touch"],
];

export default function ServicesPage() {
  return <main className={styles.page}><section className={styles.hero}><div className="container"><p className={styles.eyebrow}>WHAT WE DO</p><h1>One team. Multiple disciplines.</h1><p>Construction, estimating and electrical services designed to give projects in Ghana a clearer path forward.</p></div></section><section className={styles.section}><div className="container"><div className={styles.serviceGrid}>{services.map(([number, title, description, href, action]) => <article className={styles.serviceCard} key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{description}</p><Link href={href}>{action} →</Link></article>)}</div></div></section><section className={`${styles.section} ${styles.darkSection}`}><div className={`container ${styles.grid}`}><div><p className={styles.eyebrow}>START WITH A CLEAR SCOPE</p><h2>Have plans or project details ready?</h2><p className={styles.lead}>Send them through securely and we&apos;ll review the right next step for your project.</p><div className={styles.actions}><Link className="btn btn-primary" href="/estimate">Request an Estimate</Link></div></div><div className={`${styles.visual} ${styles.siteVisual}`} role="img" aria-label="Construction site in Ghana"><span>PLAN · PRICE · BUILD</span></div></div></section></main>;
}
