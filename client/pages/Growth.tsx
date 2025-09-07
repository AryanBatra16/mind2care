import GrowthMap from "@/components/mind2care/GrowthMap";

export default function Growth() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <h1 className="mb-4 text-xl font-semibold text-[hsl(var(--charcoal))]">Growth Map</h1>
        <GrowthMap />
      </section>
    </main>
  );
}
