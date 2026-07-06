import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

const ROTATING_PLACEHOLDERS = [
  'Ask Northern Trust anything — "How should a family office position for rate cuts?"',
  'Ask Northern Trust anything — "What is a dynasty trust and when does it make sense?"',
  'Ask Northern Trust anything — "How do you approach global custody for endowments?"',
  'Ask Northern Trust anything — "Compare discretionary vs. non-discretionary management."',
];

const SUGGESTIONS = [
  { label: "Plan a multigenerational estate", prompt: "How should we start planning a multigenerational estate?" },
  { label: "Compare custody solutions", prompt: "Compare Northern Trust's custody solutions for institutional clients." },
  { label: "2026 market outlook", prompt: "What is the 2026 market outlook and how should long-term investors think about it?" },
];

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroAskAgent({ onActiveChange }: { onActiveChange?: (active: boolean) => void } = {}) {
  const inputId = useId();
  const listboxId = useId();
  const statusId = useId();

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [engaged, setEngaged] = useState(false);

  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, error, stop } = useChat({ transport });

  // Notify parent whenever engaged state changes.
  useEffect(() => {
    onActiveChange?.(engaged);
  }, [engaged, onActiveChange]);

  // Click outside disengages.
  useEffect(() => {
    if (!engaged) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setEngaged(false);
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [engaged]);

  // Rotate placeholder (paused on focus / reduced motion).
  useEffect(() => {
    if (focused || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % ROTATING_PLACEHOLDERS.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [focused]);

  const submit = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setOpen(true);
      void sendMessage({ text: trimmed });
      setInput("");
    },
    [sendMessage],
  );

  const close = useCallback(() => {
    setOpen(false);
    stop();
    inputRef.current?.focus();
  }, [stop]);

  // Esc closes.
  useEffect(() => {
    if (!open && !engaged) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        setEngaged(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, engaged, close]);

  const isLoading = status === "submitted" || status === "streaming";
  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
  const lastUser = [...messages].reverse().find((m) => m.role === "user");

  const assistantText = renderText(lastAssistant);
  const userText = renderText(lastUser);

  return (
    <div ref={rootRef} className="mt-10 w-full max-w-2xl">
      <form
        role="search"
        aria-label="Ask Northern Trust"
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="relative"
      >
        <label htmlFor={inputId} className="sr-only">
          Ask Northern Trust a question
        </label>
        <div
          className="flex items-center gap-3 rounded-full pl-5 pr-2 py-2 backdrop-blur-md transition-colors"
          style={{
            background: "rgba(247,243,234,0.10)",
            border: "1px solid rgba(247,243,234,0.55)",
          }}
        >
          <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" style={{ color: "var(--color-ivory)" }} />
          <input
            id={inputId}
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => { setFocused(true); setEngaged(true); }}
            onBlur={() => setFocused(false)}
            onClick={() => setEngaged(true)}
            placeholder={ROTATING_PLACEHOLDERS[placeholderIdx]}
            aria-controls={listboxId}
            aria-expanded={open}
            aria-describedby={statusId}
            autoComplete="off"
            className="flex-1 bg-transparent outline-none text-[14px] py-2 placeholder:opacity-80"
            style={{ color: "var(--color-ivory)" }}
          />
          <button
            type="submit"
            aria-label="Ask"
            disabled={isLoading || !input.trim()}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: "var(--color-ivory)", color: "var(--color-cta)" }}
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>

      {/* Suggestion chips */}
      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label="Suggested questions"
      >
        {SUGGESTIONS.map((s) => (
          <li key={s.label}>
            <button
              type="button"
              onClick={() => submit(s.prompt)}
              className="inline-flex min-h-11 items-center rounded-full px-4 py-2 text-[13px] transition-colors hover:bg-white/15"
              style={{
                background: "rgba(247,243,234,0.08)",
                border: "1px solid rgba(247,243,234,0.35)",
                color: "var(--color-ivory)",
              }}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Live region for status */}
      <div id={statusId} aria-live="polite" className="sr-only">
        {isLoading ? "Searching Northern Trust knowledge…" : assistantText ? "Answer ready." : ""}
      </div>

      {/* Results panel */}
      {open && (
        <div
          ref={panelRef}
          id={listboxId}
          role="region"
          aria-label="Assistant answer"
          className="mt-4 rounded-2xl p-5 text-left"
          style={{
            background: "rgba(10,46,32,0.72)",
            border: "1px solid rgba(247,243,234,0.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="text-[11px] tracking-[0.25em] uppercase" style={{ color: "var(--color-mist)" }}>
              Northern Trust Assistant
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close assistant"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
              style={{ color: "var(--color-ivory)" }}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {userText && (
            <p className="mt-3 text-[13px]" style={{ color: "var(--color-mist)" }}>
              You asked: <span style={{ color: "var(--color-ivory)" }}>{userText}</span>
            </p>
          )}

          <div className="mt-3 text-[15px] leading-relaxed whitespace-pre-wrap" style={{ color: "var(--color-ivory)" }}>
            {assistantText || (isLoading ? "Thinking…" : "")}
          </div>

          {error && (
            <p role="alert" className="mt-4 text-[13px]" style={{ color: "#ffd7c2" }}>
              We couldn't reach the assistant. Please try again, or{" "}
              <a href="#audiences" className="underline">talk to an advisor</a>.
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-3 text-[12px]" style={{ color: "var(--color-mist)" }}>
            <a href="/wealth-management" className="underline underline-offset-4">Wealth Management</a>
            <span aria-hidden>·</span>
            <a href="#audiences" className="underline underline-offset-4">Talk to an advisor</a>
          </div>
        </div>
      )}
    </div>
  );
}

function renderText(message: UIMessage | undefined): string {
  if (!message) return "";
  return message.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("")
    .trim();
}