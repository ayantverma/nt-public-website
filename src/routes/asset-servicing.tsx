import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Search,
  ShieldCheck,
  Globe,
  Cpu,
  Landmark,
  Vault,
  Layers,
  LineChart,
  Database,
  Users,
  Building2,
  Briefcase,
  Cog,
  Rocket,
  Compass,
  ClipboardCheck,
  Activity,
  BookOpen,
  FileText,
  Play,
  ChevronDown,
  Check,
} from "lucide-react";

import ntLogoMark from "@/assets/nt-logo.png";

export const Route = createFileRoute("/asset-servicing")({
  head: () => ({
    meta: [
      { title: "Asset Servicing — Northern Trust" },
      {
        name: "description",
        content:
          "Institutional-grade custody, fund administration, investment operations, and data analytics — engineered for scale, resilience, and clarity. Trusted by the world's leading asset owners and managers.",
      },
      { property: "og:title", content: "Asset Servicing — Northern Trust" },
      {
        property: "og:description",
        content:
          "Custody, fund services, investment operations, and data — built for institutional scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssetServicingPage,
});

function AssetServicingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-ivory)",
        color: "var(--color-charcoal)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md"
        style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
      >
        Skip to content
      </a>
      <TopBar />
      <main id="main">
        <Hero />
        <WhyNT />
        <Solutions />
        <WhoWeServe />
        <Technology />
        <Process />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300 border-b"
      style={{
        background: scrolled ? "rgba(247,243,234,0.92)" : "var(--color-ivory)",
        backdropFilter: scrolled ? "blur(12px)" : undefined,
        borderColor: "rgba(20,82,58,0.12)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between gap-8 h-[88px]">
        <Link to="/" className="flex items-center gap-4 shrink-0" aria-label="Northern Trust — Home">
          <img src={ntLogoMark} alt="Northern Trust" className="h-14 w-auto shrink-0 select-none" draggable={false} />
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] tracking-wide" style={{ color: "var(--color-navy)" }}>
          <Link to="/wealth-management" className="relative py-2 group whitespace-nowrap">
            Wealth Management
            <span className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: "var(--color-cta)" }} />
          </Link>
          <Link to="/asset-servicing" className="relative py-2 whitespace-nowrap" aria-current="page" style={{ fontWeight: 600 }}>
            Asset Servicing
            <span className="absolute left-0 -bottom-0.5 h-px w-full" style={{ background: "var(--color-cta)" }} aria-hidden="true" />
          </Link>
          {["Asset Management", "Insights", "About", "Careers"].map((item) => (
            <a key={item} href="#" className="relative py-2 group whitespace-nowrap">
              {item}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: "var(--color-cta)" }} />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden md:inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border p-2.5" style={{ borderColor: "rgba(20,82,58,0.2)" }} aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <a href="#contact" className="hidden md:inline-flex min-h-11 items-center gap-2.5 px-7 py-3 rounded-full text-[12px] tracking-[0.16em] uppercase font-semibold transition-all hover:opacity-90 whitespace-nowrap" style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}>
            Client Login
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <button className="lg:hidden min-h-11 min-w-11 p-2.5" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden" style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}>
      <div aria-hidden="true" className="absolute inset-0 opacity-70 as-gradient" style={{ background: "radial-gradient(ellipse at 20% 30%, rgba(45,138,105,0.35), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(20,82,58,0.55), transparent 60%), linear-gradient(135deg, #0A2E20 0%, #0A3B28 50%, #0A2E20 100%)" }} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(245,241,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)" }} />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] tracking-[0.3em] uppercase mb-5 flex items-center gap-3" style={{ color: "var(--color-mist)" }}>
              <span className="h-px w-8" style={{ background: "var(--color-mist)" }} aria-hidden="true" />
              Asset Servicing
            </div>
            <h1 id="hero-title" className="tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.0rem, 5.0vw, 5.0rem)", lineHeight: 1.02, fontWeight: 100, letterSpacing: "-0.01em" }}>
              Institutional scale,
              <br />
              <em style={{ fontStyle: "normal", fontWeight: 200, color: "var(--color-mist)" }}>uncompromising precision.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed" style={{ color: "var(--color-ivory)" }}>
              Custody, fund administration, investment operations and data analytics — engineered for the world's most sophisticated asset owners and managers. One partner. Global reach. Enduring trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex min-h-11 items-center gap-3 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:gap-4" style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}>
                Speak with a specialist
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#solutions" className="inline-flex min-h-11 items-center gap-2 text-[14px]" style={{ color: "var(--color-ivory)" }}>
                Explore solutions
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl p-8 backdrop-blur-sm" style={{ background: "rgba(245,241,232,0.06)", border: "1px solid rgba(245,241,232,0.14)" }}>
              <div className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-mist)" }}>By the numbers</div>
              <dl className="space-y-6">
                {[
                  { k: "$16.8T", v: "Assets under custody / administration" },
                  { k: "90+", v: "Countries served" },
                  { k: "135+", v: "Years of fiduciary heritage" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-display)", fontWeight: 200, color: "var(--color-ivory)" }}>{s.k}</dt>
                    <dd className="mt-1 text-[13px]" style={{ color: "var(--color-mist)" }}>{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .as-gradient { animation: asShimmer 18s ease-in-out infinite alternate; }
        }
        @keyframes asShimmer {
          0% { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(-2%, -1%, 0) scale(1.05); }
        }
      `}</style>
    </section>
  );
}

function WhyNT() {
  const items = [
    { icon: <Landmark className="h-5 w-5" aria-hidden="true" />, title: "Fiduciary since 1889", body: "A century-plus of unwavering standards, through every market cycle." },
    { icon: <Globe className="h-5 w-5" aria-hidden="true" />, title: "Truly global footprint", body: "Operating hubs across the Americas, EMEA and APAC — one platform, local expertise." },
    { icon: <Cpu className="h-5 w-5" aria-hidden="true" />, title: "Technology-led", body: "A unified data platform, open APIs and AI-assisted operations — engineered for scale." },
    { icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />, title: "Trusted at scale", body: "Serving more than 20% of the world's largest pension funds and sovereign institutions." },
  ];
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
      <SectionHeader eyebrow="Why Northern Trust" titleId="why-title" title="A partner engineered for institutional demands." lede="Complex mandates deserve a partner with the heritage to steward them and the technology to keep them moving." />
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <article key={it.title} className="rounded-2xl p-8 transition-all hover:translate-y-[-2px]" style={{ background: "#fff", border: "1px solid rgba(20,82,58,0.12)" }}>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full mb-6" style={{ background: "var(--color-ivory-soft)", color: "var(--color-navy)" }}>{it.icon}</div>
            <h3 className="text-[19px] leading-snug mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-deep)" }}>{it.title}</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-stone)" }}>{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

type Solution = { key: string; icon: React.ReactNode; title: string; summary: string; bullets: string[] };

const SOLUTIONS: Solution[] = [
  { key: "custody", icon: <Vault className="h-4 w-4" aria-hidden="true" />, title: "Global Custody", summary: "Safekeeping and settlement across 100+ markets — with the resilience institutions expect and the transparency they demand.", bullets: ["Multi-currency, multi-market safekeeping", "Corporate actions, tax and proxy services", "Real-time settlement visibility and risk controls"] },
  { key: "fund", icon: <Layers className="h-4 w-4" aria-hidden="true" />, title: "Fund Administration", summary: "NAV, accounting and investor services across every fund structure — traditional, alternative and hybrid.", bullets: ["Daily and intra-day NAV production", "Private capital, hedge and hybrid fund support", "Regulatory and financial reporting under all major regimes"] },
  { key: "ioo", icon: <Cog className="h-4 w-4" aria-hidden="true" />, title: "Investment Operations Outsourcing", summary: "Front-to-back middle office operations, tailored to your target operating model.", bullets: ["Trade lifecycle, IBOR and reconciliation", "Performance, attribution and risk analytics", "Change-the-firm programs delivered end-to-end"] },
  { key: "data", icon: <LineChart className="h-4 w-4" aria-hidden="true" />, title: "Data & Analytics", summary: "A unified data platform that turns operational data into decision-grade insight.", bullets: ["Investment data warehouse and lineage", "Configurable dashboards and self-serve reporting", "AI-assisted anomaly detection and insight"] },
  { key: "ta", icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" />, title: "Transfer Agency", summary: "Global shareholder servicing across jurisdictions, distribution channels and fund types.", bullets: ["Investor onboarding, AML/KYC and lifecycle servicing", "Distribution support and fee processing", "Digital investor experiences and portals"] },
  { key: "seclending", icon: <Activity className="h-4 w-4" aria-hidden="true" />, title: "Securities Lending", summary: "A disciplined, transparent lending program designed to enhance returns without compromising risk.", bullets: ["Agency lending across global markets", "Collateral flexibility and indemnification", "Full transparency and program governance"] },
];

function Solutions() {
  const [active, setActive] = useState(0);
  const btnsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const listId = useId();
  const onKey = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % SOLUTIONS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + SOLUTIONS.length) % SOLUTIONS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = SOLUTIONS.length - 1;
    if (next !== null) { e.preventDefault(); setActive(next); btnsRef.current[next]?.focus(); }
  };
  const s = SOLUTIONS[active];
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="py-24 lg:py-32" style={{ background: "var(--color-ivory-soft)" }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeader eyebrow="Solutions" titleId="solutions-title" title="A complete asset servicing platform." lede="Progressive, modular and integrated — from custody through data. Choose what you need today, extend as you grow." />
        <div className="mt-14 hidden md:block">
          <div role="tablist" aria-label="Asset servicing solutions" onKeyDown={onKey} className="flex flex-wrap gap-2 pb-6 border-b" style={{ borderColor: "rgba(20,82,58,0.15)" }}>
            {SOLUTIONS.map((sol, i) => {
              const selected = i === active;
              return (
                <button
                  key={sol.key}
                  ref={(el) => { btnsRef.current[i] = el; }}
                  role="tab"
                  id={`${listId}-tab-${sol.key}`}
                  aria-selected={selected}
                  aria-controls={`${listId}-panel-${sol.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="min-h-11 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] tracking-wide transition-all"
                  style={{
                    background: selected ? "var(--color-navy)" : "transparent",
                    color: selected ? "var(--color-ivory)" : "var(--color-navy-deep)",
                    border: selected ? "1px solid var(--color-navy)" : "1px solid rgba(20,82,58,0.2)",
                    fontWeight: selected ? 600 : 500,
                  }}
                >
                  {sol.icon}
                  {sol.title}
                </button>
              );
            })}
          </div>
          <div role="tabpanel" id={`${listId}-panel-${s.key}`} aria-labelledby={`${listId}-tab-${s.key}`} className="mt-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h3 className="text-[28px] lg:text-[34px] leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-deep)" }}>{s.title}</h3>
              <p className="mt-5 text-[16px] leading-relaxed max-w-2xl" style={{ color: "var(--color-stone)" }}>{s.summary}</p>
              <ul className="mt-8 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full shrink-0" style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }} aria-hidden="true">
                      <Check className="h-3 w-3" />
                    </span>
                    <span style={{ color: "var(--color-charcoal)" }}>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 inline-flex min-h-11 items-center gap-2 text-[13px] tracking-[0.14em] uppercase font-semibold group" style={{ color: "var(--color-navy-deep)" }}>
                Learn more about {s.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl h-full min-h-[280px] p-8 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-deep) 100%)", color: "var(--color-ivory)" }} aria-hidden="true">
                <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-mist)" }}>
                  {String(active + 1).padStart(2, "0")} / {String(SOLUTIONS.length).padStart(2, "0")}
                </div>
                <div className="mt-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full mb-6" style={{ background: "rgba(245,241,232,0.1)", border: "1px solid rgba(245,241,232,0.2)" }}>
                    <span style={{ color: "var(--color-ivory)" }}>{s.icon}</span>
                  </div>
                  <div className="text-[22px] leading-snug" style={{ fontFamily: "var(--font-display)" }}>{s.title}</div>
                  <div className="mt-2 text-[13px]" style={{ color: "var(--color-mist)" }}>Part of the Northern Trust Asset Servicing platform.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:hidden">
          {SOLUTIONS.map((sol, i) => (
            <SolutionAccordion key={sol.key} sol={sol} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionAccordion({ sol, defaultOpen }: { sol: Solution; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const panelId = useId();
  const btnId = useId();
  return (
    <div className="border-b" style={{ borderColor: "rgba(20,82,58,0.15)" }}>
      <button id={btnId} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((v) => !v)} className="w-full min-h-11 flex items-center justify-between gap-4 py-5 text-left">
        <span className="inline-flex items-center gap-3 text-[16px]" style={{ color: "var(--color-navy-deep)" }}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--color-ivory)", color: "var(--color-navy)" }}>{sol.icon}</span>
          {sol.title}
        </span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div id={panelId} role="region" aria-labelledby={btnId} className="pb-6">
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-stone)" }}>{sol.summary}</p>
          <ul className="mt-4 space-y-2">
            {sol.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[14px]">
                <Check className="mt-1 h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-navy)" }} aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function WhoWeServe() {
  const segments = [
    { icon: <Briefcase className="h-5 w-5" aria-hidden="true" />, title: "Asset Managers", body: "Scale your platform without scaling operational risk — from launch to global distribution." },
    { icon: <Users className="h-5 w-5" aria-hidden="true" />, title: "Pension Funds", body: "Fiduciary-grade oversight and reporting to steward multi-decade obligations." },
    { icon: <Landmark className="h-5 w-5" aria-hidden="true" />, title: "Sovereign Institutions", body: "Confidential, resilient servicing across complex mandates and multi-asset portfolios." },
    { icon: <Building2 className="h-5 w-5" aria-hidden="true" />, title: "Insurance & Corporates", body: "Operational efficiency, regulatory clarity and integrated treasury servicing." },
  ];
  return (
    <section aria-labelledby="serve-title" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
      <SectionHeader eyebrow="Who we serve" titleId="serve-title" title="Institutions trust Northern Trust with what matters most." />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((s) => (
          <a key={s.title} href="#contact" className="group relative overflow-hidden rounded-2xl p-8 transition-all hover:translate-y-[-2px]" style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)", minHeight: 260 }}>
            <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 100% 0%, rgba(45,138,105,0.35), transparent 55%)" }} />
            <div className="relative flex h-full flex-col justify-between">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "rgba(245,241,232,0.1)", border: "1px solid rgba(245,241,232,0.2)" }}>{s.icon}</div>
              <div>
                <h3 className="text-[22px] leading-tight" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed" style={{ color: "var(--color-mist)" }}>{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--color-ivory)" }}>
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Technology() {
  const capabilities = [
    { icon: <Database className="h-5 w-5" aria-hidden="true" />, title: "Unified data platform", body: "One canonical investment data model powering every workflow — accounting, risk, performance and reporting." },
    { icon: <Cpu className="h-5 w-5" aria-hidden="true" />, title: "APIs & developer portal", body: "Open, well-documented APIs and event streams that connect Northern Trust into your operating model." },
    { icon: <Rocket className="h-5 w-5" aria-hidden="true" />, title: "AI-assisted operations", body: "Applied AI for exception management, reconciliation and insight — with a human always in the loop." },
  ];
  return (
    <section aria-labelledby="tech-title" className="py-24 lg:py-32" style={{ background: "var(--color-charcoal)", color: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>Technology & innovation</div>
            <h2 id="tech-title" className="text-[38px] lg:text-[52px] leading-[1.05]" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Software-grade operations,
              <br />
              <span style={{ color: "var(--color-mist)" }}>fiduciary-grade trust.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
              Northern Trust's investment operating platform is engineered like a product — unified data, open APIs and continuous delivery, wrapped in institutional governance.
            </p>
            <div className="mt-10 space-y-6">
              {capabilities.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(245,241,232,0.08)", border: "1px solid rgba(245,241,232,0.18)" }}>{c.icon}</div>
                  <div className="min-w-0">
                    <h3 className="text-[17px]" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--color-mist)" }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div role="img" aria-label="Illustration of a Northern Trust investment operations dashboard showing assets, allocation and settlement activity." className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, #0F1B15 0%, #0A2E20 100%)", border: "1px solid rgba(245,241,232,0.12)", aspectRatio: "16 / 11" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(245,241,232,0.08)" }} aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(245,241,232,0.25)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(245,241,232,0.15)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(245,241,232,0.1)" }} />
        <span className="ml-3 text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--color-mist)" }}>nt.io / operations</span>
      </div>
      <div className="grid grid-cols-6 gap-3 p-5" aria-hidden="true">
        <div className="col-span-4 rounded-xl p-5" style={{ background: "rgba(245,241,232,0.05)", border: "1px solid rgba(245,241,232,0.1)" }}>
          <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--color-mist)" }}>Book of record · AUM</div>
          <div className="mt-3 flex items-end gap-3">
            <div className="text-4xl" style={{ fontFamily: "var(--font-display)" }}>$14.62B</div>
            <div className="text-[12px] pb-1.5" style={{ color: "#8FD3B0" }}>+2.14%</div>
          </div>
          <svg viewBox="0 0 300 60" className="mt-4 w-full h-14" role="presentation">
            <defs>
              <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8FD3B0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8FD3B0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 45 L30 40 L60 42 L90 30 L120 34 L150 22 L180 26 L210 14 L240 18 L270 8 L300 12 L300 60 L0 60 Z" fill="url(#spark)" />
            <path d="M0 45 L30 40 L60 42 L90 30 L120 34 L150 22 L180 26 L210 14 L240 18 L270 8 L300 12" fill="none" stroke="#8FD3B0" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="col-span-2 rounded-xl p-5 flex flex-col" style={{ background: "rgba(245,241,232,0.05)", border: "1px solid rgba(245,241,232,0.1)" }}>
          <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--color-mist)" }}>Allocation</div>
          <svg viewBox="0 0 42 42" className="mt-2 w-24 h-24 mx-auto" role="presentation">
            <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="rgba(245,241,232,0.1)" strokeWidth="4" />
            <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="#8FD3B0" strokeWidth="4" strokeDasharray="55 100" strokeDashoffset="25" />
            <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="#F7F3EA" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-30" />
            <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="#4C9F7B" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-55" />
          </svg>
          <div className="mt-2 space-y-1 text-[11px]" style={{ color: "var(--color-mist)" }}>
            <div className="flex items-center gap-2"><span className="h-1.5 w-3 rounded-sm" style={{ background: "#8FD3B0" }} /> Equity 55%</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-3 rounded-sm" style={{ background: "#F7F3EA" }} /> Fixed 25%</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-3 rounded-sm" style={{ background: "#4C9F7B" }} /> Alts 20%</div>
          </div>
        </div>
        <div className="col-span-6 rounded-xl p-5" style={{ background: "rgba(245,241,232,0.05)", border: "1px solid rgba(245,241,232,0.1)" }}>
          <div className="flex items-center justify-between">
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--color-mist)" }}>Settlement queue</div>
            <div className="text-[11px]" style={{ color: "var(--color-mist)" }}>Today · 08:42 UTC</div>
          </div>
          <div className="mt-3">
            {[
              { m: "LSE · GBP", s: "Settled", c: "#8FD3B0" },
              { m: "NYSE · USD", s: "Matched", c: "#F7F3EA" },
              { m: "TSE · JPY", s: "Pending", c: "#E6C36A" },
            ].map((r) => (
              <div key={r.m} className="flex items-center justify-between py-2.5 border-t" style={{ borderColor: "rgba(245,241,232,0.08)" }}>
                <div className="text-[13px]">{r.m}</div>
                <div className="flex items-center gap-2 text-[11px]" style={{ color: "var(--color-mist)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: r.c }} />
                  {r.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  const steps = [
    { icon: <Compass className="h-4 w-4" aria-hidden="true" />, title: "Discover", body: "Understand your operating model, mandates and priorities." },
    { icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" />, title: "Design", body: "Blueprint the target state, service model and controls." },
    { icon: <Rocket className="h-4 w-4" aria-hidden="true" />, title: "Onboard", body: "Migrate with precision — data, workflows and integrations." },
    { icon: <Cog className="h-4 w-4" aria-hidden="true" />, title: "Operate", body: "Deliver day-to-day servicing with proactive governance." },
    { icon: <Activity className="h-4 w-4" aria-hidden="true" />, title: "Optimize", body: "Continuously refine data, insight and outcomes." },
  ];
  return (
    <section aria-labelledby="process-title" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
      <SectionHeader eyebrow="How we support clients" titleId="process-title" title="A partnership designed for the long term." lede="Every engagement follows the same disciplined arc — from discovery through continuous optimization." />
      <ol className="mt-16 relative grid gap-8 md:grid-cols-5">
        <span aria-hidden="true" className="hidden md:block absolute left-0 right-0 top-5 h-px" style={{ background: "rgba(20,82,58,0.18)" }} />
        {steps.map((st, i) => (
          <li key={st.title} className="relative">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full relative z-[1]" style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}>{st.icon}</div>
            <div className="mt-4 text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-stone)" }}>Step {String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-1 text-[18px]" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-deep)" }}>{st.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--color-stone)" }}>{st.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Insights() {
  const items = [
    { tag: "Report", icon: <FileText className="h-4 w-4" aria-hidden="true" />, title: "The next chapter of asset servicing operating models", meta: "12 min read · 2026 Institutional Outlook" },
    { tag: "Article", icon: <BookOpen className="h-4 w-4" aria-hidden="true" />, title: "Data as infrastructure: rebuilding the investment book of record", meta: "8 min read · Data & Analytics" },
    { tag: "Webinar", icon: <Play className="h-4 w-4" aria-hidden="true" />, title: "Applied AI in fund operations — governance in practice", meta: "42 min · On demand" },
  ];
  return (
    <section aria-labelledby="insights-title" className="py-24 lg:py-32" style={{ background: "var(--color-ivory-soft)" }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeader eyebrow="Insights & resources" titleId="insights-title" title="Perspectives shaping institutional operations." compact />
          <a href="#" className="inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase font-semibold group" style={{ color: "var(--color-navy-deep)" }}>
            All insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.title} href="#" className="group rounded-2xl p-8 transition-all hover:translate-y-[-2px] flex flex-col" style={{ background: "#fff", border: "1px solid rgba(20,82,58,0.12)", minHeight: 260 }}>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase" style={{ background: "var(--color-ivory-soft)", color: "var(--color-navy-deep)" }}>
                  {it.icon}
                  {it.tag}
                </span>
              </div>
              <h3 className="mt-6 text-[19px] leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy-deep)" }}>{it.title}</h3>
              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="text-[12px]" style={{ color: "var(--color-stone)" }}>{it.meta}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" style={{ color: "var(--color-navy)" }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="relative overflow-hidden" style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}>
      <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(ellipse at 20% 100%, rgba(45,138,105,0.35), transparent 55%), radial-gradient(ellipse at 90% 20%, rgba(20,82,58,0.6), transparent 55%)" }} />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>Speak with a specialist</div>
            <h2 id="cta-title" className="text-[40px] lg:text-[60px] leading-[1.02]" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Your institution deserves an
              <br />
              <span style={{ color: "var(--color-mist)" }}>asset servicing partner without compromise.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
            <a href="mailto:assetservicing@ntrs.com" className="inline-flex min-h-12 items-center gap-2.5 px-8 py-3.5 rounded-full text-[13px] tracking-[0.14em] uppercase font-semibold transition-all hover:translate-y-[-1px]" style={{ background: "var(--color-ivory)", color: "var(--color-navy-deep)" }}>
              Contact an expert
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#solutions" className="inline-flex min-h-12 items-center gap-2.5 px-8 py-3.5 rounded-full text-[13px] tracking-[0.14em] uppercase font-semibold" style={{ border: "1px solid rgba(245,241,232,0.35)", color: "var(--color-ivory)" }}>
              Explore solutions
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Wealth Management", items: ["Private Wealth", "Trust & Estate", "Family Office", "Wealth Planning", "Banking & Credit"] },
    { title: "Asset Servicing", items: ["Global Custody", "Fund Services", "Investment Operations", "Data & Analytics", "Regulatory"] },
    { title: "Asset Management", items: ["Institutional", "Equity", "Fixed Income", "Multi-Asset", "Sustainable Investing"] },
    { title: "About", items: ["Our Story", "Leadership", "Newsroom", "Careers", "ESG & Impact"] },
  ];
  return (
    <footer style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b" style={{ borderColor: "rgba(245,241,232,0.1)" }}>
          <div className="lg:col-span-4">
            <img src={ntLogoMark} alt="Northern Trust" className="h-14 w-auto shrink-0 mb-6" style={{ filter: "brightness(0) invert(1)" }} draggable={false} />
            <p className="text-[13px] leading-relaxed max-w-sm" style={{ color: "var(--color-mist)" }}>50 South LaSalle Street, Chicago, Illinois 60603. Serving generations of families, institutions, and advisors.</p>
            <a href="mailto:assetservicing@ntrs.com" className="mt-6 inline-flex items-center gap-2 text-[13px]" style={{ color: "var(--color-ivory)" }}>
              Contact us <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>{c.title}</div>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="text-[13px]" style={{ color: "var(--color-mist)" }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px]" style={{ color: "var(--color-mist)" }}>
          <div>© 1889—2026 Northern Trust Corporation. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility · WCAG 2.2 AA</a>
            <a href="#">Regulatory Disclosures</a>
            <a href="#">Global Sites</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, titleId, lede, compact }: { eyebrow: string; title: string; titleId: string; lede?: string; compact?: boolean }) {
  return (
    <div className={compact ? "max-w-2xl" : "max-w-3xl"}>
      <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-navy)" }}>
        <span className="h-px w-8" style={{ background: "var(--color-navy)" }} aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 id={titleId} className="tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: compact ? "clamp(1.9rem, 3.2vw, 2.6rem)" : "clamp(2.4rem, 4.0vw, 3.4rem)", fontWeight: 200, lineHeight: 1.08, color: "var(--color-navy-deep)", letterSpacing: "-0.01em" }}>{title}</h2>
      {lede && (
        <p className="mt-5 text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--color-stone)" }}>{lede}</p>
      )}
    </div>
  );
}