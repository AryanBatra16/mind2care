import { useEffect } from "react";
import { Brain, Bot, CalendarCheck, Quote, Flag, CheckCircle2, Users, Smile, Map } from "lucide-react";
import FeatureCard from "@/components/mind2care/FeatureCard";
import ChatDemo from "@/components/mind2care/ChatDemo";
import GrowthMap from "@/components/mind2care/GrowthMap";
import CommunityCard from "@/components/mind2care/CommunityCard";
import QuoteBanner from "@/components/mind2care/QuoteBanner";

export default function Index() {
  useEffect(() => {
    // Optional: could fetch initial content here
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6">
      {/* Hero */}
      <section className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-background to-card/60 p-8 shadow-soft md:mt-14 md:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/70 blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-foreground/70 shadow-soft">
              <Brain className="h-3.5 w-3.5" /> Your AI-powered mental health companion
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Mind2Care
            </h1>
            <p className="mt-3 max-w-prose text-foreground/80">
              A safe, uplifting, and supportive space to track your mood, build mindful habits, and talk with an AI that cares.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#features" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]">
                Start your journey
              </a>
              <a href="#chatbot" className="rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.02]">
                Try the demo
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-border bg-gradient-to-br from-primary/40 via-card to-background shadow-card" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mt-16 md:mt-24">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">Core Features</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-foreground/70">
          Designed to help you build gentle routines, track your feelings, and grow with care.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FeatureCard icon={<Bot className="h-5 w-5" />} title="AI Chatbot" desc="Compassionate conversations 24/7." />
          <FeatureCard icon={<CalendarCheck className="h-5 w-5" />} title="Daily Tracker" desc="Small habits, big change." />
          <FeatureCard icon={<Quote className="h-5 w-5" />} title="Quotes" desc="Daily inspiration to lift you up." />
          <FeatureCard icon={<Flag className="h-5 w-5" />} title="Challenges" desc="Weekly mindful challenges." />
          <FeatureCard icon={<CheckCircle2 className="h-5 w-5" />} title="Tasks" desc="Gentle to-dos for your day." />
          <FeatureCard icon={<Users className="h-5 w-5" />} title="Community" desc="Anonymous, supportive sharing." />
          <FeatureCard icon={<Smile className="h-5 w-5" />} title="Mood Tracker" desc="See and understand patterns." />
          <FeatureCard icon={<Map className="h-5 w-5" />} title="Growth Map" desc="Celebrate milestones on your path." />
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteBanner />

      {/* Chatbot Demo */}
      <section id="chatbot" className="mt-16 md:mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Chatbot Demo</h2>
          <p className="mt-2 text-foreground/70">A calm, minimal chat experience to practice mindfulness and self-care.</p>
        </div>
        <div className="mt-8">
          <ChatDemo />
        </div>
      </section>

      {/* Growth Map */}
      <section id="growth" className="mt-16 md:mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Personal Growth Map</h2>
          <p className="mt-2 text-foreground/70">Follow a gentle path of milestones designed for reflection and growth.</p>
        </div>
        <div className="mt-10">
          <GrowthMap />
        </div>
      </section>

      {/* Community */}
      <section id="community" className="mt-16 md:mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Community</h2>
          <p className="mt-2 text-foreground/70">Share experiences anonymously and support others on their journey.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <CommunityCard author="Anonymous" text="Today I took a short walk and practiced breathing. Felt lighter." />
          <CommunityCard author="Anonymous" text="Writing down three things I'm grateful for has helped a lot." />
          <CommunityCard author="Anonymous" text="Struggled in the morning, but finished the day with a small win." />
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}
