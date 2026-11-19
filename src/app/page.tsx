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
    focus: "Make it recognizable.",
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
    focus: "Make it work beautifully.",
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
    focus: "Make it memorable.",
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
    discipline: "Creative design",
    visualLabel: "Identity / 001",
    tag: "Brand system concept",
    title: "Thread / Identity",
    copy: "A modular identity study exploring how three distinct marks resolve into one system.",
    art: "design",
  },
  {
    number: "02",
    discipline: "Digital technology",
    visualLabel: "Interface / 002",
    tag: "Interaction study",
    title: "Signal / Interface",
    copy: "A responsive interface study focused on clarity, motion, and considered interaction.",
    art: "technology",
  },
  {
    number: "03",
    discipline: "Music & sound",
    visualLabel: "Sonic / 003",
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
                We bring brand identity, website design and development, and
                original music &amp; sound together to help businesses and
                creative teams build a clear, memorable presence.
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
                  Triple Thread Agency is an independent creative studio
                  connecting brand identity, digital experiences, and music
                  production for businesses, organisations, and creatives in
                  Ghana and beyond.
                </p>
                <p>
                  From brand identity and graphic design to website design,
                  web development, and original music production, we bring the
                  right disciplines together around one clear purpose. A strong
                  identity should carry through a website; a digital experience
                  should have its own rhythm; and sound should add meaning, not
                  just fill silence.
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
                <article
                  className={`service-card service-card--${discipline.icon}`}
                  key={discipline.number}
                >
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <ServiceIcon kind={discipline.icon} />
                    </span>
                    <span className="service-card__number">
                      {discipline.number} <span>/ 03</span>
                    </span>
                  </div>
                  <p className="service-card__focus">{discipline.focus}</p>
                  <h3>{discipline.title}</h3>
                  <p>{discipline.description}</p>
                  <div className="service-card__capabilities">
                    <span>What we can help with</span>
                    <ul>
                      {discipline.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                  <a className="service-card__link" href="#contact">
                    Start a project <span aria-hidden="true">↗</span>
                  </a>
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
                <h2 id="work-title">Ideas, made visible.</h2>
              </div>
              <p className="section-heading__note">
                A growing collection of self-initiated explorations across
                identity, digital experience, and sound. Each piece is a
                creative study — not commissioned client work.
              </p>
            </div>

            <div className="work__grid">
              {studies.map((study) => (
                <article className="work-card" key={study.number}>
                  <div
                    className={`work-card__visual work-card__visual--${study.art}`}
                    aria-hidden="true"
                  >
                    <span className="work-card__visual-label">{study.visualLabel}</span>
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
                    <p className="work-card__tag">{study.discipline} / {study.tag}</p>
                    <h3>{study.title}</h3>
                    <p className="work-card__copy">{study.copy}</p>
                    <p className="work-card__note">
                      <span>Studio exploration</span>
                      <span>Not commissioned work</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="work__closing">
              <p>Have a brief of your own?</p>
              <a href="#contact">
                Let&apos;s make something meaningful <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Music & Sound */}
        <section
          className="section music"
          id="music-sound"
          aria-labelledby="music-title"
        >
          <div className="container">
            <div className="music__inner">
              <div className="music__intro">
                <p className="section-label">04 / Music &amp; Sound</p>
                <h2 id="music-title">
                  Sound is part
                  <br />
                  <span className="accent-text">of the story.</span>
                </h2>
                <p>
                  We shape the sonic layer of an experience — from a distinct
                  brand voice to original music and carefully considered
                  production. Audio should do more than fill a space; it should
                  make the idea resonate.
                </p>
                <a className="music__contact-link" href="#contact">
                  Talk to us about sound <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="music__feature">
                <div className="music__feature-top">
                  <span className="music__eyebrow">THE SONIC PRACTICE</span>
                  <span className="music__status">
                    <i aria-hidden="true" /> Portfolio in development
                  </span>
                </div>
                <div className="music__sound-art" aria-hidden="true">
                  <div className="music__sound-orbit music__sound-orbit--one" />
                  <div className="music__sound-orbit music__sound-orbit--two" />
                  <div className="music__waveform">
                    {waveHeights.map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <span className="music__sound-index">TTA / SOUND</span>
                </div>
                <div className="music__feature-copy">
                  <p className="work-card__tag">A considered approach to audio</p>
                  <h3>Give the idea a voice.</h3>
                  <p>
                    Selected productions and audio examples will be added here
                    when they are ready to share. Until then, here is what the
                    practice is built around.
                  </p>
                </div>
              </div>
            </div>

            <div className="music__services">
              <article className="music__service">
                <span>01 / IDENTITY</span>
                <h3>Sonic branding</h3>
                <p>Distinctive audio cues and sound palettes that help a brand become recognisable.</p>
              </article>
              <article className="music__service">
                <span>02 / COMPOSITION</span>
                <h3>Original music</h3>
                <p>Purpose-built music for content, campaigns, experiences, and creative projects.</p>
              </article>
              <article className="music__service">
                <span>03 / PRODUCTION</span>
                <h3>Sound design &amp; post</h3>
                <p>Designed sound, editing, and finishing that bring clarity and character to the final piece.</p>
              </article>
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
