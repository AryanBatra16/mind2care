const steps = [
  { title: "Journaling", desc: "Capture daily thoughts and gratitude." },
  { title: "Challenges", desc: "Small weekly goals to build resilience." },
  { title: "Mood Tracking", desc: "Visualize patterns and triggers." },
  { title: "Mindfulness", desc: "Guided breathing and focus sessions." },
  { title: "Progress", desc: "Celebrate growth with insights." },
];

export default function GrowthMap() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative">
        <div className="absolute left-0 right-0 top-8 hidden h-1 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/20 md:block" />
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-card">
                <span className="text-sm font-semibold">{i + 1}</span>
              </div>
              <h4 className="mt-3 text-base font-semibold text-foreground">{s.title}</h4>
              <p className="mt-1 max-w-[16ch] text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
