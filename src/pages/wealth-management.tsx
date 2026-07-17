import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Search,
  ShieldCheck,
  Users,
  Landmark,
  Building2,
  HeartHandshake,
  Compass,
  Sparkles,
  ChevronDown,
  BookOpen,
  Coins,
  Vault,
  TrendingUp,
  Award,
  Globe,
  MapPin,
  Briefcase,
  Baby,
  ScrollText,
  Ear,
  PenLine,
  Anchor,
  Recycle,
} from "lucide-react";

import ntLogoMark from "@/assets/nt-logo.png";
import wealthHero from "@/assets/wealth/wealth-hero.jpg";
import wealthFamily from "@/assets/wealth/wealth-family.jpg";
import wealthAdvisor from "@/assets/wealth/wealth-advisor.jpg";
import wealthLegacy from "@/assets/wealth/wealth-legacy.jpg";

const faqData = [
  {
    q: "Who does Northern Trust Wealth Management serve?",
    a: "We serve individuals, families, business owners, executives, and family offices — typically with $10M+ in investable assets — who value multi-generational counsel over transactional advice.",
  },
  {
    q: "How is a Northern Trust relationship structured?",
    a: "Every client is anchored by a dedicated advisor supported by an integrated bench: investment strategists, trust counsel, wealth planners, banking specialists, and philanthropic advisors — one relationship, one plan, many disciplines.",
  },
  {
    q: "What is your investment philosophy?",
    a: "Goals-driven, risk-aware, and evidence-based. We build portfolios around what your capital must accomplish across generations, not against a benchmark.",
  },
  {
    q: "Do you provide trust and estate services in-house?",
    a: "Yes. Northern Trust has served as trustee for more than a century, with fiduciary teams in every major jurisdiction we operate in.",
  },
  {
    q: "How do I begin a relationship?",
    a: "Start with a private conversation — no paperwork, no pressure. A senior advisor will meet you to understand your objectives before any recommendation is made.",
  },
  {
    q: "What fees should I expect?",
    a: "Fees are transparent, tiered to the scope of the relationship, and confirmed in writing before we begin. There are no product commissions and no hidden incentives.",
  },
];

const SECTIONS = [
  { id: "audiences", label: "Who we serve" },
  { id: "services", label: "What we do" },
  { id: "process", label: "How we work" },
  { id: "team", label: "Your team" },
  { id: "compass", label: "Wealth Compass" },
  { id: "narratives", label: "Client stories" },
  { id: "insights", label: "Insights" },
  { id: "proof", label: "By the numbers" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Talk to us" },
];

function WealthPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-ivory)",
        color: "var(--color-charcoal)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md"
        style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
      >
        Skip to content
      </a>
      <TopBar />
      <div id="main-content">
        <WealthHero />
        <SectionRail />
        <AudienceGrid />
        <ServicePillars />
        <ProcessSteps />
        <TeamModule />
        <WealthCompass />
        <CaseNarratives />
        <WealthInsights />
        <ProofStrip />
        <WealthFAQ />
        <AdvisorContact />
      </div>
      <Footer />
    </main>
  );
}

/* ─────────────────────────── SHARED CHROME ─────────────────────────── */

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
        background: scrolled ? "rgba(245,241,232,0.92)" : "var(--color-ivory)",
        backdropFilter: scrolled ? "blur(12px)" : undefined,
        borderColor: "rgba(20,82,58,0.12)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between gap-8 h-[88px]">
        <Link to="/" className="flex items-center gap-4 shrink-0" aria-label="Northern Trust — Home">
          <NTMark />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-6 xl:gap-7 text-[13px] tracking-wide"
          style={{ color: "var(--color-navy)" }}
        >
          <Link
            to="/wealth-management"
            className="relative py-2 whitespace-nowrap"
            aria-current="page"
          >
            Wealth Management
            <span
              className="absolute left-0 -bottom-0.5 h-px w-full"
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
          <button
            type="button"
            className="min-h-11 min-w-11 p-2.5 rounded-full border hidden md:inline-flex items-center justify-center"
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
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function WealthHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-navy-deep)" }}
      aria-labelledby="wealth-hero-heading"
    >
      <div className="relative w-full" style={{ height: "clamp(460px, 62vh, 620px)" }}>
        <img
          src={wealthHero}
          alt="Multigenerational family walking together at a private estate at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.82)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,46,32,0.9) 0%, rgba(10,46,32,0.7) 40%, rgba(10,46,32,0.25) 70%, rgba(10,46,32,0) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] h-full px-6 lg:px-10 flex items-center">
          <div className="max-w-2xl" style={{ color: "var(--color-ivory)" }}>
            <div
              className="text-[11px] tracking-[0.3em] uppercase mb-5 flex items-center gap-3"
              style={{ color: "var(--color-mist)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--color-mist)" }}
                aria-hidden="true"
              />
              Wealth Management
            </div>
            <h1
              id="wealth-hero-heading"
              className="tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.0rem, 5.0vw, 5.0rem)",
                lineHeight: 1.02,
                fontWeight: 100,
              }}
            >
              Wealth,
              <br />
              <em style={{ fontStyle: "normal", fontWeight: 200 }}>stewarded.</em>
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed" style={{ color: "var(--color-ivory)" }}>
              One relationship. Many disciplines. For 135 years, we've been trusted to protect,
              grow, and transfer wealth across generations — with the patience of a fiduciary and
              the depth of a global bank.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-3 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:gap-4"
                style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}
              >
                Speak with an advisor
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#audiences"
                className="inline-flex min-h-11 items-center gap-2 text-[14px]"
                style={{ color: "var(--color-ivory)" }}
              >
                Explore what we do
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STICKY TOC ─────────────────────────── */

function SectionRail() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[88px] z-30 border-b hidden md:block"
      style={{
        background: "rgba(247,243,234,0.95)",
        backdropFilter: "blur(8px)",
        borderColor: "rgba(20,82,58,0.12)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <ul className="flex items-center gap-1 overflow-x-auto py-2 text-[12px]">
          {SECTIONS.map((s) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className="inline-flex min-h-11 items-center px-3.5 py-2 rounded-full transition-colors whitespace-nowrap"
                  style={{
                    color: isActive ? "var(--color-ivory)" : "var(--color-navy)",
                    background: isActive ? "var(--color-navy)" : "transparent",
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/* ─────────────────────────── SECTION HEADING ─────────────────────────── */

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-4"
      style={{ color: "var(--color-navy)" }}
    >
      <span
        className="h-px w-8"
        style={{ background: "var(--color-navy)" }}
        aria-hidden="true"
      />
      {label}
    </div>
  );
}

/* ─────────────────────────── AUDIENCES ─────────────────────────── */

function AudienceGrid() {
  const audiences = [
    {
      title: "Families & Individuals",
      copy: "Multi-generational stewardship for families whose wealth carries meaning beyond a balance sheet.",
      icon: Users,
    },
    {
      title: "Executives",
      copy: "Concentrated equity, deferred compensation, and liquidity planning for senior operating leaders.",
      icon: Briefcase,
    },
    {
      title: "Business Owners",
      copy: "From ownership through transition — pre-sale planning, liquidity events, and post-exit wealth.",
      icon: Building2,
    },
    {
      title: "The Next Generation",
      copy: "Financial education, governance, and inheritance readiness for rising family members.",
      icon: Baby,
    },
    {
      title: "Foundations & Endowments",
      copy: "Mission-aligned investment, spending policy, and grant-making infrastructure.",
      icon: HeartHandshake,
    },
  ];
  return (
    <section
      id="audiences"
      aria-labelledby="audiences-heading"
      style={{ background: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <SectionEyebrow label="§ Who we serve" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2
            id="audiences-heading"
            className="tracking-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
              fontWeight: 200,
              lineHeight: 1.08,
              color: "var(--color-navy-deep)",
            }}
          >
            Five relationships. <em style={{ fontStyle: "normal" }}>One standard of care.</em>
          </h2>
          <p className="text-[15px] max-w-md leading-relaxed" style={{ color: "var(--color-stone)" }}>
            Wealth means different things to different people. Our advisors listen first — then
            assemble the right specialists for the life you actually lead.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <a
                key={a.title}
                href="#contact"
                className="group flex flex-col p-6 rounded-2xl border transition-all hover:-translate-y-0.5 min-h-11"
                style={{
                  borderColor: "rgba(20,82,58,0.15)",
                  background: "#fff",
                }}
              >
                <span
                  className="h-11 w-11 grid place-items-center rounded-full mb-5"
                  style={{ background: "var(--color-ivory-soft)", color: "var(--color-navy-deep)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div
                  className="text-[16px] mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy-deep)",
                    fontWeight: 600,
                  }}
                >
                  {a.title}
                </div>
                <p className="text-[13px] leading-relaxed flex-1" style={{ color: "var(--color-stone)" }}>
                  {a.copy}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold"
                  style={{ color: "var(--color-cta)" }}
                >
                  Begin a conversation
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICE PILLARS ─────────────────────────── */

function ServicePillars() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Investment Management",
      subs: ["Goals-based portfolios", "Alternative investments", "Concentrated position strategy"],
    },
    {
      icon: ScrollText,
      title: "Trust & Estate Services",
      subs: ["Personal trustee", "Estate settlement", "Multi-jurisdictional structures"],
    },
    {
      icon: Landmark,
      title: "Family Office Services",
      subs: ["Consolidated reporting", "Governance & education", "Bill pay & lifestyle"],
    },
    {
      icon: Vault,
      title: "Banking & Credit",
      subs: ["Private lending", "Custom credit facilities", "Cash management"],
    },
    {
      icon: HeartHandshake,
      title: "Philanthropy",
      subs: ["Donor-advised funds", "Private foundations", "Impact strategy"],
    },
    {
      icon: Coins,
      title: "Business Owner Transitions",
      subs: ["Pre-liquidity planning", "M&A support", "Post-sale wealth"],
    },
  ];
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>
          <span className="h-px w-8" style={{ background: "var(--color-mist)" }} aria-hidden="true" />
          § What we do
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2
            id="services-heading"
            className="tracking-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
              fontWeight: 200,
              lineHeight: 1.08,
            }}
          >
            Six disciplines, <em style={{ fontStyle: "normal" }}>one plan.</em>
          </h2>
          <p className="text-[15px] max-w-md leading-relaxed" style={{ color: "var(--color-mist)" }}>
            Nothing bolted on. Nothing outsourced to a partner you'll never meet. Every capability
            you need — under one roof and one relationship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(245,241,232,0.14)" }}>
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 lg:p-10 flex flex-col transition-colors hover:bg-black/10"
                style={{ background: "var(--color-navy-deep)" }}
              >
                <Icon className="h-6 w-6 mb-6" strokeWidth={1.5} style={{ color: "var(--color-mist)" }} />
                <div
                  className="text-[20px] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {p.title}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.subs.map((s) => (
                    <li
                      key={s}
                      className="text-[13px] flex items-start gap-2"
                      style={{ color: "var(--color-mist)" }}
                    >
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                        style={{ background: "var(--color-mist)" }}
                        aria-hidden="true"
                      />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold min-h-11"
                  style={{ color: "var(--color-ivory)" }}
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROCESS ─────────────────────────── */

function ProcessSteps() {
  const steps = [
    {
      icon: Ear,
      label: "Listen",
      copy: "We begin with your objectives, your family, and the concerns that keep you up at night. No pitch deck. No product.",
    },
    {
      icon: PenLine,
      label: "Design",
      copy: "An integrated plan — investment, trust, tax, credit, philanthropy — engineered around what your capital must accomplish.",
    },
    {
      icon: Anchor,
      label: "Steward",
      copy: "We execute, monitor, and report with the discipline of a fiduciary — quietly, consistently, over years.",
    },
    {
      icon: Recycle,
      label: "Evolve",
      copy: "As markets, laws, and your family change, the plan adapts. The relationship endures.",
    },
  ];
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      style={{ background: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <SectionEyebrow label="§ How we work" />
        <h2
          id="process-heading"
          className="tracking-tight mb-14 max-w-3xl"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
            fontWeight: 200,
            lineHeight: 1.08,
            color: "var(--color-navy-deep)",
          }}
        >
          A process, not a product. <em style={{ fontStyle: "normal" }}>Four movements.</em>
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.label} className="relative">
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: "var(--color-stone)" }}
                >
                  0{i + 1}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.5}
                    style={{ color: "var(--color-navy-deep)" }}
                  />
                  <div
                    className="text-[22px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy-deep)",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
                <div
                  className="h-px w-full mb-4"
                  style={{ background: "rgba(20,82,58,0.2)" }}
                  aria-hidden="true"
                />
                <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--color-stone)" }}>
                  {s.copy}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────── TEAM MODULE ─────────────────────────── */

function TeamModule() {
  const specialists = [
    "Portfolio Strategist",
    "Wealth Planner",
    "Trust Counsel",
    "Banking Officer",
    "Tax Specialist",
    "Philanthropic Advisor",
  ];
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      style={{ background: "var(--color-ivory-soft)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionEyebrow label="§ Your team" />
            <h2
              id="team-heading"
              className="tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
                fontWeight: 200,
                lineHeight: 1.08,
                color: "var(--color-navy-deep)",
              }}
            >
              One advisor. <em style={{ fontStyle: "normal" }}>A bench of specialists.</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--color-stone)" }}>
              Your relationship is anchored by a senior advisor who knows your name, your family,
              and your objectives. Behind them stands a bench of in-house specialists — no
              referrals to third parties, no handoffs between calls.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {specialists.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border"
                  style={{
                    borderColor: "rgba(20,82,58,0.15)",
                    background: "#fff",
                    color: "var(--color-navy-deep)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "var(--color-cta)" }}
                    aria-hidden="true"
                  />
                  <span className="text-[13px]">{s}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 pt-6 border-t" style={{ borderColor: "rgba(20,82,58,0.15)" }}>
              <Stat kicker="Avg. client tenure" value="14 yrs" />
              <Stat kicker="Avg. advisor tenure" value="22 yrs" />
              <Stat kicker="Multigenerational families" value="9,200+" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={wealthAdvisor}
                alt="A Northern Trust advisor in conversation with a client, reviewing plans in a sunlit boardroom"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,46,32,0) 55%, rgba(10,46,32,0.75) 100%)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-6 left-6 right-6"
                style={{ color: "var(--color-ivory)" }}
              >
                <div
                  className="text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: "var(--color-mist)" }}
                >
                  On record
                </div>
                <blockquote
                  className="text-[17px] leading-snug"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                >
                  "We measure success in decades, not quarters — the way our clients live their
                  lives."
                </blockquote>
                <div className="mt-3 text-[12px]" style={{ color: "var(--color-mist)" }}>
                  Katie Nixon · Chief Investment Officer, Wealth Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kicker, value }: { kicker: string; value: string }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.3em] uppercase mb-1"
        style={{ color: "var(--color-stone)" }}
      >
        {kicker}
      </div>
      <div
        className="text-[26px] leading-none"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-navy-deep)",
          fontWeight: 300,
        }}
      >
        {value}
      </div>
    </div>
  );
}

/* ─────────────────────────── WEALTH COMPASS (interactive) ─────────────────────────── */

function WealthCompass() {
  const [range, setRange] = useState(25); // in $M
  const [goals, setGoals] = useState<string[]>(["Legacy for heirs"]);

  const allGoals = [
    "Legacy for heirs",
    "Business transition",
    "Philanthropy",
    "Retirement income",
    "Global mobility",
    "Family governance",
  ];
  const toggleGoal = (g: string) =>
    setGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));

  const tier = useMemo(() => {
    if (range < 10) return { name: "Private Wealth", copy: "A dedicated advisor plus core investment, trust, and planning services." };
    if (range < 50) return { name: "Wealth Advisory", copy: "An integrated team spanning investment, trust, credit, and tax — with bespoke planning." };
    if (range < 250) return { name: "Family Wealth", copy: "A senior client team with dedicated banking, trust counsel, and family governance support." };
    return { name: "Family Office Services", copy: "Full-scope family office — consolidated reporting, governance, philanthropy, and next-gen education." };
  }, [range]);

  const fmt = (v: number) =>
    v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v}M`;

  return (
    <section
      id="compass"
      aria-labelledby="compass-heading"
      style={{ background: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionEyebrow label="§ Wealth Compass" />
            <h2
              id="compass-heading"
              className="tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
                fontWeight: 200,
                lineHeight: 1.08,
                color: "var(--color-navy-deep)",
              }}
            >
              Tell us who you serve.<br />
              <em style={{ fontStyle: "normal" }}>We'll shape the relationship.</em>
            </h2>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-stone)" }}>
              Move the dial and choose what matters. Instantly see which service tier is designed
              for lives like yours — no form, no follow-up until you're ready.
            </p>
          </div>

          <div
            className="lg:col-span-7 rounded-2xl border p-8 lg:p-10"
            style={{ borderColor: "rgba(20,82,58,0.15)", background: "#fff" }}
          >
            <div className="mb-8">
              <label
                htmlFor="compass-range"
                className="text-[11px] tracking-[0.3em] uppercase block mb-3"
                style={{ color: "var(--color-stone)" }}
              >
                Investable wealth
              </label>
              <div className="flex items-baseline justify-between mb-3">
                <div
                  className="text-[34px] leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy-deep)",
                    fontWeight: 300,
                  }}
                >
                  {fmt(range)}
                </div>
                <div className="text-[12px]" style={{ color: "var(--color-stone)" }}>
                  {range >= 250 ? "Family office scale" : range >= 50 ? "Ultra-high net worth" : range >= 10 ? "High net worth" : "Private wealth"}
                </div>
              </div>
              <input
                id="compass-range"
                type="range"
                min={1}
                max={1000}
                step={1}
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
                aria-label="Investable wealth in millions of dollars"
                aria-valuetext={fmt(range)}
                className="w-full accent-[var(--color-navy-deep)]"
                style={{ accentColor: "var(--color-navy-deep)" }}
              />
              <div className="flex justify-between text-[11px] mt-2" style={{ color: "var(--color-stone)" }}>
                <span>$1M</span>
                <span>$10M</span>
                <span>$50M</span>
                <span>$250M</span>
                <span>$1B+</span>
              </div>
            </div>

            <fieldset className="mb-8">
              <legend
                className="text-[11px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--color-stone)" }}
              >
                What matters most
              </legend>
              <div className="flex flex-wrap gap-2">
                {allGoals.map((g) => {
                  const on = goals.includes(g);
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggleGoal(g)}
                      aria-pressed={on}
                      className="min-h-11 text-[12.5px] px-4 py-2.5 rounded-full border transition-colors"
                      style={{
                        borderColor: on ? "var(--color-navy-deep)" : "rgba(20,82,58,0.2)",
                        background: on ? "var(--color-navy-deep)" : "transparent",
                        color: on ? "var(--color-ivory)" : "var(--color-navy-deep)",
                      }}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div
              className="rounded-xl p-6 border"
              style={{
                background: "var(--color-ivory-soft)",
                borderColor: "rgba(20,82,58,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Compass className="h-5 w-5" style={{ color: "var(--color-navy-deep)" }} />
                <div
                  className="text-[11px] tracking-[0.3em] uppercase"
                  style={{ color: "var(--color-stone)" }}
                >
                  Recommended relationship
                </div>
              </div>
              <div
                className="text-[22px] mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-deep)",
                  fontWeight: 500,
                }}
              >
                {tier.name}
              </div>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--color-stone)" }}>
                {tier.copy}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex min-h-11 items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold"
                style={{ background: "var(--color-cta)", color: "var(--color-ivory)" }}
              >
                Introduce me to an advisor
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CASE NARRATIVES ─────────────────────────── */

function CaseNarratives() {
  const cases = [
    {
      tag: "Business owner · Manufacturing",
      title: "A liquidity event, 22 years in the making.",
      body:
        "We designed a three-year pre-sale plan, seated the trust structures, and stewarded proceeds into a diversified family portfolio — with philanthropy on day one.",
      image: wealthFamily,
    },
    {
      tag: "Multi-generational family · West Coast",
      title: "Fourth generation, first family council.",
      body:
        "Governance charter, next-gen education, and a shared investment policy — anchoring a $340M relationship across 27 family members.",
      image: wealthLegacy,
    },
    {
      tag: "Foundation · $180M",
      title: "Mission held. Corpus grown.",
      body:
        "A spending-policy redesign and mission-aligned portfolio grew corpus by 34% over eight years while increasing annual grants.",
      image: wealthAdvisor,
    },
  ];
  return (
    <section
      id="narratives"
      aria-labelledby="narratives-heading"
      style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>
          <span className="h-px w-8" style={{ background: "var(--color-mist)" }} aria-hidden="true" />
          § Client narratives
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2
            id="narratives-heading"
            className="tracking-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
              fontWeight: 200,
              lineHeight: 1.08,
            }}
          >
            Stewardship, <em style={{ fontStyle: "normal" }}>in practice.</em>
          </h2>
          <p className="text-[13px] max-w-md" style={{ color: "var(--color-mist)" }}>
            Anonymized situations, real work — a glimpse of how the relationship shows up when it
            matters.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(245,241,232,0.15)", background: "rgba(0,0,0,0.15)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.85) brightness(0.9)" }}
                />
              </div>
              <div className="p-6">
                <div
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "var(--color-mist)" }}
                >
                  {c.tag}
                </div>
                <h3
                  className="text-[19px] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {c.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
                  {c.body}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold min-h-11"
                  style={{ color: "var(--color-ivory)" }}
                >
                  Read the full case
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INSIGHTS ─────────────────────────── */

function WealthInsights() {
  const featured = {
    tag: "Feature · 14 min read",
    title: "The New Rules of Multigenerational Wealth",
    dek:
      "Why the next $84 trillion transfer won't behave like the last one — and how families should prepare.",
    author: "Katie Nixon · CIO, Wealth Management",
  };
  const others = [
    {
      tag: "Research",
      title: "2026 Global Market Outlook",
      meta: "Global Investment Strategy",
    },
    {
      tag: "Guide",
      title: "Tax-Efficient Giving in a Rising-Rate World",
      meta: "Wealth Planning",
    },
    {
      tag: "Perspective",
      title: "When to Sell the Business — and When Not To",
      meta: "Business Owner Advisory",
    },
  ];
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      style={{ background: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <SectionEyebrow label="§ Insights for wealth" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2
            id="insights-heading"
            className="tracking-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
              fontWeight: 200,
              lineHeight: 1.08,
              color: "var(--color-navy-deep)",
            }}
          >
            The thinking behind <em style={{ fontStyle: "normal" }}>the counsel.</em>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[13px] font-semibold min-h-11"
            style={{ color: "var(--color-cta)" }}
          >
            All wealth insights
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="grid lg:grid-cols-12 gap-6">
          <a
            href="#"
            className="lg:col-span-7 group rounded-2xl overflow-hidden border block"
            style={{ borderColor: "rgba(20,82,58,0.15)", background: "#fff" }}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={wealthLegacy}
                alt=""
                loading="lazy"
                width={1200}
                height={750}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-8">
              <div
                className="text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--color-stone)" }}
              >
                {featured.tag}
              </div>
              <h3
                className="text-[26px] mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-deep)",
                  fontWeight: 400,
                }}
              >
                {featured.title}
              </h3>
              <p className="text-[14px] mb-5 leading-relaxed" style={{ color: "var(--color-stone)" }}>
                {featured.dek}
              </p>
              <div className="text-[12px]" style={{ color: "var(--color-navy)" }}>
                {featured.author}
              </div>
            </div>
          </a>
          <div className="lg:col-span-5 flex flex-col gap-4">
            {others.map((o) => (
              <a
                key={o.title}
                href="#"
                className="group rounded-xl border p-6 flex-1 flex flex-col justify-between transition-colors hover:bg-white"
                style={{ borderColor: "rgba(20,82,58,0.15)", background: "#fff" }}
              >
                <div>
                  <div
                    className="text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "var(--color-stone)" }}
                  >
                    {o.tag}
                  </div>
                  <div
                    className="text-[17px] leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy-deep)",
                      fontWeight: 500,
                    }}
                  >
                    {o.title}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11.5px]" style={{ color: "var(--color-stone)" }}>
                    {o.meta}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--color-navy)" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROOF ─────────────────────────── */

function ProofStrip() {
  const stats = [
    { icon: TrendingUp, value: "$470B", label: "Wealth AUM" },
    { icon: Users, value: "9,200+", label: "Multigenerational families" },
    { icon: MapPin, value: "22", label: "Global wealth offices" },
    { icon: Award, value: "135 yrs", label: "As personal trustee" },
  ];
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      style={{ background: "var(--color-ivory-soft)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <SectionEyebrow label="§ By the numbers" />
            <h2
              id="proof-heading"
              className="tracking-tight max-w-2xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.1rem, 3.4vw, 2.8rem)",
                fontWeight: 500,
                lineHeight: 1.08,
                color: "var(--color-navy-deep)",
              }}
            >
              Proof, quietly kept.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[11px]" style={{ color: "var(--color-stone)" }}>
            <ShieldCheck className="h-3.5 w-3.5" />
            As of Q4 2025
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(20,82,58,0.15)" }}>
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="p-8"
                style={{ background: "var(--color-ivory-soft)" }}
              >
                <Icon className="h-5 w-5 mb-6" strokeWidth={1.5} style={{ color: "var(--color-navy-deep)" }} />
                <div
                  className="text-[38px] leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy-deep)",
                    fontWeight: 200,
                  }}
                >
                  {s.value}
                </div>
                <div className="text-[12px]" style={{ color: "var(--color-stone)" }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function WealthFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{ background: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10 py-24">
        <SectionEyebrow label="§ Frequently asked" />
        <h2
          id="faq-heading"
          className="tracking-tight mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
            fontWeight: 200,
            lineHeight: 1.08,
            color: "var(--color-navy-deep)",
          }}
        >
          Questions clients ask <em style={{ fontStyle: "normal" }}>before the first meeting.</em>
        </h2>
        <ul className="border-t" style={{ borderColor: "rgba(20,82,58,0.15)" }}>
          {faqData.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="border-b"
                style={{ borderColor: "rgba(20,82,58,0.15)" }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full min-h-11 flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className="text-[17px] leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy-deep)",
                      fontWeight: 500,
                    }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: "var(--color-navy-deep)" }}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10"
                >
                  <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--color-stone)" }}>
                    {f.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */

function AdvisorContact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}
      className="scroll-mt-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>
              <span className="h-px w-8" style={{ background: "var(--color-mist)" }} aria-hidden="true" />
              § Talk to us
            </div>
            <h2
              id="contact-heading"
              className="tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.0vw, 3.4rem)",
                fontWeight: 200,
                lineHeight: 1.08,
              }}
            >
              Begin a private <em style={{ fontStyle: "normal" }}>conversation.</em>
            </h2>
            <p className="text-[15px] max-w-md leading-relaxed mb-8" style={{ color: "var(--color-mist)" }}>
              A senior advisor will read this personally. No sales team, no scripts — just a first
              conversation to understand what you need.
            </p>
            <div className="space-y-3 text-[13.5px]" style={{ color: "var(--color-mist)" }}>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0" />
                50 South LaSalle Street, Chicago
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0" />
                22 offices worldwide
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Communications encrypted and confidential
              </div>
            </div>
          </div>
          <form
            className="lg:col-span-7 rounded-2xl border p-8 lg:p-10"
            style={{
              background: "rgba(245,241,232,0.05)",
              borderColor: "rgba(245,241,232,0.18)",
            }}
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="contact-desc"
          >
            <p id="contact-desc" className="sr-only">
              All fields optional except name and email.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField id="fld-name" label="Your name" required />
              <FormField id="fld-email" label="Email" type="email" required />
              <FormField id="fld-region" label="Region" placeholder="e.g. Midwest, EMEA" />
              <FormField id="fld-range" label="Investable range" placeholder="e.g. $10M — $50M" />
              <div className="md:col-span-2">
                <label
                  htmlFor="fld-message"
                  className="block text-[11px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: "var(--color-mist)" }}
                >
                  How can we help
                </label>
                <textarea
                  id="fld-message"
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 text-[14px] outline-none focus:ring-2"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(245,241,232,0.2)",
                    color: "var(--color-ivory)",
                  }}
                />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] max-w-sm" style={{ color: "var(--color-mist)" }}>
                By submitting, you consent to a Northern Trust advisor contacting you privately.
              </p>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center gap-3 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:gap-4"
                style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}
              >
                Send privately
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] tracking-[0.3em] uppercase mb-2"
        style={{ color: "var(--color-mist)" }}
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg px-4 py-3 text-[14px] outline-none focus:ring-2"
        style={{
          background: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(245,241,232,0.2)",
          color: "var(--color-ivory)",
        }}
      />
    </div>
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
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b" style={{ borderColor: "rgba(245,241,232,0.1)" }}>
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <NTMark invert />
            </div>
            <p className="text-[13px] leading-relaxed max-w-sm" style={{ color: "var(--color-mist)" }}>
              50 South LaSalle Street, Chicago, Illinois 60603. Serving generations of families, institutions, and advisors.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-mist)" }}>
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-[13px]" style={{ color: "var(--color-mist)" }}>
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