import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_site_overview",
  title: "Get site overview",
  description:
    "Return a high-level overview of the Northern Trust redesign concept site, including its mission and top-level sections.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Northern Trust Website Redesign — a concept exploring accessible wealth management journeys, intelligent search, and legacy storytelling.",
          "",
          "Sections:",
          "- Home (/): brand hero, legacy story, and entry points.",
          "- Wealth Management (/wealth-management): services, philosophy, and client journeys.",
        ].join("\n"),
      },
    ],
  }),
});