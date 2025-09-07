import { Button, Card, CardBody, QuoteCard } from "@/components/mind2care/ui";

export default function Quotes() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <header className="mb-4">
          <h1 className="text-xl font-semibold text-[hsl(var(--charcoal))]">
            Inspirational Quotes
          </h1>
        </header>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {["gratitude", "resilience", "focus"].map((f) => (
              <button
                key={f}
                className="rounded-full bg-white px-3 py-1 text-xs capitalize text-[hsl(var(--charcoal))]"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <Button>Surprise me</Button>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <QuoteCard
            quote="Growth is a journey, not a race."
            author="Unknown"
          />
          <QuoteCard
            quote="You are stronger than you think."
            author="Unknown"
          />
          <QuoteCard quote="Be gentle with yourself." author="Unknown" />
          <QuoteCard quote="Every day is a new chance." author="Unknown" />
        </div>
      </section>
    </main>
  );
}
