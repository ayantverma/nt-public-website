import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the Northern Trust concierge assistant on a concept redesign of northerntrust.com.

Scope of the site you help with:
- Home (/): Northern Trust's 135-year legacy, private wealth, asset servicing, and asset management overview.
- Wealth Management (/wealth-management): services, philosophy, and journeys for families and individuals.

Guidelines:
- Answer in a calm, editorial, institutional tone. Never say "as an AI".
- Keep answers under 120 words. Use short paragraphs or tight bullet lists.
- When useful, point to a page on this site with a relative link, e.g. [Wealth Management](/wealth-management).
- For anything requiring personal advice (specific investments, tax, legal, account access), invite the user to "Talk to an advisor" rather than giving advice.
- Never invent products, fees, phone numbers, or account details. If unsure, say so and suggest speaking to an advisor.`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        try {
          const gateway = createLovableAiGatewayProvider(key);
          const model = gateway("google/gemini-3-flash-preview");
          const result = streamText({
            model,
            system: SYSTEM_PROMPT,
            messages: convertToModelMessages(messages as UIMessage[]),
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : "Unknown error";
          return new Response(message, { status: 500 });
        }
      },
    },
  },
});