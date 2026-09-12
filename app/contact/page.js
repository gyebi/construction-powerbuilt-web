"use client";

import { useState } from "react";
import { getPowerbuiltWhatsAppUrl } from "../../lib/contact";
import styles from "../public-page.module.css";
import contactStyles from "./contact.module.css";

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || "We could not send your message.");
      setSent(true);
      setForm(emptyForm);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your message.");
    } finally {
      setSubmitting(false);
    }
  }

  const whatsAppMessage = "Hello J. A. POWERBUILT CONSTRUCTION. I would like to discuss a project.";

  return <main className={styles.page}><section className={styles.hero}><div className="container"><p className={styles.eyebrow}>CONTACT POWERBUILT</p><h1>Let&apos;s talk about your project.</h1><p>For construction, estimation and electrical enquiries, send a message or start the conversation on WhatsApp.</p></div></section><section className={styles.section}><div className={`container ${styles.grid}`}><div><p className={styles.eyebrow}>WHATSAPP-FIRST</p><h2>Reach the team directly.</h2><p className={styles.lead}>WhatsApp is the quickest way to begin a project conversation. You can also send an enquiry below and we&apos;ll have the details ready for follow-up.</p><a className="btn btn-whatsapp" href={getPowerbuiltWhatsAppUrl(whatsAppMessage)} target="_blank" rel="noopener noreferrer">Continue on WhatsApp</a><ul className={styles.list}><li>Construction and renovation enquiries</li><li>Quantity estimation and BOQ requests</li><li>Electrical consulting and building electrical works</li></ul></div><div className={contactStyles.formPanel}>{sent ? <div className={contactStyles.success} role="status"><p className={styles.eyebrow}>ENQUIRY RECEIVED</p><h2>Thank you.</h2><p>We&apos;ve received your message. Continue on WhatsApp if you&apos;d like to discuss the project now.</p><a className="btn btn-whatsapp" href={getPowerbuiltWhatsAppUrl("Hello J. A. POWERBUILT CONSTRUCTION. I just sent an enquiry through the website.")} target="_blank" rel="noopener noreferrer">Open WhatsApp</a></div> : <form onSubmit={submit}><div className={contactStyles.formGrid}><label>Full Name *<input name="name" value={form.name} onChange={updateForm} maxLength="120" autoComplete="name" required /></label><label>Phone<input name="phone" type="tel" value={form.phone} onChange={updateForm} maxLength="30" autoComplete="tel" /></label><label>Email<input name="email" type="email" value={form.email} onChange={updateForm} maxLength="180" autoComplete="email" /></label><label>Subject<input name="subject" value={form.subject} onChange={updateForm} maxLength="160" /></label><label className={contactStyles.full}>How can we help? *<textarea name="message" value={form.message} onChange={updateForm} maxLength="3000" rows="6" required /></label></div>{error ? <p className={contactStyles.error} role="alert">{error}</p> : null}<button className="btn btn-primary" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send Enquiry"}</button></form>}</div></div></section></main>;
}
