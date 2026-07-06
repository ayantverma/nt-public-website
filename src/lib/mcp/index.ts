import { defineMcp } from "@lovable.dev/mcp-js";
import getSiteOverview from "./tools/get-site-overview";

export default defineMcp({
  name: "northern-trust-redesign-mcp",
  title: "Northern Trust Redesign MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Northern Trust website redesign concept. Use `get_site_overview` to learn about the site's sections and mission.",
  tools: [getSiteOverview],
});