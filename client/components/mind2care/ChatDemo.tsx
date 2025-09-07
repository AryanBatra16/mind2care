export default function ChatDemo({ fullHeight = false }: { fullHeight?: boolean }) {
  const messages = [
    { from: "ai", text: "Hi! I'm here to support you. How are you feeling today?" },
    { from: "user", text: "A bit anxious, but trying to stay positive." },
    { from: "ai", text: "Thanks for sharing. Let's take a deep breath together and try a grounding exercise." },
    { from: "user", text: "That would help. Thank you." },
  ];

  return (
    <div id="chat" className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-background p-4 shadow-card md:p-6">
      <div className="flex max-h-[60vh] flex-col gap-3 overflow-y-auto p-1">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft ${m.from === "user" ? "bg-[hsl(var(--rose))] text-white rounded-br-md" : "bg-[hsl(var(--grayblue))] text-[hsl(var(--charcoal))] rounded-bl-md"}`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          className="flex-1 rounded-xl border border-border bg-card px-3 py-3 text-sm outline-none placeholder:text-foreground/60 focus:ring-2 focus:ring-ring"
          placeholder="Share how you’re feeling today…"
          readOnly
        />
        <button className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]">
          Send
        </button>
      </div>
    </div>
  );
}
