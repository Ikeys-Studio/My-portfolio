"use client";

import Link from "next/link";
import "./case-study.css";

export default function TripleThreadCaseStudy() {
  return (
    <main className="case-study">
      <header className="case-study__header">
        <Link href="/developer" className="case-study__brand"><span>ISAAC</span> GHARTEY</Link>
        <nav aria-label="Case study navigation">
          <Link href="/developer#projects">All projects</Link>
          <a href="https://my-portfolio-puce-tau-56.vercel.app/" target="_blank" rel="noreferrer">Live website ↗</a>
        </nav>
      </header>

      <section className="case-study__hero">
        <p className="case-study__eyebrow">CASE STUDY · 01 / PERSONAL STUDIO PROJECT</p>
        <h1>Triple Thread <span>Agency.</span></h1>
        <p className="case-study__lead">A digital home for a creative studio working across Creative Design, Digital Technology, and Music &amp; Sound.</p>
        <div className="case-study__actions">
          <a className="case-study__button case-study__button--primary" href="https://my-portfolio-puce-tau-56.vercel.app/" target="_blank" rel="noreferrer">Visit live website ↗</a>
          <a className="case-study__button" href="https://github.com/Ikeys-Studio/My-portfolio" target="_blank" rel="noreferrer">View source code ↗</a>
        </div>
      </section>

      <section className="case-study__facts" aria-label="Project overview">
        <div><span>ROLE</span><strong>Design &amp; development</strong></div>
        <div><span>TYPE</span><strong>Self-initiated studio project</strong></div>
        <div><span>STACK</span><strong>Next.js · React · TypeScript · Tailwind CSS 4</strong></div>
        <div><span>STATUS</span><strong>Live build · ongoing development</strong></div>
      </section>

      <section className="case-study__content">
        <article>
          <p className="case-study__eyebrow">01 / THE BRIEF</p>
          <h2>One studio. Three creative disciplines.</h2>
          <p>Triple Thread Agency needed a clear digital presence that could bring creative design, digital technology, and music and sound under one identity. The experience had to feel like one coherent studio rather than three unrelated services.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">02 / MY APPROACH</p>
          <h2>A focused, responsive studio website.</h2>
          <p>I built the site with the Next.js App Router, React and TypeScript, using Tailwind CSS 4 for styling. The visual direction uses a dark, minimal interface, strong typography, and a restrained lime accent to keep the brand consistent across sections.</p>
          <ul>
            <li>Structured the homepage around the agency's three disciplines.</li>
            <li>Built reusable React components for navigation, visual elements and the enquiry form.</li>
            <li>Designed responsive layouts for phone and desktop screens.</li>
            <li>Added page metadata, Open Graph assets, a sitemap and robots configuration.</li>
          </ul>
        </article>
        <article>
          <p className="case-study__eyebrow">03 / TECHNICAL DECISIONS</p>
          <h2>Keep enquiry handling on the server.</h2>
          <p>The contact form sends its payload to a server-side API route rather than exposing an email-provider key in the browser. The route includes input validation, request-origin checks, a honeypot field, and a lightweight rate limit before attempting email delivery through Resend.</p>
          <p className="case-study__note">Email delivery requires a Resend API key and a verified sender address to be configured in the deployment environment. The form should not be described as fully operational until those settings are in place and a real test enquiry succeeds.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">04 / WHAT I LEARNED</p>
          <h2>Building is more than making a page look good.</h2>
          <p>This project has helped me practise component structure, responsive design, metadata and deployment workflows, as well as thinking through form validation and basic abuse prevention. It also taught me to test the same interface at different screen sizes instead of assuming a layout that works on one device will work everywhere.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">05 / NEXT IMPROVEMENTS</p>
          <h2>What I would improve next.</h2>
          <ul>
            <li>Complete and verify production email delivery with the correct domain and environment variables.</li>
            <li>Run accessibility checks for keyboard navigation, contrast and form feedback.</li>
            <li>Replace any remaining placeholder portfolio material with finished, clearly labelled work.</li>
            <li>Review performance and test the full enquiry journey on mobile and desktop.</li>
          </ul>
        </article>
      </section>

      <footer className="case-study__footer">
        <div><p className="case-study__eyebrow">NEXT</p><h2>Explore more of my work.</h2></div>
        <Link href="/developer#projects" className="case-study__button case-study__button--primary">Back to all projects ↗</Link>
      </footer>
    </main>
  );
}
