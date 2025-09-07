import { useEffect, useRef, useState } from "react";

interface Msg {
  from: "ai" | "user";
  text: string;
  time?: string;
}

export default function ChatDemo({ height = 78 }: { height?: number }) {
  const [messages] = useState<Msg[]>([
    { from: "ai", text: "Hi! I'm here to support you. How are you feeling today?", time: "9:00" },
  ]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, typing]);

  return (
    <section
      aria-label="Chatbot"
      className="mx-auto w-full max-w-[820px] rounded-2xl border border-[hsl(var(--grayblue))] bg-[hsl(var(--offwhite))] shadow-card"
      style={{ height: `${height}vh` }}
    >
      <div className="flex h-full flex-col">
        <div ref={listRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4">
          <div className="sticky top-0 z-10 mx-auto w-fit rounded-full bg-white/70 px-3 py-1 text-[10px] text-[hsl(var(--charcoal))]/70 backdrop-blur">
            Today
          </div>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft ${m.from === "user" ? "bg-[hsl(var(--rose))] text-white" : "bg-[hsl(var(--grayblue))] text-[hsl(var(--charcoal))]"}`}
              >
                <p>{m.text}</p>
                {m.time ? <span className="mt-1 block text-[10px] opacity-70">{m.time}</span> : null}
                {i === 0 && m.from === "ai" && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["I’m feeling anxious today", "Give me a gentle routine", "Help me set a goal"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className="rounded-full bg-white px-3 py-1 text-xs text-[hsl(var(--charcoal))]/80 shadow-soft transition-transform hover:scale-[1.02]"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-[hsl(var(--grayblue))] px-4 py-3 text-sm text-[hsl(var(--charcoal))] shadow-soft">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[hsl(var(--charcoal))] [animation-delay:-0.2s]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[hsl(var(--charcoal))]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[hsl(var(--charcoal))] [animation-delay:0.2s]" />
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-[hsl(var(--grayblue))]/70 bg-white/60 p-3">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setTyping(true);
              setTimeout(() => setTyping(false), 800);
            }}
          >
            <button aria-label="Attach" type="button" className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[hsl(var(--charcoal))]/70">
              📎
            </button>
            <input
              aria-label="Message"
              className="flex-1 rounded-xl border border-[hsl(var(--grayblue))] bg-[hsl(var(--offwhite))] px-3 py-3 text-sm outline-none placeholder:text-[hsl(var(--charcoal))]/60 focus:ring-2 focus:ring-ring"
              placeholder="Share how you’re feeling today…"
            />
            <button aria-label="Send" className="rounded-full bg-[hsl(var(--rose))] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]">
              Send
            </button>
            <button aria-label="Voice" type="button" className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[hsl(var(--charcoal))]/70">
              🎤
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
