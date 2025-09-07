import { Button, Card, CardBody, CardHeader, ChartPlaceholder } from "@/components/mind2care/ui";

export default function Tracker() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <header className="mb-4">
          <h1 className="text-xl font-semibold text-[hsl(var(--charcoal))]">Daily Tracker</h1>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h2 className="text-base font-semibold text-[hsl(var(--charcoal))]">Journal entry</h2>
            </CardHeader>
            <CardBody>
              <textarea className="h-40 w-full rounded-xl border border-[hsl(var(--grayblue))] bg-white p-3 text-sm" placeholder="Write your thoughts..." />
              <div className="mt-3 flex items-center gap-3">
                <input type="range" min={1} max={5} className="w-40" aria-label="Mood slider" />
                <div className="flex gap-2 text-xs">
                  {['sleep','work','family','health'].map(t=> <span key={t} className="rounded-full bg-white px-2 py-0.5">{t}</span>)}
                </div>
              </div>
              <div className="mt-3 flex gap-3">
                <Button>Save entry</Button>
                <Button variant="secondary">View history</Button>
              </div>
            </CardBody>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardBody>
                <p className="text-sm font-medium text-[hsl(var(--charcoal))]">Streak: 5 days</p>
              </CardBody>
            </Card>
            <ChartPlaceholder />
          </div>
        </div>
      </section>
    </main>
  );
}
