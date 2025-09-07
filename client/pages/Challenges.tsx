import { ChallengeCard } from "@/components/mind2care/ui";

export default function Challenges() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="mt-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-6">
        <h1 className="mb-4 text-xl font-semibold text-[hsl(var(--charcoal))]">Challenges</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ChallengeCard title="Talk to 5 friends" steps={["Say hello","Check in","Share a thought"]} />
          <ChallengeCard title="10-min mindful walk" steps={["Go outside","Walk mindfully","Reflect"]} />
          <ChallengeCard title="Gratitude notes" steps={["Find 3 things","Write them","Celebrate"]} />
        </div>
      </section>
    </main>
  );
}
