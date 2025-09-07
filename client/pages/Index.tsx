import { useEffect } from "react";
import { Bot, CalendarCheck, Quote, Flag, CheckCircle2, Users, Map } from "lucide-react";
import FeatureCard from "@/components/mind2care/FeatureCard";
import ChatDemo from "@/components/mind2care/ChatDemo";
import RightWidgets from "@/components/mind2care/RightWidgets";

export default function Index() {
  useEffect(() => {}, []);

  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--offwhite))] to-[hsl(var(--rose))]/10 p-8 shadow-soft md:mt-12">
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-semibold text-[hsl(var(--charcoal))]">Your AI-powered mental health companion</h1>
          <a href="/chat" className="mx-auto mt-4 inline-flex rounded-full bg-[hsl(var(--rose))] px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.02]">Start chatting</a>
        </div>
        <div className="relative mt-8 grid items-start gap-8 md:grid-cols-[1fr_320px]">
          <div className="flex justify-center">
            <ChatDemo />
          </div>
          <div className="hidden md:block">
            <RightWidgets />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-center text-xl font-semibold text-[hsl(var(--charcoal))]">Explore features</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <a href="/tracker"><FeatureCard icon={<CalendarCheck className="h-5 w-5" />} title="Daily Tracker" desc="Small habits, big change." /></a>
          <a href="/quotes"><FeatureCard icon={<Quote className="h-5 w-5" />} title="Quotes" desc="Daily inspiration to lift you up." /></a>
          <a href="/challenges"><FeatureCard icon={<Flag className="h-5 w-5" />} title="Challenges" desc="Weekly mindful challenges." /></a>
          <a href="/tasks"><FeatureCard icon={<CheckCircle2 className="h-5 w-5" />} title="Tasks" desc="Gentle to-dos for your day." /></a>
          <a href="/community"><FeatureCard icon={<Users className="h-5 w-5" />} title="Community" desc="Anonymous, supportive sharing." /></a>
          <a href="/growth"><FeatureCard icon={<Map className="h-5 w-5" />} title="Growth Map" desc="Celebrate milestones on your path." /></a>
        </div>
      </section>
    </main>
  );
}
