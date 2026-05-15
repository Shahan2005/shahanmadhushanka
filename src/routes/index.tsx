import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight, Cloud, Container, GitBranch, Github, Mail, MapPin,
  Send, Server, Sparkles, Terminal, Workflow, Zap, Cpu, Layers,
  MessageCircle, Youtube, Instagram, Twitter,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  { name: "Docker", level: "Learning", icon: Container },
  { name: "AWS", level: "Learning", icon: Cloud },
  { name: "Linux", level: "Beginner", icon: Terminal },
  { name: "Git / GitHub", level: "Intermediate", icon: GitBranch },
  { name: "CI/CD", level: "Exploring", icon: Workflow },
  { name: "Python", level: "Intermediate", icon: Cpu },
  { name: "Kubernetes", level: "Exploring", icon: Layers },
  { name: "Bash", level: "Learning", icon: Terminal },
];

const projects = [
  { name: "Dockerized Portfolio", status: "Completed", desc: "Containerized static site with multi-stage builds and Nginx.", tags: ["Docker", "Nginx", "CI"] },
  { name: "AWS Static Hosting", status: "In Progress", desc: "S3 + CloudFront + Route 53 deployment with Terraform.", tags: ["AWS", "Terraform"] },
  { name: "GitHub Actions Pipeline", status: "Completed", desc: "Automated test, build and deploy workflow.", tags: ["CI/CD", "GitHub"] },
  { name: "Linux Home Lab", status: "Ongoing", desc: "Self-hosted services on Ubuntu with monitoring stack.", tags: ["Linux", "Grafana"] },
];

const roadmap = [
  { title: "Linux & Networking", time: "3 months", desc: "Strong foundations in shell, systemd, and networking." },
  { title: "Docker & Kubernetes", time: "5 months", desc: "Container orchestration and deployment patterns." },
  { title: "AWS Solutions Architect", time: "6 months", desc: "Core AWS services and architecture best practices." },
  { title: "Terraform & IaC", time: "4 months", desc: "Provision and version cloud infrastructure as code." },
  { title: "CI/CD Pipelines", time: "3 months", desc: "GitHub Actions, Jenkins, and GitOps workflows." },
  { title: "Observability", time: "4 months", desc: "Prometheus, Grafana, logging and tracing." },
];

const socials = [
  { name: "GitHub", handle: "@Shahan2005", url: "https://github.com/Shahan2005", icon: Github },
  { name: "Email", handle: "shahanipalawaththage@gmail.com", url: "mailto:shahanipalawaththage@gmail.com", icon: Mail },
  { name: "WhatsApp", handle: "+94 72 454 3240", url: "https://wa.me/94724543240", icon: MessageCircle },
  { name: "Telegram", handle: "@Suffy_Madhu", url: "https://t.me/Suffy_Madhu", icon: Send },
  { name: "YouTube", handle: "Channel", url: "#", icon: Youtube },
  { name: "Instagram", handle: "Profile", url: "#", icon: Instagram },
  { name: "X / Twitter", handle: "Profile", url: "#", icon: Twitter },
];

function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-2 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono">
          <span className="dot" /> shahan.dev
        </a>
        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4">
      <div className="font-display text-2xl font-bold text-gradient">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Index() {
  return (
    <main id="top" className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <Nav />

      {/* HERO BENTO */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento bento-glow md:col-span-4 md:row-span-2 flex flex-col justify-between min-h-[420px]">
          <div className="flex items-center gap-2">
            <span className="chip"><span className="dot" /> Available for opportunities</span>
            <span className="chip"><MapPin className="h-3 w-3" /> Sri Lanka</span>
          </div>
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Shahan <br />
              <span className="text-gradient">Madhushanka.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Undergraduate at the <span className="text-foreground">University of Moratuwa</span>, self-studying
              <span className="text-foreground"> DevOps</span> and <span className="text-foreground">Cloud Computing</span>.
              I build, automate, and ship reliable infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--glow-primary)]">
                Explore work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <div className="bento md:col-span-2 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground">~/focus</span>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="font-display text-3xl font-bold">DevOps</div>
            <div className="text-gradient font-display text-3xl font-bold">& Cloud</div>
            <p className="mt-3 text-sm text-muted-foreground">Currently specializing in CI/CD, containers, and AWS.</p>
          </div>
        </div>

        <div className="bento md:col-span-2 grid grid-cols-2 gap-3">
          <Stat value="6+" label="Tools learning" />
          <Stat value="4+" label="Projects" />
          <Stat value="500+" label="Hours coding" />
          <Stat value="200+" label="Commits" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento md:col-span-4">
          <span className="chip">01 — About</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Engineering reliability, one <span className="text-gradient">pipeline</span> at a time.
          </h2>
          <p className="mt-4 text-muted-foreground">
            I'm an undergraduate at the University of Moratuwa, deep into self-study on the DevOps and Cloud track.
            What started as curiosity about how systems run has turned into a real fascination with automation,
            infrastructure-as-code, and the platforms that keep modern software alive.
          </p>
          <p className="mt-3 text-muted-foreground">
            I learn by building — spinning up containers, breaking things in my home lab, and shipping pipelines
            that take code from commit to cloud.
          </p>
        </div>
        <div className="bento md:col-span-2">
          <span className="chip"><Zap className="h-3 w-3" /> Now</span>
          <ul className="mt-4 space-y-3 text-sm">
            {["Docker deep-dive", "AWS fundamentals", "GitHub Actions", "Linux mastery"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="dot" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-5">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <span className="chip">02 — Stack</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Tools of the trade</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ name, level, icon: Icon }) => (
            <div key={name} className="bento group">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{level}</span>
              </div>
              <div className="mt-6 font-display text-lg font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-5">
        <div className="mb-4">
          <span className="chip">03 — Work</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Selected projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="bento group flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs text-muted-foreground">{p.status}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.name}</h3>
                </div>
                <div className="rounded-full border border-border bg-secondary/60 p-2 transition-colors group-hover:border-primary/60 group-hover:text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (<span key={t} className="chip">{t}</span>))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mt-5">
        <div className="mb-4">
          <span className="chip">04 — Roadmap</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Learning trajectory</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {roadmap.map((r, i) => (
            <div key={r.title} className="bento">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span className="chip">{r.time}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONNECT / CONTACT */}
      <section id="contact" className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento bento-glow md:col-span-3">
          <span className="chip">05 — Contact</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Let's build something <span className="text-gradient">scalable</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to collaboration, mentorship, and conversations about cloud-native engineering.
            Drop a line — I read everything.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:shahanipalawaththage@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--glow-primary)]">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a href="https://github.com/Shahan2005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium hover:bg-secondary">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 gap-4">
          {socials.map(({ name, handle, url, icon: Icon }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="bento group flex items-center gap-3">
              <div className="rounded-xl border border-border bg-secondary/60 p-2.5 transition-colors group-hover:border-primary/60 group-hover:text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm font-semibold">{name}</div>
                <div className="truncate font-mono text-[11px] text-muted-foreground">{handle}</div>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Server className="h-3.5 w-3.5" /> shahan.dev — built with care
        </div>
        <div className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Shahan Madhushanka</div>
      </footer>
    </main>
  );
}
