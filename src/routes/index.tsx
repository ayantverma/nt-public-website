import { createFileRoute, Link } from "@tanstack/react-router";
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
  Coins,
  Vault,
  CalendarClock,
  MapPin,
  Award,
} from "lucide-react";

import heroSkyline from "@/assets/hero-skyline.jpg";
import { HeroAskAgent } from "@/components/hero-ask-agent";
import legacyArchive from "@/assets/legacy-archive.jpg";
import audienceFamily from "@/assets/audience-family.jpg";
import audienceInstitutions from "@/assets/audience-institutions.jpg";
import audienceAdvisors from "@/assets/audience-advisors.jpg";
import insightFeatured from "@/assets/insight-featured.jpg";
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
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b`}
        style={{
          background: scrolled ? "rgba(245,241,232,0.92)" : "var(--color-ivory)",
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          borderColor: "rgba(20,82,58,0.12)",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between gap-8 h-[88px]">
          <a href="#" className="flex items-center gap-4 shrink-0">
            <NTMark />
          </a>

          <nav className="hidden xl:flex items-center gap-6 xl:gap-7 text-[13px] tracking-wide" style={{ color: "var(--color-navy)" }}>
            <Link to="/wealth-management" className="relative py-2 group whitespace-nowrap">
              Wealth Management
              <span
                className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--color-cta)" }}
              />
            </Link>
            <Link to="/asset-servicing" className="relative py-2 group whitespace-nowrap">
              Asset Servicing
              <span
                className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--color-cta)" }}
              />
            </Link>
            {["Asset Management", "Insights", "About", "Careers"].map((item) => (
              <a key={item} href="#" className="relative py-2 group whitespace-nowrap">
                {item}
                <span
                  className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--color-cta)" }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div ref={searchRef} className="relative hidden 2xl:block">
              <SmartSearchField open={searchOpen} setOpen={setSearchOpen} />
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="2xl:hidden min-h-11 min-w-11 p-2.5 rounded-full border"
              style={{ borderColor: "rgba(20,82,58,0.2)" }}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <a
              href="#"
              className="hidden md:inline-flex min-h-11 items-center gap-2.5 px-7 py-3 rounded-full text-[12px] tracking-[0.16em] uppercase font-semibold transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
            >
              Client Login
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button className="xl:hidden min-h-11 min-w-11 p-2.5" aria-label="Menu">
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
      src={ntLogoMark}
      alt="Northern Trust"
      className="h-14 w-auto shrink-0 select-none"
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
      >
        <Search className="h-4 w-4" style={{ color: "var(--color-navy)" }} aria-hidden="true" />
        <input
          ref={inputRef}
          aria-label="Search Northern Trust insights, services, and advisors"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search insights, services, advisors…"
          className="flex-1 bg-transparent outline-none text-[13px] placeholder:opacity-100"
          style={{ color: "var(--color-navy)" }}
        />
        {open ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setQ("");
            }}
            type="button"
            className="min-h-11 min-w-11 p-2 rounded-full hover:bg-black/5"
            aria-label="Close search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : null}
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
                      className="min-h-11 text-[12px] px-4 py-2.5 rounded-full border transition-colors hover:bg-[var(--color-ivory)]"
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
                          className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--color-navy)" }}
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
            <span style={{ color: "var(--color-navy)" }}>Northern Trust Intelligence</span>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  const [agentActive, setAgentActive] = useState(false);
  return (
    <>
    {/* Full-bleed banner hero */}
    <section className="relative overflow-hidden" style={{ background: "var(--color-navy-deep)" }}>
      <div className="relative w-full" style={{ minHeight: "clamp(560px, 72vh, 780px)" }}>
        <img
          src={heroSkyline}
          alt="Chicago skyline at dusk — Northern Trust's home since 1889"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: agentActive
              ? "saturate(0.7) contrast(1.05) brightness(0.35)"
              : "saturate(0.85) contrast(1.05) brightness(0.85)",
            transition: "filter 500ms ease",
          }}
        />
        {/* Left-side dark gradient for legibility */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,46,32,0.88) 0%, rgba(10,46,32,0.65) 38%, rgba(10,46,32,0.18) 68%, rgba(10,46,32,0) 100%)",
            opacity: agentActive ? 0.95 : 1,
          }}
        />
        {/* Content overlay */}
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20 flex items-center transition-all duration-500" style={{ transform: agentActive ? "translateY(-32px)" : "translateY(0)" }}>
          <div className="max-w-2xl" style={{ color: "var(--color-ivory)" }}>
            <div
              aria-hidden={agentActive}
              className="transition-all duration-500"
              style={{
                opacity: agentActive ? 0 : 1,
                transform: agentActive ? "translateY(-16px)" : "translateY(0)",
                pointerEvents: agentActive ? "none" : "auto",
                maxHeight: agentActive ? 0 : "none",
                overflow: agentActive ? "hidden" : "visible",
              }}
            >
            <h1
              className="tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5.0vw, 5.0rem)",
                lineHeight: 1.02,
                fontWeight: 100,
              }}
            >
              <span style={{ display: "block" }}>A century and a third</span>
              <span style={{ display: "block" }}>of quiet conviction.</span>
            </h1>
            <p
              className="mt-6 max-w-lg text-[16px] leading-relaxed"
              style={{ color: "var(--color-ivory)" }}
            >
              For 135 years, the world's most discerning families, institutions, and advisors have turned to Northern Trust — for wealth that endures beyond generations, and counsel that endures beyond cycles.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#audiences"
                className="inline-flex min-h-11 items-center gap-3 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:gap-4"
                style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}
              >
                Find your Northern Trust path
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-3 text-[14px] group"
                style={{ color: "var(--color-ivory)" }}
              >
                <span
                  className="h-10 w-10 grid place-items-center rounded-full border transition-transform group-hover:scale-105"
                  style={{ borderColor: "rgba(245,241,232,0.6)" }}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Watch our story · 2 min
              </button>
            </div>
            </div>

            <HeroAskAgent onActiveChange={setAgentActive} />
          </div>
        </div>

        {/* Corner caption */}
        <div
          className="absolute bottom-6 right-6 lg:bottom-8 lg:right-10 hidden md:block max-w-xs transition-opacity duration-500"
          aria-hidden={agentActive}
          style={{ opacity: agentActive ? 0 : 1, pointerEvents: agentActive ? "none" : "auto" }}
        >
          <div
            className="text-[10px] tracking-[0.3em] uppercase mb-1"
            style={{ color: "var(--color-mist)" }}
          >
            Chicago · Global HQ
          </div>
          <div
            className="text-[13px] leading-snug"
            style={{ color: "var(--color-ivory)", fontFamily: "var(--font-display)" }}
          >
            "Built to safeguard what matters most — for those who matter most."
          </div>
        </div>
      </div>
    </section>

    {/* Audience routing — separate section */}
    <section style={{ background: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div id="audiences">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div
                className="text-[11px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                Begin here
              </div>
              <h2
                className="tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.1rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                }}
              >
                Three journeys.<span style={{ color: "var(--color-cta)" }}> One standard of care.</span>
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
    </>
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
          style={{ color: featured ? "var(--color-mist)" : "var(--color-navy)" }}
        >
          {eyebrow}
        </div>
        <h3
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.15rem",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          {title}
        </h3>
        <p
          className="text-[14px] leading-relaxed mb-5"
          style={{ color: featured ? "var(--color-mist)" : "var(--color-stone)" }}
        >
          {desc}
        </p>
        <ul className="space-y-1.5 mb-6 text-[13px]">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span
                className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                style={{ background: featured ? "var(--color-mist)" : "var(--color-cta)" }}
              />
              {p}
            </li>
          ))}
        </ul>
        <div
          className="mt-auto flex items-center justify-between pt-4 border-t"
          style={{ borderColor: featured ? "rgba(245,241,232,0.15)" : "rgba(20,82,58,0.18)" }}
        >
          <span className="text-[13px]">Explore</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: featured ? "var(--color-mist)" : "var(--color-cta)" }}
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
              style={{ color: "var(--color-mist)" }}
            >
              <span className="h-px w-8" style={{ background: "var(--color-mist)" }} />
              The Northern Trust Legacy
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.0rem, 5.1vw, 4.6rem)",
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              We were built <br />
              <em style={{ color: "var(--color-ivory)", fontStyle: "normal" }}>to endure.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
              Founded in the last months of the 19th century, Northern Trust has quietly weathered every financial storm since — six wars, twelve recessions, one Great Depression, one global pandemic — and never once failed the families and institutions who trusted us with their capital.
            </p>
            <p className="text-[16px] leading-relaxed mt-5" style={{ color: "var(--color-mist)" }}>
              This is not a marketing claim. It is our ledger.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute top-16 left-0 right-0 h-px hidden md:block"
            style={{ background: "rgba(234,244,239,0.35)" }}
          />
          <div className="grid md:grid-cols-6 gap-8 md:gap-4">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative">
                <div className="hidden md:flex items-center justify-center h-16 mb-4">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: i === milestones.length - 1 ? "var(--color-ivory)" : "var(--color-mist)",
                      boxShadow: `0 0 0 6px var(--color-navy)`,
                    }}
                  />
                </div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--color-ivory)",
                    fontWeight: 400,
                  }}
                >
                  {m.year}
                </div>
                <div className="text-[13px] font-medium mb-2 tracking-wide">{m.title}</div>
                <div className="text-[12px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
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
            style={{ borderColor: "rgba(234,244,239,0.5)", color: "var(--color-ivory)" }}
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
    { value: "$1.6T", label: "Assets Under Management", sub: "As of Q4 2025", Icon: Coins },
    { value: "$16.6T", label: "Assets Under Custody / Administration", sub: "Top 5 globally", Icon: Vault },
    { value: "22", label: "Average Client Tenure", sub: "Years, top wealth clients", Icon: CalendarClock },
    { value: "30+", label: "Countries Served", sub: "Global footprint", Icon: MapPin },
    { value: "AA-", label: "S&P Long-Term Credit Rating", sub: "Among the highest in banking", Icon: Award },
  ];

  return (
    <section style={{ background: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-24">
        <div
          className="text-center mb-14"
        >
          <div
            className="text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--color-navy)" }}
          >
            The Ledger
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.1rem, 3.4vw, 3.0rem)",
              color: "var(--color-navy)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Numbers earned, not claimed.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-y-10 gap-x-6">
          {stats.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.label}
                className="group border-l pl-5 transition-colors"
                style={{ borderColor: "rgba(20,82,58,0.35)" }}
              >
                <div
                  className="h-10 w-10 grid place-items-center rounded-full mb-5 transition-transform group-hover:scale-105"
                  style={{
                    background: "rgba(20,82,58,0.12)",
                    color: "var(--color-cta)",
                  }}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.7rem, 4.1vw, 3.6rem)",
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
            );
          })}
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
              style={{ color: "var(--color-navy)" }}
            >
              Insights & Intelligence
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4.1vw, 3.6rem)",
                color: "var(--color-navy)",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              Research worth <em style={{ color: "var(--color-cta)", fontStyle: "normal" }}>reading twice.</em>
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
                style={{ color: "var(--color-navy)" }}
              >
                Feature · Multigenerational Wealth
              </div>
              <h3
                className="mb-3 group-hover:underline decoration-1 underline-offset-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.15rem, 3.6vw, 3.1rem)",
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
          <div className="lg:col-span-5 flex flex-col divide-y" style={{ borderColor: "rgba(20,82,58,0.16)" }}>
            {supporting.map((s) => (
              <a
                key={s.title}
                href="#"
                className="group py-6 first:pt-0 flex gap-6 items-start"
                style={{ borderColor: "rgba(20,82,58,0.16)" }}
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {s.cat}
                  </div>
                  <h4
                    className="mb-3 group-hover:underline decoration-1 underline-offset-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.65rem",
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
                  style={{ color: "var(--color-cta)" }}
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
              style={{ color: "var(--color-navy)" }}
            >
              Begin a conversation
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4.4vw, 3.8rem)",
                color: "var(--color-navy)",
                fontWeight: 400,
                lineHeight: 1.02,
              }}
            >
              Tell us who you serve. <br />
              <em style={{ color: "var(--color-cta)", fontStyle: "normal" }}>We'll match you</em> with the right specialist.
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
              boxShadow: "0 30px 80px -30px rgba(10,46,32,0.55)",
            }}
          >
            <div
              className="absolute -top-3 -right-3 w-24 h-24 pointer-events-none"
              style={{ borderTop: "1px solid var(--color-mist)", borderRight: "1px solid var(--color-mist)" }}
            />

            <div className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-mist)" }}>
              Step 1 of 3 · Who are you?
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {roles.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setRole(r.key)}
                  className="flex min-h-11 items-center gap-2 px-5 py-3 rounded-full text-[13px] transition-all border"
                  style={{
                    borderColor: role === r.key ? "var(--color-ivory)" : "rgba(245,241,232,0.35)",
                    background: role === r.key ? "var(--color-ivory)" : "transparent",
                    color: role === r.key ? "var(--color-cta)" : "var(--color-ivory)",
                  }}
                >
                  {r.icon}
                  {r.label}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-baseline justify-between mb-4">
                <label htmlFor="investable-assets" className="text-[12px] tracking-wide" style={{ color: "var(--color-mist)" }}>
                  Investable assets
                </label>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--color-ivory)",
                    fontWeight: 400,
                  }}
                >
                  ${assets}M{assets >= 100 ? "+" : ""}
                </div>
              </div>
              <input
                id="investable-assets"
                aria-label="Investable assets in millions"
                type="range"
                min={5}
                max={100}
                step={5}
                value={assets}
                onChange={(e) => setAssets(Number(e.target.value))}
                className="w-full accent-[color:var(--color-ivory)]"
                style={{ accentColor: "var(--color-ivory)" }}
              />
              <div className="flex justify-between text-[10px] mt-2" style={{ color: "var(--color-mist)" }}>
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
              <div className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-mist)" }}>
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
              <div className="text-[12px] mt-2" style={{ color: "var(--color-mist)" }}>
                Typical response · Within 1 business day
              </div>
            </div>

            <button
              type="button"
              className="w-full inline-flex min-h-11 items-center justify-center gap-3 py-4 rounded-full text-[14px] font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}
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
              style={{ color: "var(--color-mist)" }}
            >
              <Globe className="h-3.5 w-3.5" />
              Global Reach
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4.1vw, 3.4rem)",
                fontWeight: 400,
                lineHeight: 1.02,
              }}
            >
              Local counsel. <br />
              <em style={{ color: "var(--color-ivory)", fontStyle: "normal" }}>Global stewardship.</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
              22 offices across four continents. One standard of care — measured, patient, and delivered by people who know your name.
            </p>
            <Link
              to="/global-reach"
              className="mt-8 inline-flex min-h-11 items-center gap-3 px-6 py-3 rounded-full text-[13px] font-semibold transition-all hover:gap-4"
              style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}
            >
              Explore locations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {offices.map((o) => (
              <div
                key={o}
                className="flex items-center gap-3 py-3 border-b"
                style={{ borderColor: "rgba(245,241,232,0.1)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-mist)" }} />
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
          style={{ color: "var(--color-navy)" }}
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
            </div>
            <p className="text-[13px] leading-relaxed max-w-sm" style={{ color: "var(--color-mist)" }}>
              50 South LaSalle Street, Chicago, Illinois 60603. Serving generations of families, institutions, and advisors.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[13px]"
              style={{ color: "var(--color-ivory)" }}
            >
              Contact us <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[13px] hover:opacity-100 transition-opacity"
                      style={{ color: "var(--color-mist)" }}
                    >
                      {i}
                    </a>
                  </li>
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
