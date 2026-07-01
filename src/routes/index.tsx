import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  X,
  Menu,
  Globe,
  ShieldCheck,
  BookOpen,
  Landmark,
  Users,
  Building2,
  TrendingUp,
  Play,
} from "lucide-react";

import heroSkyline from "@/assets/hero-skyline.jpg";
import legacyArchive from "@/assets/legacy-archive.jpg";
import audienceFamily from "@/assets/audience-family.jpg";
import audienceInstitutions from "@/assets/audience-institutions.jpg";
import audienceAdvisors from "@/assets/audience-advisors.jpg";
import insightFeatured from "@/assets/insight-featured.jpg";
import ntLogo from "@/assets/nt-logo.svg";
import ntLogoMark from "@/assets/nt-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northern Trust — Since 1889. For Generations to Come." },
      {
        name: "description",
        content:
          "For 135 years, Northern Trust has served the world's most discerning families, institutions, and advisors — with wealth management, asset servicing, and asset management built on unshakeable trust.",
      },
      { property: "og:title", content: "Northern Trust — Since 1889" },
      {
        property: "og:description",
        content:
          "Wealth Management. Asset Servicing. Asset Management. Serving generations since 1889.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-ivory)", color: "var(--color-charcoal)", fontFamily: "var(--font-sans)" }}
    >
      <TopBar />
      <Hero />
      <Legacy />
      <TrustStats />
      <WealthTool />
      <Insights />
      <GlobalReach />
      <Awards />
      <Footer />
    </main>
  );
}

/* ─────────────────────────── TOP BAR + SEARCH ─────────────────────────── */

function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSearchOpen(false);
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [searchOpen]);

  return (
    <>
      {/* Announcement strip */}
      <div
        className="w-full text-center text-[11px] tracking-[0.2em] uppercase py-2"
        style={{ background: "var(--color-navy-deep)", color: "var(--color-gold-soft)" }}
      >
        Serving Families, Institutions & Advisors — Since 1889
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b`}
        style={{
          background: scrolled ? "rgba(245,241,232,0.92)" : "var(--color-ivory)",
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          borderColor: "rgba(10,31,68,0.08)",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between gap-8 h-[88px]">
          <a href="#" className="flex items-center gap-4 shrink-0">
            <NTMark />
            <div
              className="hidden xl:block pl-4 border-l text-[10px] tracking-[0.28em] uppercase leading-[1.5]"
              style={{ color: "var(--color-stone)", borderColor: "rgba(10,31,68,0.15)" }}
            >
              Est. 1889<br />Chicago
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] tracking-wide" style={{ color: "var(--color-navy)" }}>
            {["Wealth Management", "Asset Servicing", "Asset Management", "Insights", "About", "Careers"].map((item) => (
              <a key={item} href="#" className="relative py-2 group whitespace-nowrap">
                {item}
                <span
                  className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--color-gold)" }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div ref={searchRef} className="relative hidden md:block">
              <SmartSearchField open={searchOpen} setOpen={setSearchOpen} />
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden p-2.5 rounded-full border"
              style={{ borderColor: "rgba(10,31,68,0.15)" }}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-[12px] tracking-[0.16em] uppercase font-medium transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
            >
              Client Login
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button className="lg:hidden p-2.5" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function NTMark({ invert = false }: { invert?: boolean }) {
  return (
    <img
      src={ntLogo}
      alt="Northern Trust"
      className="h-11 w-auto shrink-0 select-none"
      style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
      draggable={false}
    />
  );
}

function SmartSearchField({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const trending = [
    "2026 Wealth Outlook",
    "Trust & Estate Planning",
    "ESG Investing",
    "Family Office Services",
    "Retirement Income",
  ];

  const groups: { title: string; icon: React.ReactNode; items: { title: string; meta: string }[] }[] = [
    {
      title: "Insights & Research",
      icon: <BookOpen className="h-4 w-4" />,
      items: [
        { title: "The New Rules of Multigenerational Wealth", meta: "Feature · 12 min read" },
        { title: "2026 Global Market Outlook", meta: "Research · Katie Nixon" },
        { title: "Tax-Efficient Giving Strategies", meta: "Guide · Wealth Planning" },
      ],
    },
    {
      title: "Services",
      icon: <Landmark className="h-4 w-4" />,
      items: [
        { title: "Private Wealth Management", meta: "Wealth Management" },
        { title: "Global Custody & Fund Services", meta: "Asset Servicing" },
        { title: "Institutional Asset Management", meta: "Asset Management" },
      ],
    },
    {
      title: "People & Places",
      icon: <Users className="h-4 w-4" />,
      items: [
        { title: "Find an Advisor", meta: "Search 22 cities · 30+ countries" },
        { title: "Chicago · Global Headquarters", meta: "50 South LaSalle Street" },
      ],
    },
  ];

  // Filter items when there is a query
  const query = q.trim().toLowerCase();
  const filteredGroups = query
    ? groups
        .map((g) => ({
          ...g,
          items: g.items.filter(
            (it) =>
              it.title.toLowerCase().includes(query) ||
              it.meta.toLowerCase().includes(query),
          ),
        }))
        .filter((g) => g.items.length > 0)
    : groups;

  return (
    <>
      {/* The search field itself */}
      <div
        className={`flex items-center gap-3 px-4 py-2.5 border transition-all ${
          open ? "rounded-t-2xl rounded-b-none shadow-sm" : "rounded-full hover:shadow-sm"
        }`}
        style={{
          borderColor: open ? "rgba(0,98,63,0.35)" : "rgba(0,98,63,0.18)",
          background: open ? "#fff" : "transparent",
          minWidth: 320,
          borderBottomColor: open ? "transparent" : undefined,
        }}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" style={{ color: "var(--color-navy)" }} />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search insights, services, advisors…"
          className="flex-1 bg-transparent outline-none text-[13px] placeholder:opacity-60"
          style={{ color: "var(--color-navy)" }}
        />
        {open ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setQ("");
            }}
            className="p-1 rounded-full hover:bg-black/5"
            aria-label="Close search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd
            className="ml-auto text-[10px] px-1.5 py-0.5 rounded border"
            style={{ borderColor: "rgba(0,98,63,0.2)", color: "var(--color-navy)" }}
          >
            ⌘K
          </kbd>
        )}
      </div>

      {/* Dropdown panel — inline, no popup */}
      {open && (
        <div
          className="absolute right-0 top-full w-[520px] max-w-[calc(100vw-3rem)] rounded-b-2xl border shadow-xl overflow-hidden animate-fade-in"
          style={{
            background: "#fff",
            borderColor: "rgba(0,98,63,0.2)",
            borderTop: "1px solid rgba(0,98,63,0.08)",
            zIndex: 50,
          }}
        >
          <div className="px-5 py-4 max-h-[70vh] overflow-y-auto">
            {!query && (
              <div className="mb-5">
                <div
                  className="text-[10px] tracking-[0.25em] uppercase mb-3"
                  style={{ color: "var(--color-stone)" }}
                >
                  Trending
                </div>
                <div className="flex flex-wrap gap-2">
                  {trending.map((t) => (
                    <button
                      key={t}
                      onClick={() => setQ(t)}
                      className="text-[12px] px-3 py-1.5 rounded-full border transition-colors hover:bg-[var(--color-ivory)]"
                      style={{ borderColor: "rgba(0,98,63,0.18)", color: "var(--color-navy)" }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredGroups.length === 0 ? (
              <div className="py-8 text-center text-[13px]" style={{ color: "var(--color-stone)" }}>
                No matches for <em>"{q}"</em> — try "wealth", "custody" or "advisor".
              </div>
            ) : (
              filteredGroups.map((g) => (
                <div key={g.title} className="mb-5 last:mb-0">
                  <div
                    className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase mb-2"
                    style={{ color: "var(--color-stone)" }}
                  >
                    {g.icon}
                    {g.title}
                  </div>
                  <div className="space-y-0.5">
                    {g.items.map((it) => (
                      <a
                        key={it.title}
                        href="#"
                        className="flex items-center justify-between gap-4 px-3 py-2.5 rounded-lg transition-colors hover:bg-[var(--color-ivory)] group"
                      >
                        <div className="min-w-0">
                          <div
                            className="text-[14px] truncate"
                            style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)" }}
                          >
                            {it.title}
                          </div>
                          <div className="text-[11px] mt-0.5" style={{ color: "var(--color-stone)" }}>
                            {it.meta}
                          </div>
                        </div>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--color-gold)" }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <div
            className="px-5 py-2.5 border-t flex items-center justify-between text-[10px]"
            style={{
              borderColor: "rgba(0,98,63,0.08)",
              color: "var(--color-stone)",
              background: "var(--color-ivory)",
            }}
          >
            <div className="flex gap-3">
              <span><kbd className="font-mono">↑↓</kbd> Navigate</span>
              <span><kbd className="font-mono">↵</kbd> Open</span>
              <span><kbd className="font-mono">Esc</kbd> Close</span>
            </div>
            <span style={{ color: "var(--color-gold)" }}>Northern Trust Intelligence</span>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-8 lg:pt-10 pb-14 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <div
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-8"
              style={{ color: "var(--color-gold)" }}
            >
              <span className="h-px w-8" style={{ background: "var(--color-gold)" }} />
              Volume CXXXV · 1889 — 2026
            </div>
            <h1
              className="tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
                fontSize: "clamp(3.2rem, 6.5vw, 6.5rem)",
                lineHeight: 0.95,
                fontWeight: 400,
              }}
            >
              A century&nbsp;of quiet{"\n"}
              conviction.
            </h1>
            <p
              className="mt-8 max-w-xl text-[17px] leading-relaxed"
              style={{ color: "var(--color-stone)" }}
            >
              For 135 years, the world's most discerning families, institutions, and advisors have turned to Northern Trust — for wealth that endures beyond generations, and for counsel that endures beyond cycles.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#audiences"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-[14px] transition-all hover:gap-4"
                style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
              >
                Explore your path
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                className="inline-flex items-center gap-3 text-[14px] group"
                style={{ color: "var(--color-navy)" }}
              >
                <span
                  className="h-10 w-10 grid place-items-center rounded-full border transition-transform group-hover:scale-105"
                  style={{ borderColor: "var(--color-navy)" }}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Watch our story · 2 min
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-24 h-24 hidden lg:block"
                style={{ borderTop: "1px solid var(--color-gold)", borderLeft: "1px solid var(--color-gold)" }}
              />
              <img
                src={heroSkyline}
                alt="Chicago skyline at golden hour — Northern Trust's home since 1889"
                width={1600}
                height={1024}
                className="w-full aspect-[16/10] object-cover rounded-sm"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-sm"
                style={{ background: "rgba(6,22,52,0.85)", backdropFilter: "blur(8px)" }}
              >
                <div
                  className="text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: "var(--color-gold-soft)" }}
                >
                  Chicago · Global HQ
                </div>
                <div
                  className="text-[15px] leading-snug"
                  style={{ color: "var(--color-ivory)", fontFamily: "var(--font-display)" }}
                >
                  "Built to safeguard what matters most — for those who matter most."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audience routing */}
        <div id="audiences" className="mt-24 lg:mt-32">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div
                className="text-[11px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--color-gold)" }}
              >
                Begin here
              </div>
              <h2
                className="tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                }}
              >
                Three journeys.<span style={{ color: "var(--color-gold)" }}> One standard of care.</span>
              </h2>
            </div>
            <a
              href="#"
              className="text-[13px] flex items-center gap-2 group"
              style={{ color: "var(--color-navy)" }}
            >
              Not sure where to start? Speak with us
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <AudienceCard
              image={audienceFamily}
              eyebrow="For Individuals & Families"
              title="Wealth that outlives you."
              desc="Private wealth management, trust & estate, and family office services for families with $10M+ in investable assets."
              points={["Private Wealth Management", "Trust & Estate Planning", "Family Office Services"]}
            />
            <AudienceCard
              image={audienceInstitutions}
              eyebrow="For Institutions"
              title="Custody with conviction."
              desc="Asset servicing, custody, fund administration, and treasury solutions for the world's largest institutions."
              points={["Global Custody · $16.6T AUC/A", "Fund Administration", "Institutional Investing"]}
              featured
            />
            <AudienceCard
              image={audienceAdvisors}
              eyebrow="For Advisors & Family Offices"
              title="A partner for your practice."
              desc="Institutional-grade custody, technology, and investment solutions purpose-built for RIAs and multi-family offices."
              points={["RIA Custody Services", "Wealth Passport® Platform", "Institutional Investment Access"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  image,
  eyebrow,
  title,
  desc,
  points,
  featured,
}: {
  image: string;
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  featured?: boolean;
}) {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-sm flex flex-col transition-all duration-500 hover:-translate-y-1"
      style={{
        background: featured ? "var(--color-navy)" : "var(--color-ivory-soft)",
        color: featured ? "var(--color-ivory)" : "var(--color-navy)",
        minHeight: 520,
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          style={{ filter: featured ? "saturate(0.75) brightness(0.85)" : "saturate(0.85)" }}
        />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <div
          className="text-[10px] tracking-[0.3em] uppercase mb-4"
          style={{ color: featured ? "var(--color-gold-soft)" : "var(--color-gold)" }}
        >
          {eyebrow}
        </div>
        <h3
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          {title}
        </h3>
        <p
          className="text-[14px] leading-relaxed mb-5"
          style={{ color: featured ? "rgba(245,241,232,0.75)" : "var(--color-stone)" }}
        >
          {desc}
        </p>
        <ul className="space-y-1.5 mb-6 text-[13px]">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span
                className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                style={{ background: featured ? "var(--color-gold-soft)" : "var(--color-gold)" }}
              />
              {p}
            </li>
          ))}
        </ul>
        <div
          className="mt-auto flex items-center justify-between pt-4 border-t"
          style={{ borderColor: featured ? "rgba(245,241,232,0.15)" : "rgba(10,31,68,0.12)" }}
        >
          <span className="text-[13px]">Explore</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: featured ? "var(--color-gold-soft)" : "var(--color-gold)" }}
          />
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────── LEGACY ─────────────────────────── */

function Legacy() {
  const milestones = [
    { year: "1889", title: "Founded", body: "Byron Laflin Smith opens The Northern Trust Company at 88 South LaSalle, Chicago." },
    { year: "1913", title: "A Refuge in Crisis", body: "Weathered the Panic of 1907 and the founding of the Federal Reserve — never suspending payment." },
    { year: "1971", title: "Institutional Trust", body: "Pioneered institutional custody services, laying the foundation for modern asset servicing." },
    { year: "1989", title: "First Global Office", body: "London opens — the beginning of a global footprint spanning 30+ countries today." },
    { year: "2008", title: "Steady Through the Storm", body: "One of only two U.S. custodian banks to remain profitable every quarter of the financial crisis." },
    { year: "2026", title: "The Next Century", body: "$1.6T AUM · $16.6T AUC/A · Serving the world's most enduring wealth." },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url(${legacyArchive})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--color-gold-soft)" }}
            >
              <span className="h-px w-8" style={{ background: "var(--color-gold-soft)" }} />
              The Northern Trust Legacy
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              We were built <br />
              <em style={{ color: "var(--color-gold-soft)", fontStyle: "italic" }}>to endure.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(245,241,232,0.75)" }}>
              Founded in the last months of the 19th century, Northern Trust has quietly weathered every financial storm since — six wars, twelve recessions, one Great Depression, one global pandemic — and never once failed the families and institutions who trusted us with their capital.
            </p>
            <p className="text-[16px] leading-relaxed mt-5" style={{ color: "rgba(245,241,232,0.75)" }}>
              This is not a marketing claim. It is our ledger.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute top-16 left-0 right-0 h-px hidden md:block"
            style={{ background: "rgba(212,176,106,0.3)" }}
          />
          <div className="grid md:grid-cols-6 gap-8 md:gap-4">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative">
                <div className="hidden md:flex items-center justify-center h-16 mb-4">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: i === milestones.length - 1 ? "var(--color-gold)" : "var(--color-gold-soft)",
                      boxShadow: `0 0 0 6px var(--color-navy)`,
                    }}
                  />
                </div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--color-gold-soft)",
                    fontWeight: 400,
                  }}
                >
                  {m.year}
                </div>
                <div className="text-[13px] font-medium mb-2 tracking-wide">{m.title}</div>
                <div className="text-[12px] leading-relaxed" style={{ color: "rgba(245,241,232,0.6)" }}>
                  {m.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-[14px] border transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(212,176,106,0.4)", color: "var(--color-gold-soft)" }}
          >
            Walk the full 135-year archive
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TRUST STATS ─────────────────────────── */

function TrustStats() {
  const stats = [
    { value: "$1.6T", label: "Assets Under Management", sub: "As of Q4 2025" },
    { value: "$16.6T", label: "Assets Under Custody / Administration", sub: "Top 5 globally" },
    { value: "22", label: "Average Client Tenure", sub: "Years, top wealth clients" },
    { value: "30+", label: "Countries Served", sub: "Global footprint" },
    { value: "AA-", label: "S&P Long-Term Credit Rating", sub: "Among the highest in banking" },
  ];

  return (
    <section style={{ background: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid md:grid-cols-5 gap-y-10 gap-x-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-l pl-5"
              style={{ borderColor: "rgba(180,138,60,0.4)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                  color: "var(--color-navy)",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-3 text-[12px] tracking-wide"
                style={{ color: "var(--color-navy)" }}
              >
                {s.label}
              </div>
              <div className="mt-1 text-[11px]" style={{ color: "var(--color-stone)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INSIGHTS ─────────────────────────── */

function Insights() {
  const supporting = [
    {
      cat: "Wealth Planning",
      title: "The tax-efficient family: five strategies for 2026",
      author: "Suzanne L. Shier",
      read: "8 min",
    },
    {
      cat: "Markets",
      title: "Fixed income in a decoupled world",
      author: "Katie Nixon",
      read: "11 min",
    },
    {
      cat: "Family Office",
      title: "Governance for the next generation of stewards",
      author: "David W. Fox Jr.",
      read: "14 min",
    },
  ];

  return (
    <section style={{ background: "var(--color-ivory-soft)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div
              className="text-[11px] tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Insights & Intelligence
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--color-navy)",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              Research worth <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>reading twice.</em>
            </h2>
          </div>
          <a
            href="#"
            className="text-[13px] flex items-center gap-2 group"
            style={{ color: "var(--color-navy)" }}
          >
            The full library
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured */}
          <a
            href="#"
            className="lg:col-span-7 group block"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={insightFeatured}
                alt=""
                loading="lazy"
                className="w-full aspect-[16/10] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </div>
            <div className="mt-6">
              <div
                className="text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--color-gold)" }}
              >
                Feature · Multigenerational Wealth
              </div>
              <h3
                className="mb-3 group-hover:underline decoration-1 underline-offset-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "var(--color-navy)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                }}
              >
                The new rules of inheritance: what the great wealth transfer really requires.
              </h3>
              <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--color-stone)" }}>
                An estimated $84 trillion will move between generations by 2045. The families who transfer well share four traits — and none of them are financial.
              </p>
              <div className="mt-5 flex items-center gap-3 text-[12px]" style={{ color: "var(--color-navy)" }}>
                <span>Katie Nixon · Chief Investment Officer</span>
                <span style={{ color: "var(--color-stone)" }}>·</span>
                <span style={{ color: "var(--color-stone)" }}>16 min read</span>
              </div>
            </div>
          </a>

          {/* Supporting */}
          <div className="lg:col-span-5 flex flex-col divide-y" style={{ borderColor: "rgba(10,31,68,0.1)" }}>
            {supporting.map((s) => (
              <a
                key={s.title}
                href="#"
                className="group py-6 first:pt-0 flex gap-6 items-start"
                style={{ borderColor: "rgba(10,31,68,0.1)" }}
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {s.cat}
                  </div>
                  <h4
                    className="mb-3 group-hover:underline decoration-1 underline-offset-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      color: "var(--color-navy)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                    }}
                  >
                    {s.title}
                  </h4>
                  <div className="text-[12px]" style={{ color: "var(--color-stone)" }}>
                    {s.author} · {s.read}
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 mt-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: "var(--color-gold)" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── WEALTH TOOL ─────────────────────────── */

function WealthTool() {
  const [role, setRole] = useState<"family" | "institution" | "advisor">("family");
  const [assets, setAssets] = useState(25);

  const roles = [
    { key: "family", label: "Family", icon: <Users className="h-3.5 w-3.5" /> },
    { key: "institution", label: "Institution", icon: <Building2 className="h-3.5 w-3.5" /> },
    { key: "advisor", label: "Advisor / RIA", icon: <TrendingUp className="h-3.5 w-3.5" /> },
  ] as const;

  return (
    <section style={{ background: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <div
              className="text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-gold)" }}
            >
              Begin a conversation
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                color: "var(--color-navy)",
                fontWeight: 400,
                lineHeight: 1.02,
              }}
            >
              Tell us who you serve. <br />
              <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>We'll match you</em> with the right specialist.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed" style={{ color: "var(--color-stone)" }}>
              Every Northern Trust relationship begins with a private consultation. There is no cost, no obligation — only judgment, and the time to give it properly.
            </p>
          </div>

          <div
            className="lg:col-span-7 p-8 lg:p-10 rounded-sm relative"
            style={{
              background: "var(--color-navy)",
              color: "var(--color-ivory)",
              boxShadow: "0 30px 80px -30px rgba(6,22,52,0.5)",
            }}
          >
            <div
              className="absolute -top-3 -right-3 w-24 h-24 pointer-events-none"
              style={{ borderTop: "1px solid var(--color-gold-soft)", borderRight: "1px solid var(--color-gold-soft)" }}
            />

            <div className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-gold-soft)" }}>
              Step 1 of 3 · Who are you?
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {roles.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRole(r.key)}
                  className="flex items-center gap-2 px-5 py-3 rounded-full text-[13px] transition-all border"
                  style={{
                    borderColor: role === r.key ? "var(--color-gold-soft)" : "rgba(245,241,232,0.2)",
                    background: role === r.key ? "rgba(212,176,106,0.15)" : "transparent",
                    color: role === r.key ? "var(--color-gold-soft)" : "var(--color-ivory)",
                  }}
                >
                  {r.icon}
                  {r.label}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-baseline justify-between mb-4">
                <label className="text-[12px] tracking-wide" style={{ color: "rgba(245,241,232,0.7)" }}>
                  Investable assets
                </label>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--color-gold-soft)",
                    fontWeight: 400,
                  }}
                >
                  ${assets}M{assets >= 100 ? "+" : ""}
                </div>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={assets}
                onChange={(e) => setAssets(Number(e.target.value))}
                className="w-full accent-[color:var(--color-gold-soft)]"
                style={{ accentColor: "var(--color-gold-soft)" }}
              />
              <div className="flex justify-between text-[10px] mt-2" style={{ color: "rgba(245,241,232,0.5)" }}>
                <span>$5M</span>
                <span>$25M</span>
                <span>$50M</span>
                <span>$100M+</span>
              </div>
            </div>

            <div
              className="p-5 rounded-sm mb-6"
              style={{ background: "rgba(245,241,232,0.05)", border: "1px solid rgba(245,241,232,0.1)" }}
            >
              <div className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold-soft)" }}>
                Your matched specialist
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  color: "var(--color-ivory)",
                  lineHeight: 1.2,
                }}
              >
                {role === "family" && (assets < 25 ? "Wealth Advisor · Regional Practice" : assets < 75 ? "Senior Wealth Advisor · Private Practice" : "Family Office Partner · Ultra-High-Net-Worth")}
                {role === "institution" && "Institutional Relationship Manager · Asset Servicing"}
                {role === "advisor" && "RIA Solutions Partner · Wealth Passport®"}
              </div>
              <div className="text-[12px] mt-2" style={{ color: "rgba(245,241,232,0.6)" }}>
                Typical response · Within 1 business day
              </div>
            </div>

            <button
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-[14px] transition-all hover:opacity-90"
              style={{ background: "var(--color-gold)", color: "var(--color-navy)" }}
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── GLOBAL REACH ─────────────────────────── */

function GlobalReach() {
  const offices = [
    "Chicago (HQ)",
    "New York",
    "London",
    "Singapore",
    "Hong Kong",
    "Dublin",
    "Zürich",
    "Abu Dhabi",
    "Tokyo",
    "Sydney",
    "Toronto",
    "Guernsey",
  ];
  return (
    <section
      style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--color-gold-soft)" }}
            >
              <Globe className="h-3.5 w-3.5" />
              Global Reach
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.02,
              }}
            >
              Local counsel. <br />
              <em style={{ color: "var(--color-gold-soft)", fontStyle: "italic" }}>Global stewardship.</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "rgba(245,241,232,0.7)" }}>
              22 offices across four continents. One standard of care — measured, patient, and delivered by people who know your name.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {offices.map((o) => (
              <div
                key={o}
                className="flex items-center gap-3 py-3 border-b"
                style={{ borderColor: "rgba(245,241,232,0.1)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-gold-soft)" }} />
                <span className="text-[14px]" style={{ color: "var(--color-ivory)" }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── AWARDS ─────────────────────────── */

function Awards() {
  const awards = [
    "Euromoney · World's Best Private Bank for Family Office Services",
    "Global Finance · Best Private Bank in North America",
    "Barron's · Top 100 RIAs Custodian",
    "Forbes · America's Best Banks",
    "Fortune · World's Most Admired Companies",
  ];
  return (
    <section style={{ background: "var(--color-ivory-soft)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-8 justify-center"
          style={{ color: "var(--color-gold)" }}
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          Recognition
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {awards.map((a) => (
            <div
              key={a}
              className="text-[12px] tracking-wide"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)" }}
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  const cols: { title: string; items: string[] }[] = [
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
            <div className="flex items-center gap-3 mb-6">
              <NTMark invert />
              <div
                className="pl-3 border-l text-[10px] tracking-[0.28em] uppercase leading-tight"
                style={{ color: "var(--color-gold-soft)", borderColor: "rgba(245,241,232,0.2)" }}
              >
                Est. 1889<br />Chicago
              </div>
            </div>
            <p className="text-[13px] leading-relaxed max-w-sm" style={{ color: "rgba(245,241,232,0.6)" }}>
              50 South LaSalle Street, Chicago, Illinois 60603. Serving generations of families, institutions, and advisors.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[13px]"
              style={{ color: "var(--color-gold-soft)" }}
            >
              Contact us <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold-soft)" }}>
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[13px] hover:opacity-100 transition-opacity"
                      style={{ color: "rgba(245,241,232,0.7)" }}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px]" style={{ color: "rgba(245,241,232,0.5)" }}>
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
