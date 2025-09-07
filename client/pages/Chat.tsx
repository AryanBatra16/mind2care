import ChatDemo from "@/components/mind2care/ChatDemo";
import RightWidgets from "@/components/mind2care/RightWidgets";
import { useState } from "react";

export default function Chat() {
  const [calm, setCalm] = useState(false);
  return (
    <main className={`mx-auto max-w-7xl px-6 ${calm ? "" : ""}`}>
      <section
        className={`mt-6 rounded-3xl ${calm ? "bg-[hsl(var(--offwhite))]" : "bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/20"} p-4 md:mt-10 md:p-8`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[hsl(var(--charcoal))]">
            Chat
          </h1>
          <label className="flex items-center gap-2 text-sm text-[hsl(var(--charcoal))]">
            <input
              type="checkbox"
              checked={calm}
              onChange={(e) => setCalm(e.target.checked)}
            />{" "}
            Calm mode
          </label>
        </div>
        <div className="grid items-start gap-8 md:grid-cols-[1fr_320px]">
          <div className="flex justify-center">
            <ChatDemo fullHeight />
          </div>
          <aside className="hidden md:block">
            <RightWidgets />
            <div className="mt-4 rounded-2xl border border-[hsl(var(--grayblue))] bg-[hsl(var(--beige))] p-4 shadow-soft">
              <p className="text-sm font-semibold text-[hsl(var(--charcoal))]">
                Wellness tips
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[hsl(var(--charcoal))]/80">
                <li>Try a 3-minute breathing exercise.</li>
                <li>Write one thing you’re grateful for.</li>
                <li>Walk for 10 minutes in fresh air.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
