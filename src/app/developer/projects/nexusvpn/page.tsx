import Link from "next/link";
import "./case-study.css";

export const metadata = {
  title: "NexusVPN | Developer Case Study",
  description: "A Flutter desktop VPN application prototype exploring navigation, Provider-based state management and core app screens.",
};

export default function NexusVpnCaseStudy() {
  return (
    <main className="case-study">
      <header className="case-study__header">
        <Link href="/developer" className="case-study__brand"><span>ISAAC</span> GHARTEY</Link>
        <nav aria-label="Case study navigation">
          <Link href="/developer#projects">All projects</Link>
          <Link href="/developer/projects/kofi-grooves">Previous case study</Link>
          <a href="https://github.com/confortadjei96/NexusVPN-app-Flutter-" target="_blank" rel="noreferrer">Source repository ↗</a>
        </nav>
      </header>
      <section className="case-study__hero">
        <p className="case-study__eyebrow">CASE STUDY · 03 / PERSONAL DESKTOP APP PROTOTYPE</p>
        <h1>Nexus<span>VPN.</span></h1>
        <p className="case-study__lead">A Flutter desktop application prototype exploring the structure of a VPN client, with dedicated Home, Status, Logs and Settings screens.</p>
        <div className="case-study__actions">
          <a className="case-study__button case-study__button--primary" href="https://github.com/confortadjei96/NexusVPN-app-Flutter-" target="_blank" rel="noreferrer">View source repository ↗</a>
          <Link className="case-study__button" href="/developer#projects">Back to projects</Link>
        </div>
      </section>
      <section className="case-study__facts" aria-label="Project overview">
        <div><span>ROLE</span><strong>Application development</strong></div>
        <div><span>TYPE</span><strong>Self-initiated prototype</strong></div>
        <div><span>STACK</span><strong>Flutter · Dart · Provider pattern</strong></div>
        <div><span>STATUS</span><strong>Early prototype · not a functional VPN yet</strong></div>
      </section>
      <section className="case-study__content">
        <article>
          <p className="case-study__eyebrow">01 / THE IDEA</p>
          <h2>A desktop interface for a VPN client.</h2>
          <p>NexusVPN is an exploratory desktop application project. The goal is to build a lightweight interface with clear connection controls, connection information, activity logs and user settings.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">02 / APPLICATION STRUCTURE</p>
          <h2>Four focused screens.</h2>
          <ul>
            <li><strong>Home:</strong> a central connection control and connection-state label.</li>
            <li><strong>Status:</strong> a screen for displaying IP address, upload and download speeds, and connection time.</li>
            <li><strong>Logs:</strong> a list-based view for application activity messages.</li>
            <li><strong>Settings:</strong> an auto-connect option and a save action placeholder.</li>
          </ul>
        </article>
        <article>
          <p className="case-study__eyebrow">03 / TECHNICAL APPROACH</p>
          <h2>Separating UI from view-model state.</h2>
          <p>The Flutter code uses ChangeNotifier view-model classes and Provider consumers to expose state to the Home, Status, Logs and Settings screens. The main window switches between the screens through a navigation sidebar.</p>
          <p>This structure provides a starting point for separating interface code from application state as the project grows.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">04 / CURRENT LIMITATIONS</p>
          <h2>A UI prototype, not a working VPN connection.</h2>
          <p>The current Connect button only toggles a local Connected or Disconnected label. The status screen contains sample values, and the auto-connect setting is not yet persisted. The inspected dependency manifest also does not currently declare the Provider package imported by the Dart files.</p>
          <p className="case-study__note">No VPN tunnel, server authentication, encryption protocol, real network routing, live telemetry or secure credential storage is implemented in the inspected code. The project is therefore presented honestly as an early desktop app prototype.</p>
        </article>
        <article>
          <p className="case-study__eyebrow">05 / NEXT DEVELOPMENT MILESTONES</p>
          <h2>From interface prototype to real application.</h2>
          <ul>
            <li>Add and verify the required Flutter dependencies, beginning with Provider.</li>
            <li>Persist settings and replace sample status values with real application state.</li>
            <li>Design a secure VPN backend and connection lifecycle before implementing tunnel support.</li>
            <li>Add robust error handling, connection logs and tests.</li>
            <li>Validate desktop packaging, startup behaviour and resource usage.</li>
          </ul>
        </article>
      </section>
      <footer className="case-study__footer">
        <div><p className="case-study__eyebrow">PORTFOLIO</p><h2>Explore the rest of my work.</h2></div>
        <Link href="/developer#projects" className="case-study__button case-study__button--primary">Back to all projects ↗</Link>
      </footer>
    </main>
  );
}
