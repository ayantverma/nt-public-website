import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Search, Globe, Menu } from "lucide-react";
import ntLogoMark from "@/assets/nt-logo.png";

export const Route = createFileRoute("/global-reach")({
  head: () => ({
    meta: [
      { title: "Global Reach — Locations · Northern Trust" },
      {
        name: "description",
        content:
          "Find a Northern Trust office. 22 locations across four continents, one standard of stewardship — search by city, region, or capability.",
      },
      { property: "og:title", content: "Global Reach — Northern Trust Locations" },
      {
        property: "og:description",
        content: "Find a Northern Trust office. 22 locations across four continents.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GlobalReachPage,
});

type Office = {
  city: string;
  country: string;
  region: "Americas" | "EMEA" | "APAC";
  role: string;
  capabilities: string[];
  hq?: boolean;
  // Approximate lat/long → svg coords (rough equirectangular over 1000×500).
  x: number;
  y: number;
};

const OFFICES: Office[] = [
  { city: "Chicago", country: "United States", region: "Americas", role: "Global Headquarters", capabilities: ["Wealth", "Asset Servicing", "Asset Management"], hq: true, x: 245, y: 195 },
  { city: "New York", country: "United States", region: "Americas", role: "Regional Office", capabilities: ["Wealth", "Asset Servicing"], x: 300, y: 200 },
  { city: "Toronto", country: "Canada", region: "Americas", role: "Regional Office", capabilities: ["Asset Servicing"], x: 285, y: 178 },
  { city: "São Paulo", country: "Brazil", region: "Americas", role: "Client Office", capabilities: ["Wealth"], x: 360, y: 340 },
  { city: "London", country: "United Kingdom", region: "EMEA", role: "Regional Headquarters", capabilities: ["Wealth", "Asset Servicing", "Asset Management"], x: 495, y: 175 },
  { city: "Dublin", country: "Ireland", region: "EMEA", role: "Fund Services Hub", capabilities: ["Asset Servicing"], x: 480, y: 178 },
  { city: "Luxembourg", country: "Luxembourg", region: "EMEA", role: "Fund Services", capabilities: ["Asset Servicing"], x: 508, y: 185 },
  { city: "Zürich", country: "Switzerland", region: "EMEA", role: "Client Office", capabilities: ["Wealth"], x: 515, y: 195 },
  { city: "Guernsey", country: "Channel Islands", region: "EMEA", role: "Fiduciary Services", capabilities: ["Wealth"], x: 490, y: 187 },
  { city: "Abu Dhabi", country: "United Arab Emirates", region: "EMEA", role: "Client Office", capabilities: ["Wealth", "Asset Servicing"], x: 615, y: 240 },
  { city: "Singapore", country: "Singapore", region: "APAC", role: "Regional Headquarters", capabilities: ["Wealth", "Asset Servicing"], x: 770, y: 300 },
  { city: "Hong Kong", country: "Hong Kong SAR", region: "APAC", role: "Regional Office", capabilities: ["Wealth", "Asset Servicing"], x: 815, y: 235 },
  { city: "Tokyo", country: "Japan", region: "APAC", role: "Client Office", capabilities: ["Asset Servicing"], x: 870, y: 205 },
  { city: "Sydney", country: "Australia", region: "APAC", role: "Client Office", capabilities: ["Asset Servicing"], x: 860, y: 355 },
  { city: "Melbourne", country: "Australia", region: "APAC", role: "Client Office", capabilities: ["Asset Servicing"], x: 845, y: 372 },
  { city: "Manila", country: "Philippines", region: "APAC", role: "Operations Hub", capabilities: ["Asset Servicing"], x: 815, y: 275 },
  { city: "Bangalore", country: "India", region: "APAC", role: "Technology Hub", capabilities: ["Asset Servicing"], x: 705, y: 265 },
  { city: "Limerick", country: "Ireland", region: "EMEA", role: "Operations Hub", capabilities: ["Asset Servicing"], x: 476, y: 178 },
];

const REGIONS = ["All regions", "Americas", "EMEA", "APAC"] as const;
const CAPABILITIES = ["All capabilities", "Wealth", "Asset Servicing", "Asset Management"] as const;

function GlobalReachPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("All regions");
  const [capability, setCapability] = useState<(typeof CAPABILITIES)[number]>("All capabilities");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return OFFICES.filter((o) => {
      if (region !== "All regions" && o.region !== region) return false;
      if (capability !== "All capabilities" && !o.capabilities.includes(capability)) return false;
      if (!query) return true;
      return (
        o.city.toLowerCase().includes(query) ||
        o.country.toLowerCase().includes(query) ||
        o.role.toLowerCase().includes(query) ||
        o.capabilities.join(" ").toLowerCase().includes(query)
      );
    });
  }, [q, region, capability]);

  const activeIds = new Set(filtered.map((o) => o.city));

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-ivory)", color: "var(--color-charcoal)", fontFamily: "var(--font-sans)" }}
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
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--color-navy-deep)", color: "var(--color-ivory)" }}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-24">
            <div
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--color-mist)" }}
            >
              <span className="h-px w-8" style={{ background: "var(--color-mist)" }} aria-hidden="true" />
              Global Reach
            </div>
            <h1
              className="tracking-tight max-w-4xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)",
                lineHeight: 1.02,
                fontWeight: 100,
              }}
            >
              Find your{" "}
              <em style={{ fontStyle: "normal", fontWeight: 200, color: "var(--color-mist)" }}>
                Northern Trust office.
              </em>
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
              22 offices across four continents — search by city, region, or capability to find the team that fits your mandate.
            </p>
          </div>
        </section>

        <section style={{ background: "var(--color-ivory)" }}>
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-14 lg:py-20">
            {/* Search + filters */}
            <div
              className="rounded-2xl p-4 lg:p-5 flex flex-col lg:flex-row gap-3 lg:items-center"
              style={{ background: "#fff", border: "1px solid rgba(20,82,58,0.15)" }}
              role="search"
              aria-label="Filter offices"
            >
              <label className="flex items-center gap-3 flex-1 px-3">
                <Search className="h-4 w-4" aria-hidden="true" style={{ color: "var(--color-navy)" }} />
                <span className="sr-only">Search offices</span>
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by city, country, or capability…"
                  className="flex-1 bg-transparent outline-none text-[14px] py-2.5"
                  style={{ color: "var(--color-navy)" }}
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <select
                  aria-label="Filter by region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value as (typeof REGIONS)[number])}
                  className="min-h-11 rounded-full px-4 py-2 text-[13px] bg-transparent"
                  style={{ border: "1px solid rgba(20,82,58,0.2)", color: "var(--color-navy)" }}
                >
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Filter by capability"
                  value={capability}
                  onChange={(e) => setCapability(e.target.value as (typeof CAPABILITIES)[number])}
                  className="min-h-11 rounded-full px-4 py-2 text-[13px] bg-transparent"
                  style={{ border: "1px solid rgba(20,82,58,0.2)", color: "var(--color-navy)" }}
                >
                  {CAPABILITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-3 text-[12px]" style={{ color: "var(--color-stone)" }}>
              Showing <strong style={{ color: "var(--color-navy)" }}>{filtered.length}</strong> of {OFFICES.length} locations
            </div>

            <div className="mt-8 grid lg:grid-cols-12 gap-8">
              {/* Map */}
              <div className="lg:col-span-7">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--color-navy-deep)",
                    border: "1px solid rgba(20,82,58,0.2)",
                    aspectRatio: "2 / 1",
                  }}
                  role="img"
                  aria-label="World map showing Northern Trust office locations"
                >
                  <WorldMap
                    offices={OFFICES}
                    activeIds={activeIds}
                    hoveredId={hoveredId}
                    onHover={setHoveredId}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-[11px]" style={{ color: "var(--color-stone)" }}>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-cta)" }} />
                    Matches your filter
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: "rgba(216,232,223,0.35)" }}
                    />
                    Other offices
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Globe className="h-3 w-3" /> Interactive — hover to preview
                  </span>
                </div>
              </div>

              {/* Results list */}
              <div className="lg:col-span-5">
                <ul className="divide-y" style={{ borderColor: "rgba(20,82,58,0.15)" }}>
                  {filtered.length === 0 && (
                    <li className="py-8 text-center text-[13px]" style={{ color: "var(--color-stone)" }}>
                      No offices match your search. Try broadening the filter.
                    </li>
                  )}
                  {filtered.map((o) => (
                    <li
                      key={o.city}
                      className="py-4 flex items-start justify-between gap-4"
                      style={{ borderColor: "rgba(20,82,58,0.15)" }}
                      onMouseEnter={() => setHoveredId(o.city)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-cta)" }} aria-hidden="true" />
                          <span
                            className="text-[16px]"
                            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 500 }}
                          >
                            {o.city}
                          </span>
                          {o.hq && (
                            <span
                              className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full"
                              style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
                            >
                              HQ
                            </span>
                          )}
                        </div>
                        <div className="text-[12px] mt-1" style={{ color: "var(--color-stone)" }}>
                          {o.country} · {o.role}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {o.capabilities.map((c) => (
                            <span
                              key={c}
                              className="text-[10px] tracking-wide px-2 py-0.5 rounded-full"
                              style={{
                                background: "var(--color-ivory-soft)",
                                color: "var(--color-navy)",
                                border: "1px solid rgba(20,82,58,0.15)",
                              }}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href="#"
                        aria-label={`Contact ${o.city} office`}
                        className="shrink-0 min-h-11 min-w-11 inline-flex items-center justify-center rounded-full"
                        style={{ color: "var(--color-cta)" }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function WorldMap({
  offices,
  activeIds,
  hoveredId,
  onHover,
}: {
  offices: Office[];
  activeIds: Set<string>;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(216,232,223,0.18)" />
        </pattern>
      </defs>
      <rect width="1000" height="500" fill="url(#dots)" />
      {/* Stylised continent blobs */}
      <g fill="rgba(216,232,223,0.08)" stroke="rgba(216,232,223,0.14)">
        {/* North America */}
        <path d="M120,120 C180,100 260,110 320,140 L340,220 C320,260 260,270 210,255 L150,240 C120,220 100,180 120,120 Z" />
        {/* South America */}
        <path d="M310,270 C350,280 380,320 375,380 C365,430 330,450 310,435 L295,380 C290,340 295,300 310,270 Z" />
        {/* Europe */}
        <path d="M470,140 C520,130 560,145 570,180 C555,215 510,220 480,205 L465,180 C460,165 465,150 470,140 Z" />
        {/* Africa */}
        <path d="M500,220 C550,215 585,240 590,290 C580,360 540,395 515,390 L495,340 C480,300 485,255 500,220 Z" />
        {/* Asia */}
        <path d="M580,140 C680,120 800,140 890,180 C900,230 860,275 800,270 L680,255 C620,245 585,210 580,140 Z" />
        {/* Oceania */}
        <path d="M820,340 C870,335 895,360 890,385 C860,405 820,395 810,375 Z" />
      </g>

      {/* Office markers */}
      {offices.map((o) => {
        const active = activeIds.has(o.city);
        const hover = hoveredId === o.city;
        const r = hover ? 10 : active ? 6 : 3;
        const fill = active ? "var(--color-cta)" : "rgba(216,232,223,0.35)";
        return (
          <g key={o.city} style={{ pointerEvents: "auto", cursor: "pointer" }}>
            {active && (
              <circle
                cx={o.x}
                cy={o.y}
                r={hover ? 18 : 12}
                fill="var(--color-cta)"
                opacity="0.18"
              />
            )}
            <circle
              cx={o.x}
              cy={o.y}
              r={r}
              fill={fill}
              stroke="var(--color-ivory)"
              strokeWidth={active ? 1.2 : 0}
              onMouseEnter={() => onHover(o.city)}
              onMouseLeave={() => onHover(null)}
            >
              <title>{`${o.city}, ${o.country}`}</title>
            </circle>
            {(hover || o.hq) && (
              <text
                x={o.x + 10}
                y={o.y - 8}
                fill="var(--color-ivory)"
                fontFamily="var(--font-display)"
                fontSize={11}
              >
                {o.city}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function TopBar() {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ background: "var(--color-ivory)", borderColor: "rgba(20,82,58,0.12)" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between gap-8 h-[88px]">
        <Link to="/" className="flex items-center gap-4 shrink-0" aria-label="Northern Trust — Home">
          <img src={ntLogoMark} alt="Northern Trust" className="h-14 w-auto shrink-0 select-none" draggable={false} />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] tracking-wide"
          style={{ color: "var(--color-navy)" }}
        >
          <Link to="/wealth-management" className="py-2 whitespace-nowrap">
            Wealth Management
          </Link>
          <Link to="/asset-servicing" className="py-2 whitespace-nowrap">
            Asset Servicing
          </Link>
          {["Asset Management", "Insights", "About", "Careers"].map((i) => (
            <a key={i} href="#" className="py-2 whitespace-nowrap">
              {i}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="hidden md:inline-flex min-h-11 items-center gap-2.5 px-7 py-3 rounded-full text-[12px] tracking-[0.16em] uppercase font-semibold whitespace-nowrap"
            style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}
          >
            Client Login
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button className="lg:hidden min-h-11 min-w-11 p-2.5" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--color-navy)", color: "var(--color-ivory)" }}>
      <div
        className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-[11px]"
        style={{ color: "var(--color-mist)" }}
      >
        <div>© 1889—2026 Northern Trust Corporation. All rights reserved.</div>
        <div className="flex flex-wrap gap-6">
          <Link to="/">Home</Link>
          <Link to="/wealth-management">Wealth Management</Link>
          <Link to="/asset-servicing">Asset Servicing</Link>
          <a href="#">Accessibility · WCAG 2.2 AA</a>
        </div>
      </div>
    </footer>
  );
}