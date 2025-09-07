import { MoodSelector, Card, CardBody, ChartPlaceholder } from "@/components/mind2care/ui";

export default function Mood() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <h1 className="mb-4 text-xl font-semibold text-[hsl(var(--charcoal))]">Mood Tracker</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <MoodSelector />
          <div className="space-y-4">
            <ChartPlaceholder />
            <Card>
              <CardBody>
                <p className="text-sm font-medium text-[hsl(var(--charcoal))]">Triggers</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[hsl(var(--charcoal))]/80">
                  <li>Mondays</li>
                  <li>Sleep &lt; 6h</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
