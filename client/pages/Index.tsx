import { useEffect } from "react";
import ChatDemo from "@/components/mind2care/ChatDemo";
import RightWidgets from "@/components/mind2care/RightWidgets";

export default function Index() {
  useEffect(() => {}, []);

  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="relative mt-8 rounded-3xl bg-gradient-to-br from-background to-card/60 p-4 md:mt-12 md:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/50 blur-3xl" />
        <div className="relative grid items-start gap-8 md:grid-cols-[1fr_320px]">
          <div className="flex justify-center">
            <ChatDemo />
          </div>
          <div className="hidden md:block">
            <RightWidgets />
          </div>
        </div>
      </section>
    </main>
  );
}
