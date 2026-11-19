import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description:
    "Web development portfolio of Isaac Ghartey — self-taught frontend developer working with React, Next.js, TypeScript and modern web technologies.",
  alternates: { canonical: "/developer" },
  openGraph: {
    title: "Isaac Ghartey | Web Developer",
    description:
      "Selected web development projects, technical skills and learning journey.",
    url: "/developer",
    type: "profile",
  },
};

const projects = [
  {
    number: "01",
    name: "Triple Thread Agency",
    status: "Active project",
    description:
      "A creative agency website bringing together brand identity, digital services and music production. Built with a responsive Next.js app, reusable React components and a server-side enquiry workflow.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    focus: "Frontend development · Responsive UI · Enquiry workflow",
    href: "https://github.com/Ikeys-Studio/My-portfolio",
    linkLabel: "View source repository",
  },
  {
    number: "02",
    name: "Kofi Grooves",
    status: "Personal project",
    description:
      "A portfolio and studio website project using PHP and MySQL, with a database-backed admin area for managing projects, messages and visitor records.",
    stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    focus: "Server-side forms · Database integration · Admin tools",
    href: "https://github.com/Ikeys-Studio",
    linkLabel: "Explore GitHub profile",
  },
  {
    number: "03",
    name: "NexusVPN",
    status: "In development",
    description:
      "A desktop VPN application concept being developed with Flutter. The project explores a multi-screen interface for connection status, logs and settings.",
    stack: ["Flutter", "Dart"],
    focus: "Desktop UI · Application structure · Product thinking",
    href: "https://github.com/Ikeys-Studio",
    linkLabel: "Explore GitHub profile",
  },
];

const skills = [
  ["Frontend", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  ["Styling & UI", "Tailwind CSS", "Responsive design", "UI/UX fundamentals"],
  ["Backend foundations", "PHP", "MySQL", "API routes", "Form validation"],
  ["Tools & workflow", "Git", "GitHub", "VS Code", "Vercel", "npm"],
];

export default function DeveloperPortfolioPage() {
  return (
    <main id="main" className="min-h-screen bg-[#101110] text-[#f2f4ef]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101110]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="font-semibold tracking-tight">
            <span className="text-[#b8f36b]">ISAAC</span> GHARTEY
          </a>
          <nav aria-label="Developer portfolio navigation" className="flex items-center gap-5 text-sm text-white/65">
            <a className="transition hover:text-[#b8f36b]" href="#projects">Projects</a>
            <a className="transition hover:text-[#b8f36b]" href="#skills">Skills</a>
            <a className="transition hover:text-[#b8f36b]" href="#about">About</a>
            <a className="rounded-full bg-[#b8f36b] px-4 py-2 font-semibold text-[#101810] transition hover:bg-[#ccfa8c]" href="mailto:triplethreadagency@gmail.com">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(242,244,239,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(242,244,239,.045) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/50"><span className="h-2 w-2 rounded-full bg-[#b8f36b]" /> Web developer · Ghana</p>
            <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-.055em] sm:text-7xl">I build thoughtful <span className="text-[#b8f36b]">digital experiences.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">I’m Isaac Ghartey, a self-taught web developer focused on frontend development with React, Next.js and TypeScript. I enjoy turning ideas into clear, responsive and useful interfaces.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-[#b8f36b] px-6 py-3 text-sm font-semibold text-[#101810] transition hover:bg-[#ccfa8c]">Explore my projects <span aria-hidden="true">↘</span></a>
              <a href="https://github.com/Ikeys-Studio" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-[#b8f36b] hover:text-[#b8f36b]">GitHub profile ↗</a>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/[.035] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#b8f36b]">Current focus</p>
            <p className="mt-5 text-2xl font-medium leading-snug">Frontend development<br />& modern web applications</p>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-white/60">
              <div className="flex justify-between gap-4"><span>Based in</span><span className="text-white">Ghana</span></div>
              <div className="flex justify-between gap-4"><span>Learning path</span><span className="text-white">Self-taught</span></div>
              <div className="flex justify-between gap-4"><span>Open to</span><span className="text-right text-white">Remote roles & freelance</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-[#b8f36b]">Selected work</p><h2 className="text-4xl font-medium tracking-[-.045em] sm:text-5xl">Projects in progress.</h2></div>
          <p className="max-w-md text-sm leading-7 text-white/55">A selection of self-initiated projects that demonstrate what I’m learning and building. Project status is stated clearly.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-[#b8f36b]/40 sm:p-7">
              <div className="flex items-center justify-between gap-3"><span className="text-xs tracking-[.16em] text-white/35">{project.number} / PROJECT</span><span className="rounded-full border border-[#b8f36b]/25 px-3 py-1 text-[10px] uppercase tracking-wider text-[#b8f36b]">{project.status}</span></div>
              <h3 className="mt-10 text-2xl font-medium tracking-tight">{project.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-white/60">{project.description}</p>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-white/45">{project.focus}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-md bg-white/[.06] px-2.5 py-1.5 text-[11px] text-white/65">{item}</span>)}</div>
              <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b8f36b] hover:underline">{project.linkLabel} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="mt-7 text-xs leading-6 text-white/40">These are personal learning and studio projects, not presented as paid client engagements.</p>
      </section>

      <section id="skills" className="scroll-mt-24 border-y border-white/10 bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-[#b8f36b]">Technical toolkit</p>
          <h2 className="mb-12 text-4xl font-medium tracking-[-.045em] sm:text-5xl">Tools I work with.</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([category, ...items]) => <div key={category} className="border-t border-white/15 pt-5"><h3 className="mb-5 text-lg font-medium">{category}</h3><ul className="space-y-3">{items.map((item) => <li key={item} className="text-sm text-white/55">{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-[#b8f36b]">A little about me</p><h2 className="text-4xl font-medium tracking-[-.045em] sm:text-5xl">Curious by nature. Building by practice.</h2></div>
        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>I’m developing my skills through hands-on projects, documentation and continuous practice. My background in General Science at Winneba Senior High School, completed in 2025, taught me to approach problems with curiosity and structured thinking.</p>
          <p>Alongside web development, I have an interest in visual design and digital products. That perspective helps me think about both how an interface works and how clearly it communicates.</p>
          <div className="rounded-xl border-l-2 border-[#b8f36b] bg-[#b8f36b]/[.06] p-5 text-sm leading-7 text-white/75">I’m looking for opportunities to contribute, learn from experienced teams and take on meaningful freelance website projects.</div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Isaac Ghartey. Built with Next.js.</p>
          <div className="flex flex-wrap gap-5"><a className="hover:text-[#b8f36b]" href="/">Triple Thread Agency</a><a className="hover:text-[#b8f36b]" href="https://github.com/Ikeys-Studio" target="_blank" rel="noreferrer">GitHub ↗</a><a className="hover:text-[#b8f36b]" href="mailto:triplethreadagency@gmail.com">Email</a></div>
        </div>
      </footer>
    </main>
  );
}
