import ContactForm from "../components/ContactForm";
import BrandMark from "../components/BrandMark";
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


const pricingGroups = [
  {
    number: "01",
    title: "Creative Design",
    intro: "Build a visual identity people recognise and remember.",
    packages: [
      { name: "Essential Identity", price: "GH₵1,200", description: "A focused logo foundation for a new business.", features: ["Primary logo and alternate version", "Colour palette and typography", "Basic logo usage sheet", "2 revision rounds"] },
      { name: "Professional Identity", price: "GH₵2,500", featured: true, description: "A cohesive identity system ready for everyday business use.", features: ["Complete logo suite", "Colour and typography system", "Business card and letterhead designs", "Brand guidelines document", "3 revision rounds"] },
      { name: "Premium Brand System", price: "GH₵4,000", description: "A more complete brand world with practical applications.", features: ["Everything in Professional Identity", "Social media template set", "Additional brand applications", "Extended brand guidelines", "3 revision rounds"] },
    ],
  },
  {
    number: "02",
    title: "Digital Technology",
    intro: "Turn your business goals into clear, responsive digital experiences.",
    packages: [
      { name: "Launch Website", price: "GH₵2,500", description: "A polished online starting point for a new business.", features: ["Up to 3 pages", "Responsive mobile and desktop layout", "Contact form and WhatsApp link", "Social links and basic SEO", "2 revision rounds"] },
      { name: "Business Website", price: "GH₵4,500", featured: true, description: "A complete business presence built to support enquiries.", features: ["Up to 7 pages", "Custom responsive design", "Enquiry form and lead capture", "Basic SEO, sitemap and analytics setup", "2 revision rounds", "30 days post-launch support"] },
      { name: "Premium Website", price: "GH₵6,500", description: "A richer digital experience for growing organisations.", features: ["Up to 10 pages", "Custom UI and interactive sections", "Blog or CMS setup where suitable", "Advanced on-page SEO setup", "Performance optimisation", "60 days post-launch support"] },
      { name: "E-commerce Website", price: "GH₵8,500", description: "A practical online store for selling products.", features: ["Product catalogue and categories", "Shopping cart and checkout", "One payment gateway integration", "Order management basics", "Responsive design and product SEO", "Client handover session"] },
    ],
  },
  {
    number: "03",
    title: "Music & Sound",
    intro: "Give your brand, content and creative projects a distinctive sound.",
    packages: [
      { name: "Music Production", price: "GH₵1,500", description: "A custom-produced song or instrumental arrangement.", features: ["One original production", "Arrangement and sound selection", "One approved revision round", "Final stereo WAV and MP3"] },
      { name: "Mix & Master", price: "GH₵700", featured: true, description: "A finished stereo release from supplied multitrack stems.", features: ["Multitrack mix of up to 24 stems", "Stereo mastering", "One revision round", "Final WAV and MP3 delivery"] },
      { name: "Sonic Starter", price: "GH₵800", description: "A short original audio identity for a brand or campaign.", features: ["One short audio logo or jingle", "Custom sound direction", "One revision round", "Final WAV and MP3 delivery"] },
    ],
  },
] as const;

const addOnPrices = [
  { name: "Single promotional graphic", price: "GH₵200" },
  { name: "Event branding design", price: "GH₵700" },
  { name: "Company profile design", price: "GH₵900" },
  { name: "Landing page UI design", price: "GH₵800" },
  { name: "Website UI/UX design (up to 5 screens)", price: "GH₵1,800" },
  { name: "Mobile app UI/UX (up to 8 screens)", price: "GH₵2,500" },
  { name: "Bass or keyboard session recording", price: "GH₵300" },
  { name: "Podcast intro / outro", price: "GH₵500" },
  { name: "Voice-over editing", price: "GH₵300" },
];

const retainers = [
  { name: "Social Design Starter", price: "GH₵600", detail: "8 designed posts per month" },
  { name: "Social Design Growth", price: "GH₵1,000", detail: "12 designed posts and 4 story designs per month" },
  { name: "Social Design Premium", price: "GH₵1,600", detail: "16 designed posts, 8 story designs and campaign graphics per month" },
  { name: "Website Care Essential", price: "GH₵300", detail: "Routine updates and basic monthly checks" },
  { name: "Website Care Business", price: "GH₵500", detail: "Updates, backups and agreed content changes" },
  { name: "Website Care Premium", price: "GH₵800", detail: "Priority maintenance and expanded monthly support" },
];

const bundles = [
  { name: "Business Launch", price: "GH₵3,500", description: "For entrepreneurs building a confident first presence.", features: ["Essential brand identity", "Up to 3-page launch website", "Social profile graphics", "Contact and WhatsApp integration"] },
  { name: "Brand & Digital Growth", price: "GH₵6,500", featured: true, description: "For businesses ready to look consistent and compete online.", features: ["Professional brand identity", "Up to 7-page business website", "8 social media designs", "Basic SEO and analytics setup"] },
  { name: "Complete Creative Experience", price: "GH₵9,500", description: "A connected brand, digital and audio package.", features: ["Premium brand system", "Up to 10-page premium website", "12 social media designs", "One custom audio logo or short jingle", "60 days post-launch support"] },
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

      <a
        className="whatsapp-float"
        href="https://wa.me/233551624160?text=Hello%20Triple%20Thread%20Agency%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start a WhatsApp chat with Triple Thread Agency"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6-3.5-8.3ZM12.2 21.6h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.7 4.8Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6s1.2 3 1.4 3.2c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.8.6.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3Z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

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


        {/* Pricing */}
        <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="section-label">03 / Investment</p>
                <h2 id="pricing-title">Clear scope. <span className="accent-text">Clear pricing.</span></h2>
              </div>
              <p className="section-heading__note">
                Thoughtful creative work, with straightforward package prices in Ghana cedis.
                Choose a package to get started; if your brief needs something different, we can shape a tailored proposal.
              </p>
            </div>

            {pricingGroups.map((group) => (
              <div className="pricing__discipline" key={group.number}>
                <div className="pricing__discipline-heading">
                  <span>{group.number} / 03</span>
                  <div><h3>{group.title}</h3><p>{group.intro}</p></div>
                </div>
                <div className="pricing__grid">
                  {group.packages.map((item) => (
                    <article className={`price-card${"featured" in item && item.featured ? " price-card--featured" : ""}`} key={item.name}>
                      {"featured" in item && item.featured && <span className="price-card__badge">Popular choice</span>}
                      <h4>{item.name}</h4>
                      <p className="price-card__description">{item.description}</p>
                      <p className="price-card__amount">{item.price}<span> / project</span></p>
                      <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                      <a className="btn btn--outline price-card__cta" href={`#contact`} aria-label={`Enquire about ${item.name}`}>Choose this package <span aria-hidden="true">↗</span></a>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="pricing__extras">
              <div className="pricing__extras-heading">
                <p className="section-label">À LA CARTE</p>
                <h3>Individual services</h3>
                <p>For focused requests that do not need a full package.</p>
              </div>
              <div className="pricing__list">
                {addOnPrices.map((item) => <div className="pricing__list-row" key={item.name}><span>{item.name}</span><strong>{item.price}</strong></div>)}
              </div>
            </div>

            <div className="pricing__extras">
              <div className="pricing__extras-heading">
                <p className="section-label">ONGOING PARTNERSHIPS</p>
                <h3>Monthly support</h3>
                <p>Consistent creative and website care for businesses that need ongoing support.</p>
              </div>
              <div className="retainer-grid">
                {retainers.map((item) => <article className="retainer-card" key={item.name}><h4>{item.name}</h4><strong>{item.price}<span> / month</span></strong><p>{item.detail}</p></article>)}
              </div>
            </div>

            <div className="pricing__bundles">
              <div className="section-heading section-heading--split">
                <div><p className="section-label">CONNECTED SOLUTIONS</p><h3>More than one thread.</h3></div>
                <p className="section-heading__note">Combine disciplines in one coordinated project and get a more connected result.</p>
              </div>
              <div className="pricing__grid pricing__grid--bundles">
                {bundles.map((item) => (
                  <article className={`price-card price-card--bundle${"featured" in item && item.featured ? " price-card--featured" : ""}`} key={item.name}>
                    {"featured" in item && item.featured && <span className="price-card__badge">Best balance</span>}
                    <h4>{item.name}</h4><p className="price-card__description">{item.description}</p>
                    <p className="price-card__amount">{item.price}<span> / project</span></p>
                    <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    <a className="btn btn--outline price-card__cta" href="#contact">Enquire about this bundle <span aria-hidden="true">↗</span></a>
                  </article>
                ))}
              </div>
            </div>

            <div className="pricing__terms">
              <h3>How projects work</h3>
              <div className="pricing__terms-grid">
                <p><strong>60% to begin</strong><span>Confirms your booking and project slot.</span></p>
                <p><strong>30% at milestone</strong><span>Due after the agreed design or development milestone.</span></p>
                <p><strong>10% before handover</strong><span>Final payment is due before delivery of final files or launch.</span></p>
                <p><strong>Clear scope</strong><span>Each package has defined deliverables and revision rounds. Extra work is quoted separately.</span></p>
              </div>
              <p className="pricing__fineprint">All prices are in Ghana cedis (GH₵). Package prices cover the listed scope only. Domain registration, hosting, paid plugins, stock assets, advertising spend, payment-provider fees and other third-party costs are not included unless stated in writing. Project timelines are confirmed after the brief is approved. Quotes are valid for 14 days. Rush delivery, where available, is quoted separately.</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="section-label">04 / Portfolio</p>
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
                <p className="section-label">05 / Music &amp; Sound</p>
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

        {/* Frequently asked questions */}
        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="section-label">06 / Before we begin</p>
                <h2 id="faq-title">A few things <span className="accent-text">worth knowing.</span></h2>
              </div>
              <p className="section-heading__note">
                Straight answers to common questions about working with Triple Thread Agency.
                If something is not covered here, send us an enquiry and we will clarify it.
              </p>
            </div>
            <div className="faq__list">
              <details className="faq__item">
                <summary>How do I get started with a project?</summary>
                <p>Send an enquiry through the contact form or WhatsApp. Tell us what you need, what you are aiming to achieve, your budget and your preferred timeline. We will review the brief and follow up to discuss the scope and next steps.</p>
              </details>
              <details className="faq__item">
                <summary>Are the prices on the website fixed?</summary>
                <p>The listed prices apply to the deliverables and scope described in each package. If your project needs additional pages, features, assets or services, we will discuss the requirements and provide a tailored quote before the extra work begins.</p>
              </details>
              <details className="faq__item">
                <summary>How does payment work?</summary>
                <p>Our standard project payment schedule is 60% to confirm the booking, 30% at the agreed milestone, and the final 10% before handover or launch. Any different arrangement must be agreed in writing before work starts.</p>
              </details>
              <details className="faq__item">
                <summary>How long will my project take?</summary>
                <p>Timing depends on the project scope, feedback and the materials supplied. We confirm the working timeline after reviewing and approving the brief. Your project schedule and milestones will be agreed before production begins.</p>
              </details>
              <details className="faq__item">
                <summary>Can I request changes during the project?</summary>
                <p>Yes. Each package includes the revision rounds listed in its description. We work through feedback at the agreed milestones. Requests that go beyond the included rounds or change the approved scope may require an additional quote.</p>
              </details>
              <details className="faq__item">
                <summary>Are hosting, domains and third-party costs included?</summary>
                <p>Unless a package explicitly says otherwise, domain registration, hosting, paid plugins, stock assets, advertising spend, payment-provider fees and other third-party costs are separate. We will identify relevant costs during scoping.</p>
              </details>
              <details className="faq__item">
                <summary>Can I combine design, website and music services?</summary>
                <p>Absolutely. Triple Thread Agency brings Creative Design, Digital Technology, and Music &amp; Sound together. You can choose one service, select a connected bundle, or ask us to shape a coordinated proposal around your brief.</p>
              </details>
              <details className="faq__item">
                <summary>Do you work with clients outside Ghana?</summary>
                <p>Yes. We are based in Ghana and can discuss suitable projects with clients elsewhere. The brief, communication plan, delivery requirements and any applicable third-party costs will be agreed before work begins.</p>
              </details>
            </div>
            <div className="faq__closing">
              <p>Still have a question?</p>
              <a className="btn btn--outline" href="#contact">Talk to the studio <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        {/* Trust & working process */}
        <section className="section trust" id="how-we-work" aria-labelledby="trust-title">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="section-label">07 / The way we work</p>
                <h2 id="trust-title">Good work starts <span className="accent-text">with clarity.</span></h2>
              </div>
              <p className="section-heading__note">
                A considered process makes creative work easier to understand, plan and move forward.
                Here is what you can expect when you work with our studio.
              </p>
            </div>

            <div className="trust__principles">
              <article className="trust-card">
                <span className="trust-card__number">01</span>
                <h3>Scope you can understand</h3>
                <p>We define the deliverables, project boundaries and timeline with you before production begins. Additional work is discussed and quoted separately.</p>
              </article>
              <article className="trust-card">
                <span className="trust-card__number">02</span>
                <h3>Transparent investment</h3>
                <p>Package prices are published in Ghana cedis, with staged payments and third-party costs explained before you commit.</p>
              </article>
              <article className="trust-card">
                <span className="trust-card__number">03</span>
                <h3>Clear feedback points</h3>
                <p>Each package sets out its included revision rounds, so feedback and changes have an agreed place in the process.</p>
              </article>
              <article className="trust-card">
                <span className="trust-card__number">04</span>
                <h3>Honest work, clear handover</h3>
                <p>Our portfolio identifies self-initiated studies as concepts. Project files and final deliverables are handed over according to the agreed scope and payment terms.</p>
              </article>
            </div>

            <div className="trust__process">
              <div className="trust__process-heading">
                <p className="section-label">FROM FIRST MESSAGE TO HANDOVER</p>
                <h3>A straightforward four-step process.</h3>
              </div>
              <ol className="trust__steps">
                <li><span>01</span><div><h4>Listen &amp; understand</h4><p>We learn about your goals, audience, requirements, budget and timing.</p></div></li>
                <li><span>02</span><div><h4>Agree the plan</h4><p>We confirm the deliverables, quote, milestones and working schedule.</p></div></li>
                <li><span>03</span><div><h4>Create &amp; refine</h4><p>We develop the work and gather feedback at the agreed review points.</p></div></li>
                <li><span>04</span><div><h4>Deliver &amp; hand over</h4><p>We complete the agreed final files, access and handover after the project terms are met.</p></div></li>
              </ol>
            </div>

            <div className="trust__note">
              <p><strong>Prefer to know the details first?</strong> Review the packages, payment terms and FAQs before sending an enquiry.</p>
              <div><a href="#pricing">View pricing <span aria-hidden="true">↗</span></a><a href="#faq">Read FAQs <span aria-hidden="true">↗</span></a></div>
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
              <p className="section-label">08 / Contact</p>
              <h2 id="contact-title">
                Let&apos;s connect
                <br />
                <span className="accent-text">the threads.</span>
              </h2>
              <p>
                Have a project that lives at the intersection of design,
                technology, and sound? Tell us what you&apos;re building.
                Share your goals, budget, and ideal timeline so we can make
                our first conversation count.
              </p>
              <ul className="contact__steps" aria-label="What happens next">
                <li><span>01</span> Tell us about your project</li>
                <li><span>02</span> We review your requirements</li>
                <li><span>03</span> We follow up to discuss next steps</li>
              </ul>
              <div className="contact__channels">
                <a
                  className="contact__whatsapp"
                  href="https://wa.me/233551624160?text=Hello%20Triple%20Thread%20Agency%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Triple Thread Agency on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6-3.5-8.3ZM12.2 21.6h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.7 4.8Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6s1.2 3 1.4 3.2c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.8.6.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3Z"/>
                  </svg>
                  <span>Chat with us on WhatsApp</span>
                  <span className="contact__whatsapp-arrow" aria-hidden="true">↗</span>
                </a>
                <a className="contact__email" href="mailto:triplethreadagency@gmail.com">
                  Prefer email? Contact the studio <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <div className="site-footer__lockup">
                <BrandMark className="site-footer__mark" />
                <p className="site-footer__wordmark">
                Triple Thread <span>Agency</span>
                </p>
              </div>
              <p className="site-footer__tagline">
                Three disciplines. One creative vision.
              </p>
            </div>

            <div className="site-footer__links">
              <div>
                <h2>Explore</h2>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#work">Work</a>
                <a href="#music-sound">Music &amp; Sound</a>
                <a href="#faq">FAQs</a>
                <a href="#how-we-work">How we work</a>
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
