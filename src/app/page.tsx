import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import {
  ServiceIcon,
  ThreadsVisual,
  VennMark,
} from "../components/Visuals";

const disciplines = [
  {
    number: "01",
    title: "Creative Design",
    description:
      "Identity systems and art direction with a point of view — built to be recognizable across every surface.",
    capabilities: [
      "Brand identity",
      "Art direction",
      "Editorial & print",
      "Motion & visual systems",
    ],
    icon: "design",
  },
  {
    number: "02",
    title: "Digital Technology",
    description:
      "Fast, accessible digital experiences, from the first prototype to a production-ready front end.",
    capabilities: [
      "Websites & web apps",
      "Design systems",
      "Interaction prototyping",
      "Front-end development",
    ],
    icon: "technology",
  },
  {
    number: "03",
    title: "Music & Sound",
    description:
      "Sonic identity and original sound that give a brand a voice beyond the visual.",
    capabilities: [
      "Sonic branding",
      "Original composition",
      "Sound design",
      "Audio post-production",
    ],
    icon: "sound",
  },
] as const;

const principles = [
  {
    title: "Strategy before style",
    copy: "Every decision starts with the problem, not the aesthetic.",
  },
  {
    title: "One connected team",
    copy: "Design, technology, and sound work together from the first conversation.",
  },
  {
    title: "Made to be felt",
    copy: "Detail, rhythm, and clarity in everything we put into the world.",
  },
];

const studies = [
  {
    number: "01",
    tag: "Brand system concept",
    title: "Thread / Identity",
    copy: "A modular identity study exploring how three distinct marks resolve into one system.",
    art: "design",
  },
  {
    number: "02",
    tag: "Interaction study",
    title: "Signal / Interface",
    copy: "A responsive interface study focused on clarity, motion, and considered interaction.",
    art: "technology",
  },
  {
    number: "03",
    tag: "Audio concept",
    title: "Resonance / Sound",
    copy: "A short sonic identity sketch translating a three-part idea into tone and texture.",
    art: "sound",
  },
] as const;

const waveHeights = Array.from({ length: 28 }, (_, index) =>
  Math.round(18 + Math.abs(Math.sin(index * 0.62) * Math.cos(index * 0.19)) * 74),
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow">
                <span className="eyebrow__dot" /> Independent creative studio
              </p>
              <h1 className="hero__title" id="hero-title">
                Three disciplines.
                <br />
                <span className="accent-text">One creative vision.</span>
              </h1>
              <p className="hero__lead">
                We connect creative design, digital technology, and music &amp;
                sound into a single, considered body of work.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#work">
                  Explore our work <span aria-hidden="true">↗</span>
                </a>
                <a className="btn btn--outline" href="#contact">
                  Start a project
                </a>
              </div>

              <ul className="hero__disciplines" aria-label="Our disciplines">
                <li>
                  <span>01</span> Creative Design
                </li>
                <li>
                  <span>02</span> Digital Technology
                </li>
                <li>
                  <span>03</span> Music &amp; Sound
                </li>
              </ul>
            </div>

            <ThreadsVisual />
          </div>
        </section>

        {/* About */}
        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="section-heading section-heading--split about__heading">
              <div>
                <p className="section-label">01 / About the agency</p>
                <h2 id="about-title">
                  Good work doesn&apos;t
                  <br />
                  stay in <span className="accent-text">one lane.</span>
                </h2>
              </div>
              <p className="section-heading__note">
                We bring creative design, digital technology, and music &amp;
                sound together early — so every part of a project moves in the
                same direction.
              </p>
            </div>

            <div className="about__body">
              <div className="about__copy">
                <p className="about__lead">
                  Triple Thread Agency is an independent creative studio for
                  ideas that deserve more than a one-dimensional answer.
                </p>
                <p>
                  A strong identity should carry through a website. A digital
                  experience should have its own rhythm. And sound should add
                  meaning, not just fill silence. We connect those details into
                  one coherent experience — shaped around the people and
                  purpose behind each project.
                </p>

                <div className="about__belief">
                  <span className="about__belief-label">What we believe</span>
                  <p>
                    The best results happen when the disciplines collaborate,
                    not when they compete for attention.
                  </p>
                </div>

                <ul className="principles">
                  {principles.map((principle, index) => (
                    <li key={principle.title}>
                      <span className="principles__number">
                        0{index + 1}
                      </span>
                      <div>
                        <h3>{principle.title}</h3>
                        <p>{principle.copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about__visual">
                <VennMark />
                <div className="about__visual-note">
                  <span>THE TRIPLE THREAD APPROACH</span>
                  <p>Different disciplines. Shared intent. One connected outcome.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          className="section services"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="section-label">02 / Services</p>
                <h2 id="services-title">What we do</h2>
              </div>
              <p className="section-heading__note">
                Three connected practices. One team, one vision, no handoffs
                between the people who imagine it and the people who build it.
              </p>
            </div>

            <div className="services__grid">
              {disciplines.map((discipline) => (
                <article className="service-card" key={discipline.number}>
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <ServiceIcon kind={discipline.icon} />
                    </span>
                    <span className="service-card__number">
                      {discipline.number}
                    </span>
                  </div>
                  <h3>{discipline.title}</h3>
                  <p>{discipline.description}</p>
                  <ul>
                    {discipline.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="section-label">03 / Portfolio</p>
                <h2 id="work-title">Explorations, not case studies.</h2>
              </div>
              <p className="section-heading__note">
                Self-initiated studio studies that show how the three disciplines
                intersect. These are concepts, not client projects — no client
                work is represented here.
              </p>
            </div>

            <div className="work__grid">
              {studies.map((study) => (
                <article className="work-card" key={study.number}>
                  <div
                    className={`work-card__visual work-card__visual--${study.art}`}
                    aria-hidden="true"
                  >
                    {study.art === "design" && (
                      <>
                        <span className="art-circle" />
                        <span className="art-square" />
                        <span className="art-line" />
                      </>
                    )}
                    {study.art === "technology" && (
                      <>
                        <span className="art-window">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span className="art-cursor" />
                      </>
                    )}
                    {study.art === "sound" && (
                      <span className="art-waveform">
                        {waveHeights.map((height, index) => (
                          <i key={index} style={{ height: `${height}%` }} />
                        ))}
                      </span>
                    )}
                    <span className="work-card__index">{study.number}</span>
                  </div>
                  <div className="work-card__body">
                    <p className="work-card__tag">{study.tag}</p>
                    <h3>{study.title}</h3>
                    <p className="work-card__copy">{study.copy}</p>
                    <p className="work-card__note">Self-initiated study</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Music & Sound */}
        <section
          className="section music"
          id="music-sound"
          aria-labelledby="music-title"
        >
          <div className="container music__inner">
            <div className="music__intro">
              <p className="section-label">04 / Music &amp; Sound</p>
              <h2 id="music-title">
                Sound is part
                <br />
                <span className="accent-text">of the story.</span>
              </h2>
              <p>
                From original music and production to sound design and sonic
                identity, we treat audio as an essential part of the creative
                experience.
              </p>
            </div>
            <div className="music__placeholder">
              <span className="music__placeholder-mark" aria-hidden="true">♪</span>
              <p className="work-card__tag">Studio playlist / coming soon</p>
              <h3>Our sound library is taking shape.</h3>
              <p>
                Finished productions and selected audio work will appear here.
                We are keeping this space open until there is work ready to hear.
              </p>
              <a className="btn btn--outline" href="#contact">
                Discuss a sound project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact__inner">
            <div className="contact__intro">
              <p className="section-label">05 / Contact</p>
              <h2 id="contact-title">
                Let&apos;s connect
                <br />
                <span className="accent-text">the threads.</span>
              </h2>
              <p>
                Have a project that lives at the intersection of design,
                technology, and sound? Tell us what you&apos;re building.
              </p>
              <a className="contact__email" href="mailto:triplethreadagency@gmail.com">
                triplethreadagency@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <p className="site-footer__wordmark">
                Triple Thread <span>Agency</span>
              </p>
              <p className="site-footer__tagline">
                Three disciplines. One creative vision.
              </p>
            </div>

            <div className="site-footer__links">
              <div>
                <h2>Explore</h2>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#work">Work</a>
                <a href="#music-sound">Music &amp; Sound</a>
                <a href="#contact">Contact</a>
              </div>
              <div>
                <h2>Connect</h2>
                <a href="mailto:triplethreadagency@gmail.com">Email us</a>
                <a href="#top">Back to top ↑</a>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p>© 2026 Triple Thread Agency</p>
            <p>Creative Design · Digital Technology · Music &amp; Sound</p>
          </div>
        </div>
      </footer>
    </>
  );
}
