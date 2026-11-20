import Link from "next/link";
import "./case-study.css";

export const metadata = {
  title: "Kofi Grooves | Developer Case Study",
  description:
    "A PHP and MySQL portfolio website project exploring database-backed administration, project management and contact workflows.",
};

export default function KofiGroovesCaseStudy() {
  return (
    <main className="case-study">
      <header className="case-study__header">
        <Link href="/developer" className="case-study__brand"><span>ISAAC</span> GHARTEY</Link>
        <nav aria-label="Case study navigation">
          <Link href="/developer#projects">All projects</Link>
          <Link href="/developer/projects/triple-thread-agency">Previous case study</Link>
        </nav>
      </header>

      <section className="case-study__hero">
        <p className="case-study__eyebrow">CASE STUDY · 02 / PERSONAL WEB PROJECT</p>
        <h1>Kofi <span>Grooves.</span></h1>
        <p className="case-study__lead">A portfolio and studio website project built around PHP, MySQL and a database-backed administration area.</p>
        <div className="case-study__actions">
          <a className="case-study__button case-study__button--primary" href="mailto:triplethreadagency@gmail.com?subject=Kofi%20Grooves%20project%20enquiry">Ask about this project ↗</a>
          <Link className="case-study__button" href="/developer#projects">Back to projects</Link>
        </div>
      </section>

      <section className="case-study__facts" aria-label="Project overview">
        <div><span>ROLE</span><strong>Web development</strong></div>
        <div><span>TYPE</span><strong>Self-initiated portfolio project</strong></div>
        <div><span>STACK</span><strong>PHP · MySQL · HTML · CSS · JavaScript</strong></div>
        <div><span>STATUS</span><strong>Development project</strong></div>
      </section>

      <section className="case-study__content">
        <article>
          <p className="case-study__eyebrow">01 / THE PROJECT</p>
          <h2>A portfolio site with a working admin foundation.</h2>
          <p>Kofi Grooves is a portfolio and studio website project. Beyond presenting work, the project explores how a website can store and manage content through a PHP application connected to a MySQL database.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">02 / WHAT I BUILT</p>
          <h2>Database-backed content management.</h2>
          <ul>
            <li>PHP pages connected to a MySQL database.</li>
            <li>An administration area with project management workflows.</li>
            <li>Database-backed records for projects, contact messages and visitors.</li>
            <li>Project create, read, update and delete functionality in the admin area.</li>
            <li>A contact workflow using Formspree.</li>
            <li>Password-reset work using PHPMailer and a Brevo email-delivery route.</li>
          </ul>
        </article>
        <article>
          <p className="case-study__eyebrow">03 / TECHNICAL FOCUS</p>
          <h2>Connecting the interface to persistent data.</h2>
          <p>The project gave me practical experience working across the presentation layer, PHP server logic and MySQL data storage. Building the admin area helped me understand how content-management workflows connect forms, database operations and the pages visitors see.</p>
          <p>It also introduced me to the extra work involved in account recovery and email delivery, including configuring an SMTP provider and troubleshooting delivery setup.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">04 / WHAT I LEARNED</p>
          <h2>Full-page features depend on reliable backend workflows.</h2>
          <p>This project strengthened my understanding of PHP, database-backed pages, CRUD operations and form handling. It also taught me that features such as contact submissions and password resets depend on correct external service configuration, not just the visible interface.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">05 / NEXT IMPROVEMENTS</p>
          <h2>Hardening and finishing the project.</h2>
          <ul>
            <li>Complete and verify the production email and password-reset flow end to end.</li>
            <li>Finish HTTPS configuration and verify all pages use secure connections.</li>
            <li>Review admin authentication, authorization and input handling.</li>
            <li>Capture current screenshots and add a verified live demo and source-code link.</li>
          </ul>
          <p className="case-study__note">A live demo and source repository have not been linked here because their current URLs have not yet been verified. The project is presented as personal development work, not paid client work.</p>
        </article>
      </section>

      <footer className="case-study__footer">
        <div><p className="case-study__eyebrow">NEXT PROJECT</p><h2>NexusVPN.</h2></div>
        <Link href="/developer#projects" className="case-study__button case-study__button--primary">Back to all projects ↗</Link>
      </footer>
    </main>
  );
}
