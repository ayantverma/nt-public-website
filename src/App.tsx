import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home";
import WealthManagement from "./pages/wealth-management";
import AssetServicing from "./pages/asset-servicing";
import GlobalReach from "./pages/global-reach";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Northern Trust — Since 1889. For Generations to Come.",
    description:
      "For 135 years, Northern Trust has served the world's most discerning families, institutions, and advisors — with wealth management, asset servicing, and asset management built on unshakeable trust.",
  },
  "/wealth-management": {
    title: "Wealth Management — Northern Trust",
    description:
      "Multi-generational wealth counsel for families, business owners, executives, and family offices. Investment management, trust & estate, family office, banking, and philanthropy — under one relationship, since 1889.",
  },
  "/asset-servicing": {
    title: "Asset Servicing — Northern Trust",
    description:
      "Institutional-grade custody, fund administration, investment operations, and data analytics — engineered for scale, resilience, and clarity.",
  },
  "/global-reach": {
    title: "Global Reach — Locations · Northern Trust",
    description:
      "Find a Northern Trust office. Locations across four continents supporting families, institutions, and advisors.",
  },
};

function useDocumentMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = PAGE_META[pathname] ?? PAGE_META["/"];
    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
}

function NotFound() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-6"
      style={{ background: "var(--color-ivory)", color: "var(--color-charcoal)" }}
    >
      <div className="max-w-md text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase opacity-70">404</p>
        <h1 className="mt-3 text-3xl">Page not found</h1>
        <p className="mt-3 opacity-80">The page you're looking for isn't here.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full px-5 py-2 text-sm"
          style={{ background: "var(--color-cta)", color: "var(--color-ivory)" }}
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  useDocumentMeta();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wealth-management" element={<WealthManagement />} />
      <Route path="/asset-servicing" element={<AssetServicing />} />
      <Route path="/global-reach" element={<GlobalReach />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}