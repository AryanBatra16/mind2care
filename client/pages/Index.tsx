import {
  Bot,
  CalendarCheck,
  Quote as QuoteIcon,
  Flag,
  CheckCircle2,
  Users,
  Smile,
  Map,
} from "lucide-react";
import FeatureCard from "@/components/mind2care/FeatureCard";
import QuoteBanner from "@/components/mind2care/QuoteBanner";
import GrowthMap from "@/components/mind2care/GrowthMap";
import CommunityCard from "@/components/mind2care/CommunityCard";

export default function Index() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      {/* Hero Section */}
      <section className="relative mt-10 overflow-hidden rounded-3xl bg-[hsl(var(--offwhite))] p-8 shadow-soft md:mt-14 md:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[hsl(var(--rose))]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[hsl(var(--beige))]/60 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[hsl(var(--charcoal))] md:text-5xl">
            Mind2Care
          </h1>
          <p className="mx-auto mt-3 max-w-prose text-[hsl(var(--charcoal))]/80">
            Your AI-powered mental health companion
          </p>
          <a
            href="/chat"
            className="mt-6 inline-flex rounded-full bg-[hsl(var(--rose))] px-6 py-3 text-sm font-semibold text-white shadow-card transition-transform duration-200 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section className="mt-16 md:mt-24">
        <h2 className="text-center text-2xl font-bold text-[hsl(var(--charcoal))] md:text-3xl">
          Core Features
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-[hsl(var(--charcoal))]/70">
          Gentle routines, reflections, and a supportive community.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FeatureCard
            icon={<Bot className="h-5 w-5" />}
            title="AI Chatbot"
            desc="Compassionate conversations 24/7."
          />
          <FeatureCard
            icon={<CalendarCheck className="h-5 w-5" />}
            title="Daily Tracker"
            desc="Small habits, big change."
          />
          <FeatureCard
            icon={<QuoteIcon className="h-5 w-5" />}
            title="Quotes"
            desc="Daily inspiration to lift you up."
          />
          <FeatureCard
            icon={<Flag className="h-5 w-5" />}
            title="Challenges"
            desc="Weekly mindful challenges."
          />
          <FeatureCard
            icon={<CheckCircle2 className="h-5 w-5" />}
            title="Self Tasks"
            desc="Gentle to-dos for your day."
          />
          <FeatureCard
            icon={<Users className="h-5 w-5" />}
            title="Community"
            desc="Anonymous, supportive sharing."
          />
          <FeatureCard
            icon={<Smile className="h-5 w-5" />}
            title="Mood Tracker"
            desc="See and understand patterns."
          />
          <FeatureCard
            icon={<Map className="h-5 w-5" />}
            title="Growth Map"
            desc="Celebrate milestones on your path."
          />
        </div>
      </section>

      {/* Daily Inspirational Quote Banner */}
      <QuoteBanner />

      {/* Personal Growth Map Section */}
      <section className="mt-16 rounded-3xl bg-[hsl(var(--offwhite))] p-8 shadow-soft md:mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[hsl(var(--charcoal))] md:text-3xl">
            Personal Growth Map
          </h2>
          <p className="mt-2 text-[hsl(var(--charcoal))]/70">
            Follow a gentle path of milestones designed for reflection and
            growth.
          </p>
        </div>
        <div className="mt-10">
          <GrowthMap />
        </div>
      </section>

      {/* Community Section */}
      <section className="mt-16 md:mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[hsl(var(--charcoal))] md:text-3xl">
            Community
          </h2>
          <p className="mt-2 text-[hsl(var(--charcoal))]/70">
            Share experiences anonymously and support others on their journey.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <CommunityCard
            author="Anonymous"
            text="Today I took a short walk and practiced breathing. Felt lighter."
          />
          <CommunityCard
            author="Anonymous"
            text="Writing down three things I'm grateful for has helped a lot."
          />
          <CommunityCard
            author="Anonymous"
            text="Struggled in the morning, but finished the day with a small win."
          />
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}
