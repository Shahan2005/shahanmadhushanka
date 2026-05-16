import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight, Cloud, Container, GitBranch, Github, Mail, MapPin,
  Server, Sparkles, Terminal, Workflow, Zap, Cpu, Layers,
  MessageCircle, Instagram, Linkedin, BookOpen, MessagesSquare,
  AtSign, GraduationCap, Music2, Phone, Heart, Palette, Check,
  Rocket, Target, Code2, Package, Shield, Database, Network, Wrench,
} from "lucide-react";
import shahanPhoto from "@/assets/shahan.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const THEMES = [
  { id: "dark", label: "Dark", swatch: "#0a0a1a" },
  { id: "light", label: "White", swatch: "#fafafa" },
  { id: "blue", label: "Blue", swatch: "#3b82f6" },
  { id: "pink", label: "Pink", swatch: "#ec4899" },
  { id: "purple", label: "Purple", swatch: "#a855f7" },
  { id: "green", label: "Green", swatch: "#22c55e" },
  { id: "red", label: "Red", swatch: "#ef4444" },
  { id: "yellow", label: "Yellow", swatch: "#facc15" },
] as const;

function useTheme() {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark";
    setTheme(saved);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (theme === "dark") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme] as const;
}

function ThemePicker() {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 text-xs font-mono backdrop-blur-xl transition-colors hover:bg-secondary"
        aria-label="Choose theme"
      >
        <Palette className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Theme</span>
        <span className="h-3 w-3 rounded-full border border-border" style={{ background: THEMES.find(t => t.id === theme)?.swatch }} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-border/60 bg-card/95 p-2 backdrop-blur-xl shadow-xl z-50">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setOpen(false); }}
              className="flex w-full items-center gap-2 rounded-xl px-2 py-1.5 text-xs transition-colors hover:bg-secondary"
            >
              <span className="h-4 w-4 rounded-full border border-border" style={{ background: t.swatch }} />
              <span className="flex-1 text-left">{t.label}</span>
              {theme === t.id && <Check className="h-3.5 w-3.5 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const skills = [
  { name: "Docker", level: "Learning", icon: Container, color: "#2496ED" },
  { name: "AWS", level: "Learning", icon: Cloud, color: "#FF9900" },
  { name: "Linux", level: "Beginner", icon: Terminal, color: "#FCC624" },
  { name: "Git / GitHub", level: "Intermediate", icon: GitBranch, color: "#F05032" },
  { name: "CI/CD", level: "Exploring", icon: Workflow, color: "#22D3EE" },
  { name: "Python", level: "Intermediate", icon: Cpu, color: "#3776AB" },
  { name: "Kubernetes", level: "Exploring", icon: Layers, color: "#326CE5" },
  { name: "Bash", level: "Learning", icon: Terminal, color: "#4EAA25" },
];

const projects = [
  { name: "Dockerized Portfolio", status: "Completed", desc: "Containerized static site with multi-stage builds and Nginx.", tags: ["Docker", "Nginx", "CI"], accent: "#22D3EE" },
  { name: "AWS Static Hosting", status: "In Progress", desc: "S3 + CloudFront + Route 53 deployment with Terraform.", tags: ["AWS", "Terraform"], accent: "#FF9900" },
  { name: "GitHub Actions Pipeline", status: "Completed", desc: "Automated test, build and deploy workflow.", tags: ["CI/CD", "GitHub"], accent: "#A78BFA" },
  { name: "Linux Home Lab", status: "Ongoing", desc: "Self-hosted services on Ubuntu with monitoring stack.", tags: ["Linux", "Grafana"], accent: "#4ADE80" },
];

const roadmap = [
  { title: "Linux & Networking", time: "3 months", desc: "Strong foundations in shell, systemd, and networking.", color: "#FCC624" },
  { title: "Docker & Kubernetes", time: "5 months", desc: "Container orchestration and deployment patterns.", color: "#2496ED" },
  { title: "AWS Solutions Architect", time: "6 months", desc: "Core AWS services and architecture best practices.", color: "#FF9900" },
  { title: "Terraform & IaC", time: "4 months", desc: "Provision and version cloud infrastructure as code.", color: "#7C3AED" },
  { title: "CI/CD Pipelines", time: "3 months", desc: "GitHub Actions, Jenkins, and GitOps workflows.", color: "#22D3EE" },
  { title: "Observability", time: "4 months", desc: "Prometheus, Grafana, logging and tracing.", color: "#F43F5E" },
];

// Brand-coloured socials
const socials = [
  { name: "Instagram", handle: "@alfa_madhu", url: "https://instagram.com/alfa_madhu", icon: Instagram, color: "#E1306C" },
  { name: "Threads", handle: "@alfa_madhu", url: "https://www.threads.net/@alfa_madhu", icon: AtSign, color: "#FFFFFF" },
  { name: "LinkedIn", handle: "in/shahan2005", url: "https://www.linkedin.com/in/shahan2005", icon: Linkedin, color: "#0A66C2" },
  { name: "Medium", handle: "@shahanmadushanka246", url: "https://medium.com/@shahanmadushanka246/about", icon: BookOpen, color: "#00AB6C" },
  { name: "Reddit", handle: "u/Ok_Selection_518", url: "https://www.reddit.com/user/Ok_Selection_518/", icon: MessagesSquare, color: "#FF4500" },
  { name: "GitHub", handle: "@Shahan2005", url: "https://github.com/Shahan2005", icon: Github, color: "#FFFFFF" },
  { name: "WhatsApp", handle: "+94 74 075 9769", url: "https://wa.me/94740759769", icon: MessageCircle, color: "#25D366" },
  { name: "Email", handle: "shahanmadushanka246@gmail.com", url: "mailto:shahanmadushanka246@gmail.com", icon: Mail, color: "#EA4335" },
];

// Top 10 viral tracks — embedded & playable via Spotify
const topTracks = [
  { id: "0V3wPSX9ygBnCm8psDIegu", title: "Anti-Hero", artist: "Taylor Swift" },
  { id: "1Qrg8KqiBpW07V7PNxwwwL", title: "Cruel Summer", artist: "Taylor Swift" },
  { id: "4Dvkj6JhhA12EX05fT7y2e", title: "As It Was", artist: "Harry Styles" },
  { id: "5HCyWlXZPP0y6Gqq8TgA20", title: "Stay", artist: "The Kid LAROI, Justin Bieber" },
  { id: "7qiZfU4dY1lWllzX7mPBI3", title: "Shape of You", artist: "Ed Sheeran" },
  { id: "0e7ipj03S05BNilyu5bRzt", title: "rockstar", artist: "Post Malone" },
  { id: "1zi7xx7UVEFkmKfv06H8x0", title: "One Dance", artist: "Drake" },
  { id: "7KXjTSCq5nL1LoYtL7XAwS", title: "HUMBLE.", artist: "Kendrick Lamar" },
  { id: "2Fxmhks0bxGSBdJ92vM42m", title: "bad guy", artist: "Billie Eilish" },
  { id: "6habFhsOp2NvshLv26DqMb", title: "Despacito", artist: "Luis Fonsi" },
];

function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Music", href: "#music" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto flex items-center gap-2">
      <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-2 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono">
          <span className="dot" /> alfa-madhu.dev
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
      <ThemePicker />
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

      {/* Thoran rainbow strip */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-[linear-gradient(90deg,#22C55E,#EC4899,#3B82F6,#EF4444,#FACC15,#A16207,#FFFFFF,#000000)]" />

      {/* HERO BENTO */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento bento-glow md:col-span-4 flex flex-col justify-between min-h-[420px]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip"><span className="dot" /> Available for opportunities</span>
            <span className="chip"><MapPin className="h-3 w-3" /> Sri Lanka</span>
            <span className="chip"><GraduationCap className="h-3 w-3" /> Uni of Moratuwa</span>
          </div>
          <div>
            <div className="font-mono text-xs text-muted-foreground">a.k.a. <span className="text-gradient">Alfa Madhu</span></div>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
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

        {/* Photo card */}
        <div className="bento md:col-span-2 relative overflow-hidden p-0 min-h-[420px]">
          <img src={shahanPhoto} alt="Shahan Madhushanka" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="chip"><span className="dot" /> alfa_madhu</div>
            <div className="mt-2 font-display text-xl font-bold">Hello 👋</div>
            <div className="font-mono text-xs text-muted-foreground">DevOps · Cloud · Learner</div>
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
            <p className="mt-3 text-sm text-muted-foreground">CI/CD, containers, and AWS.</p>
          </div>
        </div>

        <div className="bento md:col-span-2 grid grid-cols-2 gap-3">
          <Stat value="6+" label="Tools" />
          <Stat value="4+" label="Projects" />
          <Stat value="500+" label="Hours" />
          <Stat value="200+" label="Commits" />
        </div>

        <div className="bento md:col-span-2" style={{ borderColor: "#22C55E66" }}>
          <span className="chip" style={{ color: "#22C55E", borderColor: "#22C55E55" }}><GraduationCap className="h-3 w-3" /> Education</span>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">O/L</span><span className="font-mono">7A · 2B</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">A/L Stream</span><span className="font-mono">Commerce</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">A/L</span><span className="font-mono">3A</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Uni</span><span className="font-mono">Moratuwa</span></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento md:col-span-4">
          <span className="chip" style={{ color: "#EC4899", borderColor: "#EC489955" }}>01 — About</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Engineering reliability, one <span className="text-gradient">pipeline</span> at a time.
          </h2>
          <p className="mt-4 text-muted-foreground">
            I'm <span className="text-foreground">Shahan Madhushanka</span> — friends call me <span className="text-foreground">Alfa Madhu</span>.
            An undergraduate at the University of Moratuwa, deep into self-study on the DevOps & Cloud track.
            What started as curiosity about how systems run has turned into a real fascination with automation,
            infrastructure-as-code, and the platforms that keep modern software alive.
          </p>
          <p className="mt-3 text-muted-foreground">
            I learn by building — spinning up containers, breaking things in my home lab, and shipping pipelines
            that take code from commit to cloud.
          </p>
        </div>
        <div className="bento md:col-span-2" style={{ borderColor: "#3B82F666" }}>
          <span className="chip" style={{ color: "#3B82F6", borderColor: "#3B82F655" }}><Zap className="h-3 w-3" /> Now</span>
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
        <div className="mb-4">
          <span className="chip" style={{ color: "#FACC15", borderColor: "#FACC1555" }}>02 — Stack</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Tools of the trade</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ name, level, icon: Icon, color }) => (
            <div key={name} className="bento group" style={{ ['--tile' as string]: color }}>
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 transition-transform group-hover:scale-110" style={{ color }} />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{level}</span>
              </div>
              <div className="mt-6 font-display text-lg font-semibold">{name}</div>
              <div className="mt-2 h-1 w-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-5">
        <div className="mb-4">
          <span className="chip" style={{ color: "#EF4444", borderColor: "#EF444455" }}>03 — Work</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Selected projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="bento group flex flex-col" style={{ borderColor: `${p.accent}55` }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs" style={{ color: p.accent }}>{p.status}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.name}</h3>
                </div>
                <div className="rounded-full border border-border bg-secondary/60 p-2 transition-colors" style={{ color: p.accent }}>
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
          <span className="chip" style={{ color: "#A16207", borderColor: "#A1620755" }}>04 — Roadmap</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Learning trajectory</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {roadmap.map((r, i) => (
            <div key={r.title} className="bento" style={{ borderColor: `${r.color}55` }}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: r.color }}>0{i + 1}</span>
                <span className="chip" style={{ color: r.color, borderColor: `${r.color}55` }}>{r.time}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC — Top 10 viral on Spotify, playable */}
      <section id="music" className="mt-5">
        <div className="mb-4 flex items-end justify-between flex-wrap gap-3">
          <div>
            <span className="chip" style={{ color: "#1DB954", borderColor: "#1DB95455" }}><Music2 className="h-3 w-3" /> 05 — Music</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Top 10 viral on Spotify</h2>
            <p className="mt-2 text-sm text-muted-foreground">Hit play on any track — full previews powered by Spotify.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {topTracks.map((t, i) => (
            <div key={t.id} className="bento p-3" style={{ borderColor: "#1DB95444" }}>
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="font-mono text-xs text-muted-foreground">#{(i + 1).toString().padStart(2, "0")} · {t.title}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{t.artist}</span>
              </div>
              <iframe
                title={t.title}
                src={`https://open.spotify.com/embed/track/${t.id}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                style={{ border: 0, borderRadius: 12 }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE GOAL + CLOUD ENGINEER ROADMAP */}
      <section id="future" className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento bento-glow md:col-span-6">
          <span className="chip" style={{ color: "#EC4899", borderColor: "#EC489955" }}><Target className="h-3 w-3" /> Future goal</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Becoming a <span className="text-gradient">Cloud Engineer</span>.
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            My long-term mission is to become a recognized <span className="text-foreground">DevOps & Cloud Engineer</span> —
            architecting resilient, scalable platforms on AWS, automating everything with Terraform and Kubernetes,
            contributing to open source, mentoring young learners in Sri Lanka, and one day launching my own
            cloud-native product. Every commit, container, and pipeline is a step in that direction.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Rocket, label: "AWS Certified" },
              { icon: Cloud, label: "Cloud Architect" },
              { icon: Shield, label: "DevSecOps" },
              { icon: Heart, label: "Mentor & OSS" },
            ].map(({ icon: Ic, label }) => (
              <div key={label} className="rounded-2xl border border-border/60 bg-secondary/40 p-3 flex items-center gap-2">
                <Ic className="h-4 w-4 text-primary" />
                <span className="text-xs font-mono">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed roadmap */}
        <div className="md:col-span-6">
          <div className="mb-4">
            <span className="chip" style={{ color: "#22D3EE", borderColor: "#22D3EE55" }}><Workflow className="h-3 w-3" /> 07 — Roadmap</span>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">How to become a Cloud Engineer</h3>
            <p className="mt-2 text-sm text-muted-foreground">An 8-stage path I'm walking — from fundamentals to production-grade cloud platforms.</p>
          </div>
          <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { n: "01", icon: Terminal, title: "Computer Science & Linux fundamentals", desc: "OS basics, shell scripting, file systems, processes, systemd, package managers.", color: "#FCC624" },
              { n: "02", icon: Network, title: "Networking & Protocols", desc: "TCP/IP, DNS, HTTP(S), load balancing, VPN, firewalls, OSI model.", color: "#3B82F6" },
              { n: "03", icon: Code2, title: "Programming & Scripting", desc: "Python, Bash, Go basics — automating tasks and writing tooling.", color: "#22C55E" },
              { n: "04", icon: GitBranch, title: "Git & Source Control", desc: "Branching strategies, pull requests, GitHub workflows, GitOps mindset.", color: "#F05032" },
              { n: "05", icon: Container, title: "Containers & Orchestration", desc: "Docker, container registries, Kubernetes, Helm, service meshes.", color: "#2496ED" },
              { n: "06", icon: Cloud, title: "Cloud Provider Mastery (AWS)", desc: "EC2, S3, IAM, VPC, RDS, Lambda, CloudFront — Solutions Architect Associate.", color: "#FF9900" },
              { n: "07", icon: Package, title: "Infrastructure as Code", desc: "Terraform, CloudFormation, Pulumi — version-controlled infrastructure.", color: "#7C3AED" },
              { n: "08", icon: Workflow, title: "CI/CD & Observability", desc: "GitHub Actions, Jenkins, ArgoCD, Prometheus, Grafana, ELK, distributed tracing.", color: "#F43F5E" },
            ].map(({ n, icon: Ic, title, desc, color }) => (
              <li key={n} className="bento group" style={{ borderColor: `${color}55` }}>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border p-2.5" style={{ borderColor: `${color}66`, background: `${color}15`, color }}>
                    <Ic className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs" style={{ color }}>{n}</span>
                    </div>
                    <h4 className="mt-1 font-display text-base font-semibold">{title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        <div className="bento bento-glow md:col-span-3">
          <span className="chip">06 — Contact</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Let's build something <span className="text-gradient">scalable</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to collaboration, mentorship, and conversations about cloud-native engineering.
            DM me on any platform — I read everything.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:shahanmadushanka246@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--glow-primary)]">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a href="https://wa.me/94740759769" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium" style={{ borderColor: "#25D36655", color: "#25D366" }}>
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socials.map(({ name, handle, url, icon: Icon, color }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer"
              className="bento group flex items-center gap-3"
              style={{ borderColor: `${color}44` }}
            >
              <div className="rounded-xl border p-2.5 transition-transform group-hover:scale-110"
                style={{ borderColor: `${color}66`, background: `${color}15`, color }}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm font-semibold">{name}</div>
                <div className="truncate font-mono text-[11px] text-muted-foreground">{handle}</div>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:rotate-45" style={{ color }} />
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Server className="h-3.5 w-3.5" /> alfa-madhu.dev — built with care
        </div>
        <div className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Shahan Madhushanka · Alfa Madhu</div>
      </footer>
    </main>
  );
}
