import { Button, TaskCard } from "@/components/mind2care/ui";

export default function Tasks() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <header className="mb-4 flex items-center justify-between gap-3">
          <h1 className="text-xl font-semibold text-[hsl(var(--charcoal))]">Self Tasks</h1>
          <div className="flex gap-2">
            <input className="w-56 rounded-xl border border-[hsl(var(--grayblue))] bg-white px-3 py-2 text-sm" placeholder="Add a task" />
            <Button>Add</Button>
          </div>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[hsl(var(--charcoal))]">To do</h2>
            <TaskCard title="Stretch 5 min" tag="health" due="today" />
            <TaskCard title="Drink water" tag="health" />
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[hsl(var(--charcoal))]">Doing</h2>
            <TaskCard title="Read 10 pages" tag="focus" />
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[hsl(var(--charcoal))]">Done</h2>
            <TaskCard title="Walk outside" tag="health" />
          </div>
        </div>
      </section>
    </main>
  );
}
