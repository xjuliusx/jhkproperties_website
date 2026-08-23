"use client";

import { useState } from "react";

const resources = [
  {
    number: "01",
    title: "Pay rent",
    text: "Review accepted payment methods, due dates, and the details you need before sending a payment.",
    href: "#payments",
  },
  {
    number: "02",
    title: "Request maintenance",
    text: "Know who to contact, what information to include, and what to do when something is urgent.",
    href: "#maintenance",
  },
  {
    number: "03",
    title: "Tenant information",
    text: "Find answers about rent, notices, emergencies, and common property questions in one place.",
    href: "#information",
  },
];

const faqs = [
  ["When is rent due?", "Rent is due on the date stated in your lease. If you are unsure, contact JHK Properties before sending payment so we can confirm your balance and due date."],
  ["What should I include with a payment?", "Always include your full name and rental property address in the payment note or memo. This helps us apply the payment correctly."],
  ["What counts as a maintenance emergency?", "No heat in freezing weather, active flooding, fire, gas odor, or another immediate threat to people or property should be treated as urgent. Call 911 first when life or safety is at risk."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="JHK Properties home">
          <span className="brand-mark">JHK</span>
          <span>PROPERTIES</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#payments">Payments</a>
          <a href="#maintenance">Maintenance</a>
          <a href="#information">Tenant info</a>
        </nav>
        <a className="header-action" href="mailto:admin@jhkproperties.com">Contact us <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Tenant resources, made simple</p>
          <h1>A better way to feel <em>at home.</em></h1>
          <p className="hero-intro">Everything you need as a JHK Properties tenant—from payment guidance to maintenance help—in one clear, dependable place.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#payments">View payment info <span>→</span></a>
            <a className="text-link" href="#maintenance">Get maintenance help <span>↓</span></a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Tenant quick overview">
          <div className="arch-card">
            <div className="arch-sun" />
            <div className="building building-one"><i /><i /><i /><i /></div>
            <div className="building building-two"><i /><i /></div>
          </div>
          <div className="availability">
            <span className="status-dot" />
            <p><strong>Tenant support</strong><br />Monday–Friday, 9am–5pm</p>
          </div>
        </div>
      </section>

      <section className="resource-strip" aria-label="Tenant resources">
        {resources.map((resource) => (
          <a className="resource-card" href={resource.href} key={resource.number}>
            <span className="resource-number">{resource.number}</span>
            <div><h2>{resource.title}</h2><p>{resource.text}</p></div>
            <span className="round-arrow">↗</span>
          </a>
        ))}
      </section>

      <section className="section payment-section" id="payments">
        <div className="section-heading">
          <p className="eyebrow"><span /> Rent payments</p>
          <h2>Pay with confidence.</h2>
          <p>Confirm your balance and approved payment method with management before making your first payment.</p>
        </div>
        <div className="payment-layout">
          <article className="payment-card featured">
            <div className="card-top"><span>Recommended</span><span className="shield">✓</span></div>
            <h3>Online payment portal</h3>
            <p>A secure tenant payment link will be available here after JHK Properties connects its preferred payment provider.</p>
            <button type="button" disabled>Portal coming soon</button>
            <small>Never send banking details through email or text.</small>
          </article>
          <article className="payment-card">
            <div className="card-top"><span>Current option</span><span>02</span></div>
            <h3>Contact management</h3>
            <p>Ask for your current balance and the approved payment instructions for your property.</p>
            <a href="mailto:admin@jhkproperties.com?subject=Payment%20information%20request">Request payment details <span>→</span></a>
            <small>Include your name and rental property address.</small>
          </article>
        </div>
        <div className="payment-note"><strong>Before you pay</strong><span>Verify the recipient, amount, property address, and payment memo. JHK Properties will never ask you to pay with gift cards.</span></div>
      </section>

      <section className="section maintenance-section" id="maintenance">
        <div>
          <p className="eyebrow light"><span /> Maintenance</p>
          <h2>Something needs attention?</h2>
          <p className="maintenance-copy">Tell us what happened, where it is, and when you first noticed it. Photos are helpful when safe to take.</p>
          <a className="button button-light" href="mailto:admin@jhkproperties.com?subject=Maintenance%20request">Start a maintenance request <span>↗</span></a>
        </div>
        <aside className="emergency-card">
          <p>For emergencies</p>
          <h3>Protect people first.</h3>
          <ol><li>Call 911 for immediate danger.</li><li>Leave the area if you smell gas or see fire.</li><li>Then contact property management.</li></ol>
          <a href="mailto:admin@jhkproperties.com?subject=Urgent%20maintenance%20issue">Email property management</a>
        </aside>
      </section>

      <section className="section info-section" id="information">
        <div className="section-heading">
          <p className="eyebrow"><span /> Good to know</p>
          <h2>Answers for everyday renting.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className="faq" key={question}>
              <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{question}<b>{openFaq === index ? "−" : "+"}</b>
              </button>
              {openFaq === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">JHK</span><span>PROPERTIES</span></div>
        <p>Thoughtful homes. Dependable management.</p>
        <div><a href="mailto:admin@jhkproperties.com">admin@jhkproperties.com</a><address>JHK Property Holdings<br />16 Middle Neck Rd, #752<br />Great Neck, NY 11021</address><span>© {new Date().getFullYear()} JHK Properties</span></div>
      </footer>
    </main>
  );
}
