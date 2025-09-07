export default function ChatDemo() {
  const messages = [
    { from: "ai", text: "Hi! I'm here to support you. How are you feeling today?" },
    { from: "user", text: "A bit anxious, but trying to stay positive." },
    { from: "ai", text: "Thanks for sharing. Let's take a deep breath together and try a grounding exercise." },
    { from: "user", text: "That would help. Thank you." },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-background p-4 shadow-soft">
      <div className="max-h-[360px] space-y-3 overflow-y-auto p-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft ${m.from === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-[hsl(var(--border))] text-foreground rounded-bl-md"}`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-foreground/50 focus:ring-2 focus:ring-ring"
          placeholder="Type a message..."
          readOnly
        />
        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]">
          Send
        </button>
      </div>
    </div>
  );
}
