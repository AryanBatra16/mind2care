import { useState } from "react";

export default function RightWidgets() {
  const [mood, setMood] = useState<number | null>(3);
  const moods = ["😞", "🙁", "😐", "🙂", "😄"];

  return (
    <aside className="flex w-full flex-col gap-4 md:sticky md:top-24 md:w-80">
      <div className="rounded-2xl bg-gradient-to-r from-primary/80 to-card p-5 text-center text-foreground shadow-soft">
        <p className="text-sm font-medium">“Your feelings are valid. Breathe in, breathe out.”</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <p className="text-sm font-semibold text-foreground">Quick Mood</p>
        <div className="mt-3 flex items-center justify-between">
          {moods.map((m, i) => (
            <button
              key={i}
              aria-label={`Mood ${i + 1}`}
              onClick={() => setMood(i)}
              className={`grid h-10 w-10 place-items-center rounded-xl transition-transform ${mood === i ? "bg-primary text-white scale-105 shadow-soft" : "bg-background text-foreground"}`}
            >
              <span className="text-lg">{m}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
