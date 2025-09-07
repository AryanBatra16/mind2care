import { Button, Card, CardBody } from "@/components/mind2care/ui";

export default function Community() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <header className="mb-4">
          <h1 className="text-xl font-semibold text-[hsl(var(--charcoal))]">Community</h1>
        </header>
        <div className="mb-4 flex items-center gap-2">
          {['anxiety','career','relationships','study'].map(t=> <button key={t} className="rounded-full bg-white px-3 py-1 text-xs capitalize text-[hsl(var(--charcoal))]">{t}</button>)}
        </div>
        <div className="mb-4 rounded-2xl border border-[hsl(var(--grayblue))] bg-white p-4">
          <textarea className="h-24 w-full rounded-xl border border-[hsl(var(--grayblue))] bg-white p-3 text-sm" placeholder="Share something..." />
          <div className="mt-2 flex items-center justify-between">
            <label className="text-xs text-[hsl(var(--charcoal))]">
              <input type="checkbox" className="mr-2" /> Post anonymously
            </label>
            <Button>Post</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[1,2,3,4].map(i=> (
            <Card key={i}><CardBody>
              <div className="mb-2 flex items-center gap-2 text-sm text-[hsl(var(--charcoal))]/70"><span className="grid h-8 w-8 place-items-center rounded-full bg-[hsl(var(--beige))]">A</span> Anonymous</div>
              <p className="text-sm text-[hsl(var(--charcoal))]">Today I practiced a short breathing session and felt calmer.</p>
              <div className="mt-3 flex gap-2 text-xs"><button>❤️</button><button>👍</button><button>Reply</button></div>
            </CardBody></Card>
          ))}
        </div>
      </section>
    </main>
  );
}
